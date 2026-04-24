---
layout: page
title: GetDist Post-processing
permalink: /tutorials/cobaya-getdist/
---

# Post-processing and Visualization
---

Once the MCMC sampling with Cobaya is completed, the output consists of several files generated using the chosen run name (e.g., `test`). These typically include:

`test.1.txt`, `test.checkpoint`, `test.covmat`, `test.input.yaml`, `test.progress`, and `test.updated.yaml`.

Each file serves a specific purpose:

- `.1.txt` → Main MCMC chain file containing sampled parameter values  
- `.covmat` → Covariance matrix used for proposal updates  
- `.progress` → Information about convergence and sampling status  
- `.input.yaml` / `.updated.yaml` → Configuration files for the run  
- `.checkpoint` → Allows restarting the chain if interrupted  

For post-processing and plotting, the most important file is:

`test.1.txt`

This file contains the actual MCMC samples. Inside, you will find multiple columns corresponding to different cosmological parameters (e.g., $H_0$, $\Omega_m$, $\sigma_8$, etc.), along with additional columns such as weights and likelihood values.

Now, we introduce the main library used for post-processing, namely the **GetDist** package, which is widely used in cosmology. It provides a powerful and flexible framework for processing Monte Carlo chains, computing marginalized constraints, and generating high-quality plots such as one-dimensional distributions and two-dimensional contour (triangle) plots.

GetDist is fully compatible with Cobaya outputs and allows efficient handling of large datasets. It also supports derived parameters, parameter transformations, and comparison between different cosmological models or datasets.

In this section, we will demonstrate how to load Cobaya chain files, analyze them using GetDist, and produce standard cosmological plots.

