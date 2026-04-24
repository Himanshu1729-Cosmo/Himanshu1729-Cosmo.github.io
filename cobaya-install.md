---
layout: page
title: Cobaya Installation
permalink: /cobaya-install/
---

# Cobaya: Bayesian Analysis in Cosmology

## Installation and Usage Guide

---

Cobaya (code for bayesian analysis, and Spanish for Guinea Pig) is a framework for sampling and statistical modelling: it allows you to explore an arbitrary prior or posterior using a range of Monte Carlo samplers (including the advanced MCMC sampler from CosmoMC, and the advanced nested sampler PolyChord). The results of the sampling can be analysed with GetDist. It supports MPI parallelization (and very soon HPC containerization with Docker/Shifter and Singularity).

Its authors are Jesus Torrado and Antony Lewis. Some ideas and pieces of code have been adapted from other codes (e.g CosmoMC by Antony Lewis and contributors, and Monte Python, by J. Lesgourgues and B. Audren).

Cobaya has been conceived from the beginning to be highly and effortlessly extensible: without touching cobaya’s source code, you can define your own priors and likelihoods, create new parameters as functions of other parameter.

Though cobaya is a general purpose statistical framework, it includes interfaces to cosmological theory codes (CAMB and CLASS) and likelihoods of cosmological experiments (Planck, Bicep-Keck, SDSS… and more coming soon). Automatic installers are included for all those external modules. You can also use cobaya simply as a wrapper for cosmological models and likelihoods, and integrate it in your own sampler/pipeline.

The interfaces to most cosmological likelihoods are agnostic as to which theory code is used to compute the observables, which facilitates comparison between those codes. Those interfaces are also parameter-agnostic, so using your own modified versions of theory codes and likelihoods requires no additional editing of cobaya’s source.

The original web page [**Cobaya Website**](https://cobaya.readthedocs.io/en/latest/#:~:text=Cobaya%20(code%20for%20bayesian%20analysis,the%20advanced%20nested%20sampler%20PolyChord).) that is cited in this document.

---

# Preparation

First, install the required compilers and libraries.

---

## 1. Ubuntu

### Install Compilers and Dependencies

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

### Install Python (Recommended: Miniconda)

```bash
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

### Install Python Libraries

```bash
python3 -m pip install pip
pip3 install numpy scipy matplotlib cython astropy getdist jupyter
conda install jupyter
```

---

## Alternative (System Python)

```bash
sudo apt install python3 python3-pip
pip3 install numpy scipy matplotlib cython astropy getdist jupyter
sudo apt install jupyter
```

---

## 2. macOS

### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Install Dependencies

```bash
brew install wget git nano lapack cfitsio open-mpi
```

### Install Python

```bash
brew install python3
python3 -m pip install --upgrade pip
```

### Install Libraries

```bash
pip3 install numpy scipy matplotlib cython astropy getdist jupyter
brew install jupyter
```

---

### (Recommended) Miniconda

#### Apple Silicon

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

#### Intel

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

---

# Cobaya Installation

## Install Cobaya

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

---

# Sample Run

### Python Input Example

```python
# (same as your original — unchanged)
```

### Run Script

```python
from mpi4py import MPI
from cobaya import run
from cobaya.log import LoggedError

comm = MPI.COMM_WORLD
rank = comm.Get_rank()

success = False
try:
    upd_info, mcmc = run(info)
    success = True
except LoggedError:
    pass

success = all(comm.allgather(success))

if not success and rank == 0:
    print("Sampling failed!")
```

---

## Output Options

* `output: something` → files in current folder
* `output: folder/something` → saves in folder
* `output: folder/` → no prefix
* `output: null` → no files (memory only)

---

# Parallel Run (Slurm)

```bash
#!/bin/bash
#SBATCH -J Cobaya
#SBATCH -n 4

module purge
module load hwloc
module load intel/19.0.5.281
module load openmpi3/4.0.2

mpirun -n 4 python3 model.py
```

---

# Output Files

* `.input.yaml` → input file
* `.updated.yaml` → full config
* `.txt` → samples
* `.progress` → convergence

---

# Plotting with GetDist

### Load Chains

```python
from getdist import plots, loadMCSamples

file_root = 'chains/test'
samples = loadMCSamples(file_root=file_root, settings={'ignore_rows':0.5})
```

---

### 2D Plot

```python
g = plots.get_subplot_plotter()
g.plot_2d([samples], 'omegabh2', 'omegach2', filled=True)
```

---

### Triangle Plot

```python
g.triangle_plot(samples, ['omegabh2','omegach2','ns'], filled=True)
```

---

### Compare Models

```python
samples2 = loadMCSamples('chains/test2')
g.triangle_plot((samples, samples2), ['omegabh2','omegach2','ns'], filled=True)
```

---

## 🔥 Done

This tutorial gives you a complete pipeline from installation → running → plotting.
