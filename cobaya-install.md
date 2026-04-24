---
layout: page
title: Cobaya Installation
permalink: /tutorials/cobaya-install/
---

# Cobaya: Bayesian Analysis in Cosmology

## Installation and Usage Guide

---

Cobaya is a flexible framework for Bayesian analysis in cosmology, designed for parameter estimation and statistical inference. It enables the exploration of arbitrary priors and posteriors using a wide range of Monte Carlo sampling techniques, including advanced MCMC methods and nested sampling algorithms such as PolyChord. The resulting chains can be efficiently analysed using tools like GetDist.

Developed by Jesús Torrado and Antony Lewis, Cobaya builds upon ideas from established cosmological codes such as CosmoMC and MontePython. It is designed to be highly extensible, allowing users to define custom priors, likelihoods, and derived parameters without modifying the core source code.

In cosmological applications, Cobaya provides interfaces to widely used Boltzmann solvers such as CAMB and CLASS, along with likelihoods from major observational datasets including Planck, BICEP/Keck, and SDSS. Its modular design allows it to function either as a standalone inference engine or as part of a larger cosmological analysis pipeline.

A key advantage of Cobaya is its code-agnostic interface: the likelihoods are independent of the underlying theory solver, enabling straightforward comparisons between different cosmological models. This also allows users to incorporate modified or custom theory codes without requiring additional changes to the framework.

For more details, see the official documentation:  
[**Cobaya Website**](https://cobaya.readthedocs.io/en/latest/)

---

# Preparation

**First, install the essential libraries and compilers.**

---

### 1. Ubuntu

**Install Compilers and Dependencies**

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

**Install Python and Libraries — I recommend using Miniconda for better environment management (Anaconda can also be used).**

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

**Then install Python and Libraries**

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

---

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
---

## 2. macOS

**Install HomeBrew**

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)""
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

MacOS includes a built-in Python compiler within the site-packages libraries, do not need to install Python via Homebrew. However, if an unresolved bug arise, it may become necessary to install Homebrew's Python at that point.

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
---

For better handle Python evironment, I recommd you to install Miniconda.

**For Apple Silicon chip**

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
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
---

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
---

# Cobaya 

**1. Cobaya Library Installation**

```bash
pip3 install cobaya
```

---

**2. Install Cosmological Codes and Likelihoods**

⚠️ Replace `/path/to/your/directory` with your actual path (e.g., `/home/user/`)

```bash
cobaya-install cosmo -p /path/to/your/directory
cobaya-install planck_2018_highl_plik.TTTEEE
cobaya-install bicep_keck_2018
```

You need to place theory codes and likelihoods in the `/path/to/your/directory` but you can also modified this path to suit on your own machine.
If the installation is successful, code and data directories will be shown on your pc.

---

**3. Generate Input Automatically**

Setting Cosmology Run Creating the input for a realistic cosmological case is quite a bit of work. But to make it simpler, cobaya has created an automatic input generator, that you can run from the shell.

```bash
pip install PySide6
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
