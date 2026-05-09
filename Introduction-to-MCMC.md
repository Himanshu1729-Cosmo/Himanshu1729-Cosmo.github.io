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

Below, you will find links to several practical notebooks, which will help users understand how to construct likelihoods for different datasets such as Cosmic Chronometers, Pantheon$^+$ calibrated, Pantheon$^+$ uncalibrated, DES-Dovekie, Union3, and baryon acoustic oscillation (BAO) measurements from DESI Data Release 2 (DR2) considering cosmological models such as $\Lambda$CDM, o$\Lambda$CDM, and $w$CDM. Each notebook is designed to help users understand the implementation of cosmological parameter estimation, including all relevant equations and mathematical arguments, likelihood construction, Bayesian inference, and statistical analysis using PyPolyChord. Keep in mind that, in these notebooks, I keep the sound horizon as a free parameter.

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #c0392b; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/o%CE%9BCDM_Model.ipynb"><b>o$\Lambda$CDM Model</b></a><br>
In this notebook, I discuss the o$\Lambda$CDM model by considering the spatial curvature parameter $\Omega_k$ as a free parameter. The datasets considered are Cosmic Chronometers, Pantheon$^+$ uncalibrated, and DESI DR2.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #2980b9; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/wCDM_Model.ipynb"><b>$w$CDM Model</b></a><br>
In this notebook, I discuss the $w$CDM model by considering the dark energy equation of state parameter $w$ as a free parameter. The datasets considered are Cosmic Chronometers, Pantheon$^+$ uncalibrated, and DESI DR2.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #16a085; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_CC_DESI_PP.ipynb"><b>$\Lambda$CDM + CC + DESI + Pantheon$^+$</b></a><br>
In this notebook, I discuss the standard $\Lambda$CDM cosmology using Cosmic Chronometers, DESI DR2, and the Pantheon$^+$ uncalibrated supernova dataset.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #8e44ad; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_CC_DESI_DES.ipynb"><b>$\Lambda$CDM + CC + DESI + DES</b></a><br>
In this notebook, I discuss the standard $\Lambda$CDM cosmology using Cosmic Chronometers, DESI DR2, and DES-Dovekie datasets.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #d35400; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_CC_DESI_PP_M.ipynb"><b>$\Lambda$CDM + CC + DESI + Pantheon$^+$ + M</b></a><br>
In this notebook, I discuss the $\Lambda$CDM cosmology by additionally considering the supernova absolute magnitude parameter $M$ as a free parameter together with Cosmic Chronometers, DESI DR2, and Pantheon$^+$ datasets.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #27ae60; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_CC_DESI_Union3.ipynb"><b>$\Lambda$CDM + CC + DESI + Union3</b></a><br>
In this notebook, I discuss the $\Lambda$CDM cosmology using Cosmic Chronometers, DESI DR2, and the Union3 Type Ia supernova compilation.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #2c3e50; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_PP_SHOES.ipynb"><b>$\Lambda$CDM + Pantheon$^+$ + SH0ES</b></a><br>
In this notebook, I discuss the calibrated Pantheon$^+$ + SH0ES supernova dataset within the framework of the standard $\Lambda$CDM cosmology.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #7f8c8d; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_PP_correction_parameter.ipynb"><b>$\Lambda$CDM + Pantheon$^+$ Correction Parameter</b></a><br>
In this notebook, I discuss the implementation of correction parameters in the Pantheon$^+$ supernova dataset and study their cosmological implications within the $\Lambda$CDM framework.
</div>

<div style="background-color:#f8f9fa; padding:15px; border-left:5px solid #e74c3c; margin-bottom:18px;">
<a href="https://github.com/Himanshu1729-Cosmo/Cosmological-Inference-Learn-with-Me/blob/main/%CE%9BCDM_Model_superimposed_all.ipynb"><b>Superimposed Cosmological Constraints</b></a><br>
In this notebook, I present superimposed cosmological constraints obtained from different datasets and cosmological models for comparison and visualization purposes.
</div>
