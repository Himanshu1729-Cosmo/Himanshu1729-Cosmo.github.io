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







