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