Additional information can be found at: - [GetDist Documentation](https://getdist.readthedocs.io/en/latest/), and [Plot Gallery](https://getdist.readthedocs.io/en/latest/plot_gallery.html)

As an example, we consider the $w_0w_a$CDM model, in which the equation of state (EoS) of dark energy is parameterized as:

$$
w(z) = w_0 + w_a \frac{z}{1+z}.
$$

## Plotting with GetDist

```python
import numpy as np
from getdist import MCSamples, plots
import matplotlib.pyplot as plt
import matplotlib as mpl
mpl.rcParams['mathtext.fontset'] = 'cm'

# ============================================================
# LOAD CHAIN
# ============================================================

data = np.loadtxt('/path/to/your/chains/test_1.1.txt')

# ============================================================
# APPLY 30% BURN-IN
# ============================================================
burn_in_fraction = 0.30
burn_in_index = int(len(data) * burn_in_fraction)
data = data[burn_in_index:]
weights = data[:, 0]

# ============================================================
# EXTRACT PARAMETERS
# ============================================================
logA     = data[:, 2]
ns       = data[:, 3]
ombh2    = data[:, 4]
omch2    = data[:, 5]
tau      = data[:, 6]
thetaMC  = data[:, 7]
w0       = data[:, 8]
wa       = data[:, 9]
H0       = data[:, 22]
omegam   = data[:, 27]
rdrag    = data[:, 30]
sigma8   = data[:, 34]


# ============================================================
# DERIVED PARAMETER: S8
# ============================================================
S8 = sigma8 * np.sqrt(omegam / 0.3)

# ============================================================
# STACK PARAMETERS
# ============================================================
params = np.column_stack([logA, ns, ombh2, omch2,
                         tau, thetaMC,w0, wa, H0, omegam, rdrag, sigma8, S8])

# ============================================================
# PARAMETER NAMES & LABELS
# ============================================================
names = ['logA', 'ns', 'ombh2', 'omch2',
         'tau', 'thetaMC','w0', 'wa', 'H0', 'omegam', 'rdrag', 'sigma8', 'S8']
labels = [r'\ln(10^{10} A_s)', r'n_s', r'\Omega_{\mathrm{b}} h^2', r'\Omega_{\mathrm{c}} h^2',
          r'\tau', r'100\,\theta_{\mathrm{MC}}', r'w_0', r'w_a', r'H_0', r'\Omega_{m}', r'r_{\mathrm{drag}}', r'\sigma_8', r'S_8']

ranges = {'wa': (-3, None)}

# ============================================================
# CREATE MCSAMPLES OBJECT
# ============================================================
samples = MCSamples( samples=params, weights=weights, names=names, labels=labels, ranges=ranges)

# ============================================================
# TRIANGLE PLOT
# ============================================================
g = plots.getSubplotPlotter(width_inch=25.0)
g.settings.figure_legend_frame = True
g.settings.alpha_filled_add = 0.6
g.settings.axes_labelsize = 20
g.settings.legend_fontsize = 25
g.triangle_plot( [samples], names, filled=True, contour_colors=['darkblue'], legend_labels=[r'DESI DR2 + CMB'], legend_loc='upper right', title_limit=1)
g.export("fig_plot.png")
```
---

![Figure](/assets/img/fig_plot.png){: .mx-auto.d-block }

## Plotting Multiple Chains Together

```python
from getdist import MCSamples, plots
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
mpl.rcParams['mathtext.fontset'] = 'cm'

# ============================================================
# FUNCTION TO LOAD & PROCESS CHAIN
# ============================================================

def load_chain(path):

    data = np.loadtxt(path)

    # -------- Burn-in --------
    burn_in_fraction = 0.30
    burn_in_index = int(len(data) * burn_in_fraction)
    data = data[burn_in_index:]

    weights = data[:, 0]

    # -------- Parameters --------
    logA     = data[:, 2]
    ns       = data[:, 3]
    ombh2    = data[:, 4]
    omch2    = data[:, 5]
    tau      = data[:, 6]
    thetaMC  = data[:, 7]
    w0       = data[:, 8]
    wa       = data[:, 9]
    H0       = data[:, 22]
    omegam   = data[:, 27]
    rdrag    = data[:, 30]
    sigma8   = data[:, 34]
    
    # -------- Derived --------
    S8 = sigma8 * np.sqrt(omegam / 0.3)

    params = np.column_stack([logA, ns, ombh2, omch2, tau,
                            thetaMC,w0, wa, H0, omegam, rdrag, sigma8, S8])

    names = ['logA', 'ns', 'ombh2', 'omch2', 'tau', 'thetaMC',
             'w0', 'wa', 'H0', 'omegam', 'rdrag', 'sigma8', 'S8']

    labels = [r'\ln(10^{10} A_s)', r'n_s', r'\Omega_{\mathrm{b}} h^2',
            r'\Omega_{\mathrm{c}} h^2', r'\tau', r'100\,\theta_{\mathrm{MC}}',
            r'w_0', r'w_a', r'H_0', r'\Omega_{m}', r'r_{\mathrm{drag}}', r'\sigma_8', r'S_8']

    ranges = {'wa': (-3, None)}

    return MCSamples(samples=params, weights=weights, names=names, labels=labels, ranges=ranges)

# ============================================================
# LOAD ALL CHAINS
# ============================================================
chain1 = load_chain('/path/to/your/chains/test_1.1.txt')
chain2 = load_chain('/path/to/your/chains/test_2.1.txt')
chain3 = load_chain('/path/to/your/chains/test_3.1.txt')
chain4 = load_chain('/path/to/your/chains/test_4.1.txt')

# ============================================================
# TRIANGLE PLOT (SUPERIMPOSED)
# ============================================================

g = plots.getSubplotPlotter(width_inch=16.0)
g.settings.figure_legend_frame = True
g.settings.alpha_filled_add = 0.6
g.settings.title_limit_fontsize = 12
g.settings.axes_labelsize = 20
g.settings.legend_fontsize = 24
g.settings.colorbar_axes_fontsize = 10

plot_params = ['logA', 'ns', 'ombh2', 'omch2', 'tau', 'thetaMC','w0',
              'wa', 'H0', 'omegam', 'rdrag', 'sigma8', 'S8']

g.triangle_plot(
    [chain1, chain2, chain3, chain4],
    plot_params,
    filled=True,
    legend_labels=[
        r'CMB + DESI DR2',
        r'CMB + DESI DR2 + Pantheon$^+$',
        r'CMB + DESI DR2 + DES-Dovekie',
        r'CMB + DESI DR2 + Union3'
    ],
    contour_colors=['#4a6fdc', '#ff4500', '#a020f0', '#00008b'],
    legend_loc='upper right'
)

g.export("fig_super.png")
```
---

![Figure](/assets/img/fig_super.png){: .mx-auto.d-block }

## 2D Plot 

```python
g2d = plots.get_single_plotter(width_inch=6)
g2d.settings.figure_legend_frame = True
g2d.settings.alpha_filled_add = 0.6
g2d.settings.axes_labelsize = 20
g2d.settings.legend_fontsize = 14

g2d.plot_2d(
    [samples1,samples2,samples3,samples4],
    param_pair=['w0', 'wa'],
    filled=True,
    colors=['orange', 'darkblue', 'magenta', 'purple'],
)
ax = g2d.subplots[0, 0]
ax.set_xlabel(r'$w_0$')
ax.set_ylabel(r'$w_a$')

# ΛCDM reference lines
ax.axvline(x=-1, color='black', linestyle='--', linewidth=1.5)
ax.axhline(y=0,  color='black', linestyle='--', linewidth=1.5)

# Optional: mark the exact point
ax.plot(-1, 0, marker='*', color='black', markersize=10, zorder=10)

# Optional manual limits
ax.set_xlim(-1.27, 0.2)
ax.set_ylim(-3.0, 0.6)

# Legend
g2d.add_legend(
    legend_labels=[
        r'DESI DR2 + CMB',
        r'DESI DR2 + CMB + Pantheon$^+$',
        r'DESI DR2 + CMB + DES-Dovekie',
        r'DESI DR2 + CMB + Union3 ',
    ],
    fontsize=7.0,
    legend_loc=(0.52, 0.6)
)

# Aesthetics
for spine in ax.spines.values():
    spine.set_linewidth(1.2)
ax.tick_params(axis='both', which='both', width=1.2, length=5)

g2d.export("2D.png")
```
![Figure](/assets/img/fig_super.png){: .mx-auto.d-block }









