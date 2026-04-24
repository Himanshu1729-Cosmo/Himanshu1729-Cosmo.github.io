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

**Cobaya Library Installation**

```bash
pip3 install cobaya
```

---

## Install Cosmological Codes and Likelihoods

⚠️ Replace `/path/to/your/directory` with your actual path (e.g., `/home/user/`)

```bash
cobaya-install cosmo -p /path/to/your/directory
cobaya-install planck_2018_highl_plik.TTTEEE
cobaya-install bicep_keck_2018
```

---

## Generate Input Automatically

```bash
pip install PySide6
cobaya-cosmo-generator
```
