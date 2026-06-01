---
layout: page
title: Post-processing and Statistical Analysis
permalink: /tutorials/simplemc-postprocessing/
---

This page is devoted to the post-processing stage in SimpleMC. After adding a cosmological model, the user should first navigate to the `SimpleMC` directory and inspect the `baseConfig.ini` file. Here, the developer explains the different sampler options, dataset choices, and post-processing settings used throughout the analysis.

Now, we will continue our discussion by exploring the JBP model after adding it to SimpleMC. In this tutorial, I will use the nested sampling algorithm via the `dynesty` Python package with the `multi` bounding option. Before that, I also show an example where we use the `dynesty` Python package with the `'ellipsoidal'`, `'multinest'`, `'balls'`, and `'cubes'` bounding options, together with the standard MCMC configuration options used in SimpleMC for cosmological analyses, as shown below.

![Figure](/assets/img/simpleMC_10.png){: .mx-auto.d-block }

### 1. Adding New .ini file `SimpleMC`

Now, I will explain how we can add a `.ini` file where you will define where the chains will be stored, the choice of the model, the choice of datasets, and the sampler settings. Below, you will find an example. You need to create your `.ini` file in the `SimpleMC` directory, let us say with the name `jbp.ini`.

![Figure](/assets/img/simpleMC_11.png){: .mx-auto.d-block }

Find below the corresponding `jbp.ini` file.

```ini
[custom]
chainsdir = simplemc/chains/
model = JBP
prefact = phy
datasets = DESIDR2+HD23+Union3
analyzername = nested
overwrite = True

[nested]
nestedType = multi
nlivepoints = 250
accuracy = 0.0005
priortype = u
nproc = 10
```

### 2. Give your path in the `test.py`

Now, go to the `SimpleMC` directory and open the `test.py` file. Then, add the name of your corresponding `.ini` file, for example `jbp.ini`.

![Figure](/assets/img/simpleMC_12.png){: .mx-auto.d-block }

Find below the corresponding `test.py` file.

```python
from simplemc.DriverMC import DriverMC
import multiprocessing as mp

"read all setting from .ini file"
inifile = "jbp.ini"

if __name__ == '__main__':
    mp.freeze_support()
    analyzer = DriverMC(iniFile=inifile)
    analyzer.executer()
```

Now, open your terminal, open the `SimpleMC` directory, activate the environment using `conda activate simpleMC_env`, and type `python test.py` to run the code. 

Once the sampling process is completed, you will obtain several output files such as:

* `JBP_phy_DESIDR2+HD23+Union3_nested_multi_1.txt`
* `JBP_phy_DESIDR2+HD23+Union3_nested_multi_Summary.txt`
* `JBP_phy_DESIDR2+HD23+Union3_nested_multi.covmat`
* `JBP_phy_DESIDR2+HD23+Union3_nested_multi.maxlike`
* `JBP_phy_DESIDR2+HD23+Union3_nested_multi.paramnames`

Each of these files contains different information related to the analysis:

* `*_1.txt` : contains the full chain samples generated during the nested sampling process, including parameter values, likelihoods, and weights.
* `*_Summary.txt` : provides a summary of the parameter constraints and statistical results.
* `*.covmat` : stores the covariance matrix of the sampled cosmological parameters.
* `*.maxlike` : contains the maximum-likelihood parameter values.
* `*.paramnames` : lists the parameter names and their corresponding LaTeX labels used in the analysis.

For post-processing and visualization, we are mainly interested in the file
`JBP_phy_DESIDR2+HD23+Union3_nested_multi_1.txt`.


```python
import numpy as np
from scipy.special import logsumexp
from getdist import MCSamples, plots
import matplotlib.pyplot as plt
import matplotlib as mpl
mpl.rcParams['mathtext.fontset'] = 'cm'

# ============================================================
# Load chain
# Replace the path below with the location of your chain file
# on your system.
# ============================================================
chain = np.loadtxt( "/path/to/your/chain/JBP_phy_DESIDR2+Planck_18+Union3_nested_multi_1.txt")

# ============================================================
# Nested weights
# ============================================================
logwt = chain[:,0]
negloglike = chain[:,1]
loglike = -negloglike

logwt_norm = logwt - logsumexp(logwt)
weights = np.exp(logwt_norm)

print("Sum of weights =", np.sum(weights))

# ============================================================
# Extract parameters
# ============================================================
Om   = chain[:,2]
Obh2 = chain[:,3]
h    = chain[:,4]
w0   = chain[:,5]
wa   = chain[:,6]

H0 = 100.0 * h

samples_array = np.vstack([Om, H0, w0, wa, Obh2]).T

# ============================================================
# Create GetDist samples
# ============================================================
samples = MCSamples(
    samples=samples_array,
    weights=weights,
    loglikes=loglike,
    names=['Om','H0','w0','wa','Obh2'],
    labels=[
        r'\Omega_m',
        r'H_0',
        r'w_0',
        r'w_a',
        r'\Omega_b h^2'
    ],
    ranges={'wa': (-3.0, None)}
)

# ============================================================
# Triangle Plot
# ============================================================
g = plots.getSubplotPlotter(width_inch=6)

g.settings.alpha_filled_add = 0.5
g.settings.axes_fontsize = 12
g.settings.lab_fontsize = 16
g.settings.legend_fontsize = 14

g.triangle_plot(
    samples,
    ['Om', 'H0', 'w0', 'wa'],
    filled=True,
    contour_colors=['darkblue'],
    title_limit=1
)

g.export("JBP_triangle.pdf")

plt.show()
```









