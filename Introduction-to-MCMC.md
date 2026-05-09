---
layout: page
title: Understanding MCMC
permalink: /tutorials/Introduction-to-MCMC/
---

# Learn Markov Chain Monte Carlo with Me.
---

In this page, I provide several practical `.ipynb` notebooks designed to help researchers at the early stages of their careers understand and apply cosmological parameter estimation techniques in modern cosmology.

These notebooks are designed to be used for constraining cosmological models, especially models such as (ΛCDM, oΛCDM, and wCDM), that can be written in analytical form. The major focus of these notebooks is Bayesian inference through nested sampling using the PyPolyChord Python library. These notebooks are intended to help users understand not only how to run cosmological analyses, but also how to correctly construct likelihoods, apply proper statistical methods, and interpret the statistical quality of cosmological models.

The notebooks provide practical demonstrations of how to compute and interpret important statistical quantities commonly used in cosmology, including:

- Bayesian evidence and Bayes factors in logarithmic space,
- minimum chi-square statistics ($\chi^2_{\min}$),
- goodness-of-fit tests,
- $p$-values,

The first step is to install PyPolyChord on the local system. Here, I will provide installation examples for both Linux-based systems and macOS. For macOS, I expect the architecture to be `arm64`. However, even if the system is using an `x86_64` architecture, one can still follow the Linux-based Miniconda installation procedure.

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

### 2. MacOS

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

From now on, I will give an example for Intel-based chips, where the architecture is `x86_64`. To install PyPolyChord, we need to do the following:

### 3. macOS when the architecture is `x86_64`

```bash
conda create --name polychord_env python=3.10 --platform osx-64
conda activate polychord_env
conda install -c conda-forge compilers openmpi mpi4py cmake make
git clone https://github.com/PolyChord/PolyChordLite.git
cd PolyChordLite
make
pip install .
```

### 4. macOS when the architecture is `arm64`

```bash
conda create -n cobaya_env python=3.10 -y
conda activate polychord_env
conda install -c conda-forge compilers openmpi mpi4py cmake make
git clone https://github.com/PolyChord/PolyChordLite.git
cd PolyChordLite
make
pip install .
```

---

Below, you will find links to several practical notebooks covering different cosmological models and datasets. Each notebook is designed to help users understand the implementation of cosmological parameter estimation, likelihood construction, Bayesian inference, and statistical analysis using PyPolyChord.

- [o$\Lambda$CDM Model](https://your-link-here)
- [$w$CDM Model](https://your-link-here)
- [$\Lambda$CDM + CC + DESI + DES](https://your-link-here)
- [$\Lambda$CDM + CC + DESI + Pantheon$^+$](https://your-link-here)
- [$\Lambda$CDM + CC + DESI + Pantheon$^+$ + M](https://your-link-here)
- [$\Lambda$CDM + CC + DESI + Union3](https://your-link-here)
- [$\Lambda$CDM + Pantheon$^+$ + SH0ES](https://your-link-here)
- [$\Lambda$CDM + Pantheon$^+$ Correction Parameter](https://your-link-here)
- [Superimposed Cosmological Constraints](https://your-link-here)
