---
layout: page
title: Cobaya Installation
permalink: /tutorials/cobaya-install/
---

Cobaya (code for bayesian analysis, and Spanish for Guinea Pig) is a framework for sampling and statistical modelling: it allows you to explore an arbitrary prior or posterior using a range of Monte Carlo samplers (including the advanced MCMC sampler from CosmoMC, and the advanced nested sampler PolyChord). The results of the sampling can be analysed with GetDist. It supports MPI parallelization (and very soon HPC containerization with Docker/Shifter and Singularity).

Its authors are Jesus Torrado and Antony Lewis. Some ideas and pieces of code have been adapted from other codes (e.g CosmoMC by Antony Lewis and contributors, and Monte Python, by J. Lesgourgues and B. Audren).

Cobaya has been conceived from the beginning to be highly and effortlessly extensible: without touching cobaya’s source code, you can define your own priors and likelihoods, create new parameters as functions of other parameter.

Though cobaya is a general purpose statistical framework, it includes interfaces to cosmological theory codes (CAMB and CLASS) and likelihoods of cosmological experiments (Planck, Bicep-Keck, SDSS… and more coming soon). Automatic installers are included for all those external modules. You can also use cobaya simply as a wrapper for cosmological models and likelihoods, and integrate it in your own sampler/pipeline.

The interfaces to most cosmological likelihoods are agnostic as to which theory code is used to compute the observables, which facilitates comparison between those codes. Those interfaces are also parameter-agnostic, so using your own modified versions of theory codes and likelihoods requires no additional editing of cobaya’s source.

