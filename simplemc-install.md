---
layout: page
title: SimpleMC Installation
permalink: /tutorials/simplemc-install/
---

This page is devoted to the full installation guide for the `SimpleMC` cosmological inference code. `SimpleMC` is a Python package designed for cosmological parameter estimation and model comparison using Bayesian inference, optimization techniques, and machine learning algorithms. It also provides a collection of useful tools for cosmological data analysis, including cosmological calculators, plotting utilities, and various statistical analysis tools.

The cosmological models currently implemented in `SimpleMC` mainly focus on dark energy scenarios in which the cosmic expansion history plays the central role. In this tutorial, you will learn how to install `SimpleMC` on Linux-based systems, macOS, and Windows. The guide is written for beginners and includes step-by-step instructions to help you set up a fully working environment for cosmological analyses.

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

## Installing SimpleMC

To install SimpleMC, the system architecture does not matter significantly. The code can be installed on both `x86_64` and `arm64` systems by following the methods below.

In this tutorial, I will use my personal GitHub repository for convenience and testing purposes. However, please always cite and acknowledge the original [SimpleMC repository](https://github.com/ja-vazquez/SimpleMC.git) appropriately in scientific work.


**1. Create a Conda Environment**

Before installing SimpleMC, it is recommended to create a clean Conda environment:

```bash
conda create -n simpleMC_env python=3.10 -y
conda activate simpleMC_env
```

**2. Clone the repository:**

```bash
git clone https://github.com/1729Him/SimpleMC
cd SimpleMC
```

Install Required Python Packages
Using `pip`

**3. Install the core required packages:**

```bash
pip install numpy==1.26.4
pip install scipy==1.11.4
pip install scikit-learn==1.3.2
pip install pandas matplotlib numdifftools mpi4py
```

**4. Using conda (Recommended)**

For better compatibility and easier dependency management, we recommend using `conda`:

```bash
conda install numpy=1.26.4
conda install scipy=1.11.4
conda install scikit-learn=1.3.2
conda install -c conda-forge pandas matplotlib numdifftools mpi4py
```

**5. Install SimpleMC**

For editable/development mode:

```bash
pip install -e .
```

or for a standard installation:

```bash
pip install .
```

In the next page, we will explore the basic structure of `SimpleMC` and learn how to add a new dark energy model by considering the JBP (*Jassal–Bagla–Padmanabhan*) as an example.