The original web page [Cobaya Website](https://cobaya.readthedocs.io/en/latest/index.html) that is cited in this document.

Preparation 

First, the computer needs to install essential libraries and compilers.  

### 1. Ubuntu

**Install Compiler**
```bash
sudo apt update && sudo apt upgrade
sudo apt install nano
sudo apt install wget
sudo apt install git -y
sudo apt install liblapack-dev
sudo apt install libcfitsio-dev
sudo apt install build-essential
sudo apt-get install openmpi-bin openmpi-doc libopenmpi-dev
```

**Install Python and Librareis, We recommd you to install Miniconda for better manage Python evironment.**

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

**Then install Python and Libraries.**

```bash
python3 -m pip install pip
pip3 install numpy
pip3 install scipy
pip3 install matplotlib
pip3 install cython
pip3 install astropy
pip3 install getdist
pip3 install jupyter
conda install jupyter
```

**In the other way, you can also install Python via Site-Package.**

```bash
sudo apt install python3
sudo apt install python3-pip
pip3 install numpy
pip3 install scipy
pip3 install matplotlib
pip3 install cython
pip3 install astropy
pip3 install getdist
pip3 install jupyter
sudo apt install jupyter
```

### 2. MacOS
**Install HomeBrew**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Install Compiler**
```bash
brew install wget
brew install git
brew install nano
brew install lapack
brew install cfitsio
brew install open-mpi
```

MacOS includes a built-in Python compiler within the site-packages libraries,  do not need to install Python via Homebrew. However, if an unresolved bug arise, it may become necessary to install Homebrew's Python at that point.

**Install Homebrew Python**
```bash
brew install python3
python3 -m pip install --upgrade pip
```

**Install Python's required Librareis**
```bash
pip3 install numpy
pip3 install scipy
pip3 install matplotlib
pip3 install cython
pip3 install astropy
pip3 install getdist
pip3 install jupyter
brew install jupyter
```

**For better handle Python evironment, we recommd you to install Miniconda.**

**For Apple Silicon chip**
```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```
**For Intel chip**

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```
**Then install Python and Libraries.**

```bash
python3 -m pip install pip
pip3 install numpy
pip3 install scipy
pip3 install matplotlib
pip3 install cython
pip3 install astropy
pip3 install getdist
pip3 install jupyter
conda install jupyter
```

### 3. Cobaya

**Cobaya Library Installation**

```bash
pip3 install cobaya
```
**Cosmological theory codes and likelihoods. ⚠️ You need to replace `<path/to/your/directory>` by your istalled directory path such as `/home/if01/`**

```bash
cobaya-install cosmo -p /path/to/your/directory
cobaya-install planck_2018_highl_plik.TTTEEE
cobaya-install bicep_keck_2018
```

You need to place theory codes and likelihoods in the `/path/to/packages` directory, but you can also modified this path to suit on your own machine.\
If the installation is successful, `code` and `data` directories will be shown on your pc.

**Setting Cosmology Run, Creating the input for a realistic cosmological case is quite a bit of work. But to make it simpler, cobaya has created an automatic input generator, that you can run from the shell.**

```bash
python3 -m pip install PySide6
```

```bash
cobaya-cosmo-generator
```

![Figure](/assets/img/input.png){: .mx-auto.d-block }

**4. Configuration of the YAML file**

```yaml
theory:
  camb:
    extra_args:
      lens_potential_accuracy: 1
      num_massive_neutrinos: 1
      nnu: 3.044
      theta_H0_range:
      - 20
      - 100
likelihood:
  bao.desi_dr2: null
  planck_2018_lowl.TT: null
  planck_2018_lowl.EE: null
  planck_NPIPE_highl_CamSpec.TTTEEE: null
  planckpr4lensing:
    package_install:
      github_repository: carronj/planck_PR4_lensing
      min_version: 1.0.2
params:
  logA:
    prior:
      min: 1.61
      max: 3.91
    ref:
      dist: norm
      loc: 3.05
      scale: 0.001
    proposal: 0.001
    latex: \log(10^{10} A_\mathrm{s})
    drop: true
  As:
    value: 'lambda logA: 1e-10*np.exp(logA)'
    latex: A_\mathrm{s}
  ns:
    prior:
      min: 0.8
      max: 1.2
    ref:
      dist: norm
      loc: 0.965
      scale: 0.004
    proposal: 0.002
    latex: n_\mathrm{s}
  theta_MC_100:
    prior:
      min: 0.5
      max: 10
    ref:
      dist: norm
      loc: 1.04109
      scale: 0.0004
    proposal: 0.0002
    latex: 100\theta_\mathrm{MC}
    drop: true
    renames: theta
  cosmomc_theta:
    value: 'lambda theta_MC_100: 1.e-2*theta_MC_100'
    derived: false
  H0:
    latex: H_0
    min: 20
    max: 100
  ombh2:
    prior:
      min: 0.005
      max: 0.1
    ref:
      dist: norm
      loc: 0.0224
      scale: 0.0001
    proposal: 0.0001
    latex: \Omega_\mathrm{b} h^2
  omch2:
    prior:
      min: 0.001
      max: 0.99
    ref:
      dist: norm
      loc: 0.12
      scale: 0.001
    proposal: 0.0005
    latex: \Omega_\mathrm{c} h^2
  omegam:
    latex: \Omega_\mathrm{m}
  omegamh2:
    derived: 'lambda omegam, H0: omegam*(H0/100)**2'
    latex: \Omega_\mathrm{m} h^2
  mnu: 0.06
  omega_de:
    latex: \Omega_\Lambda
  YHe:
    latex: Y_\mathrm{P}
  Y_p:
    latex: Y_P^\mathrm{BBN}
  DHBBN:
    derived: 'lambda DH: 10**5*DH'
    latex: 10^5 \mathrm{D}/\mathrm{H}
  tau:
    prior:
      min: 0.01
      max: 0.8
    ref:
      dist: norm
      loc: 0.055
      scale: 0.006
    proposal: 0.003
    latex: \tau_\mathrm{reio}
  zrei:
    latex: z_\mathrm{re}
  sigma8:
    latex: \sigma_8
  s8h5:
    derived: 'lambda sigma8, H0: sigma8*(H0*1e-2)**(-0.5)'
    latex: \sigma_8/h^{0.5}
  s8omegamp5:
    derived: 'lambda sigma8, omegam: sigma8*omegam**0.5'
    latex: \sigma_8 \Omega_\mathrm{m}^{0.5}
  s8omegamp25:
    derived: 'lambda sigma8, omegam: sigma8*omegam**0.25'
    latex: \sigma_8 \Omega_\mathrm{m}^{0.25}
  A:
    derived: 'lambda As: 1e9*As'
    latex: 10^9 A_\mathrm{s}
  clamp:
    derived: 'lambda As, tau: 1e9*As*np.exp(-2*tau)'
    latex: 10^9 A_\mathrm{s} e^{-2\tau}
  age:
    latex: '{\rm{Age}}/\mathrm{Gyr}'
  rdrag:
    latex: r_\mathrm{drag}
sampler:
  mcmc:
    drag: true
    oversample_power: 0.4
    proposal_scale: 1.9
    covmat: auto
    Rminus1_stop: 0.01
    Rminus1_cl_stop: 0.2
```
---

**5. After saving the `.yaml` file (e.g., `test.yaml`), run:**

```bash
cobaya-run test.yaml
```
**6. Output Files**

**Once the MCMC sampling with Cobaya is completed, the output consists of several files generated using the chosen run name (e.g., `test`). These typically include:**

`test.1.txt`, `test.checkpoint`, `test.covmat`, `test.input.yaml`, `test.progress`, and `test.updated.yaml`.

Each file serves a specific purpose:

- `.1.txt` → Main MCMC chain file containing sampled parameter values  
- `.covmat` → Covariance matrix used for proposal updates  
- `.progress` → Information about convergence and sampling status  
- `.input.yaml` / `.updated.yaml` → Configuration files for the run  
- `.checkpoint` → Allows restarting the chain if interrupted  

**For post-processing and plotting, the most important file is:**

`test.1.txt`

This file contains the actual MCMC samples. Inside, you will find multiple columns corresponding to different cosmological parameters (e.g., $H_0$, $\Omega_m$, $\sigma_8$, etc.), along with additional columns such as weights and likelihood values.

**7. Post-processing and Visualization**

Now, we introduce the main library used for post-processing, namely the **GetDist** package, which is widely used in cosmology. It provides a powerful and flexible framework for processing Monte Carlo chains, computing marginalized constraints, and generating high-quality plots such as one-dimensional distributions and two-dimensional contour (triangle) plots. GetDist is fully compatible with Cobaya outputs and allows efficient handling of large datasets. It also supports derived parameters, parameter transformations, and comparison between different cosmological models or datasets.

In this section, we will demonstrate how to load Cobaya chain files, analyze them using GetDist, and produce standard cosmological plots. Additional information can be found at: - [GetDist Documentation](https://getdist.readthedocs.io/en/latest/), and [Plot Gallery](https://getdist.readthedocs.io/en/latest/plot_gallery.html)

As an example, we consider the $w_0w_a$CDM model, in which the equation of state (EoS) of dark energy is parameterized as:

$$
w(z) = w_0 + w_a \frac{z}{1+z}.
$$

**8. Plotting with GetDist**

```python
%matplotlib inline
from getdist import plots, loadMCSamples

file_root1 = '/path/to/your/chains/test_1'
file_root2 = '/path/to/your/chains/test_2'
file_root3 = '/path/to/your/chains/test_3'
file_root4 = '/path/to/your/chains/test_4'

samples1 = loadMCSamples(file_root=file_root1, settings={'ignore_rows':0.5})
samples2 = loadMCSamples(file_root=file_root2, settings={'ignore_rows':0.5})
samples3 = loadMCSamples(file_root=file_root3, settings={'ignore_rows':0.5})
samples4 = loadMCSamples(file_root=file_root4, settings={'ignore_rows':0.5})
```

2D plot

```python
g2 = plots.get_subplot_plotter(width_inch=5)
g2.settings.axes_fontsize = 16
g2.settings.axes_labelsize = 20
g2.plot_2d( [samples1, samples2, samples3, samples4], 'w0', 'wa', filled=True,
    contour_lws=1.5, colors=['#4a6fdc', '#ff4500', '#a020f0', '#00008b'])

ax = g2.subplots[0, 0]
ax.axvline(x=-1, color='black', linestyle='--', linewidth=1.5)
ax.axhline(y=0,  color='black', linestyle='--', linewidth=1.5)
ax.plot(-1, 0, marker='*', color='gold', markersize=12, zorder=10)
ax.text(-1.1, 0.1, r'$\Lambda$CDM', fontsize=12)

g2.add_legend([r'DESI DR2 + CMB',
        r'DESI DR2 + CMB + Pantheon$^+$',
        r'DESI DR2 + CMB + DES-Dovekie',
        r'DESI DR2 + CMB + Union3 '])
g2d.export("2D.png")
```

![Figure](/assets/img/2D.png){: .mx-auto.d-block}

Triangle plot
```python
g = plots.get_subplot_plotter(width_inch=10)
g.settings.axes_fontsize = 16
g.settings.axes_labelsize = 20
g.triangle_plot(samples1,['logA', 'ns', 'ombh2', 'omch2', 'tau', 'thetaMC', 'w0', 'wa'],legend_labels=[r'CMB + DESI DR2'],filled=True,contour_lws=1.5)
```

![Figure](/assets/img/fig_plot.png){: .mx-auto.d-block }

If you want to superimpose more then one chains models results, you can add additional chains to the code by including another file_root similar to the first dataset. You can also adjust the number of parameters in the same way.

```python
%matplotlib inline
from getdist import plots, loadMCSamples

file_root1 = '/path/to/your/chains/test_1'
file_root2 = '/path/to/your/chains/test_2'
file_root3 = '/path/to/your/chains/test_3'
file_root4 = '/path/to/your/chains/test_4'

samples1 = loadMCSamples(file_root=file_root1, settings={'ignore_rows':0.5})
samples2 = loadMCSamples(file_root=file_root2, settings={'ignore_rows':0.5})
samples3 = loadMCSamples(file_root=file_root3, settings={'ignore_rows':0.5})
samples4 = loadMCSamples(file_root=file_root4, settings={'ignore_rows':0.5})

g = plots.get_subplot_plotter()

g.settings.axes_fontsize = 14
g.settings.axes_labelsize = 16
g.settings.legend_fontsize = 12
g.settings.alpha_filled_add = 0.85
g.settings.figure_legend_frame = False

g.triangle_plot(
    [samples1, samples2, samples3, samples4],
    ['logA', 'ns', 'ombh2', 'omch2', 'tau', 'thetaMC', 'w0', 'wa'],
    filled=True,
    contour_lws=1.5,
    colors=['#4a6fdc', '#ff4500', '#a020f0', '#00008b'])
g2.add_legend([r'DESI DR2 + CMB',
        r'DESI DR2 + CMB + Pantheon$^+$',
        r'DESI DR2 + CMB + DES-Dovekie',
        r'DESI DR2 + CMB + Union3 '])
g.export("fig_super.png")
```
![Figure](/assets/img/fig_super.png){: .mx-auto.d-block }

