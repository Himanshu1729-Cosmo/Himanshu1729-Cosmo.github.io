---
layout: page
title: macOS Users
permalink: /tutorials/cobaya-pro-macos-apple/
---

This page is devoted to **macOS users with Apple Silicon chips (M1, M2, M3, and M4)**. In this tutorial, we will provide a step-by-step guide for installing **Cobaya** and its required dependencies on Apple Silicon-based Mac systems. The instructions are intended for advanced users who wish to build a fully functional environment for cosmological parameter estimation and Bayesian inference using Cobaya.

### 1. Installation on macOS

#### Install Homebrew

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Install Required Compilers and Libraries

```bash
brew install wget
brew install git
brew install nano
brew install lapack
brew install cfitsio
brew install open-mpi
```

macOS includes a built-in Python installation, so in many cases it is not necessary to install Python through Homebrew. However, if you encounter dependency issues or version conflicts, it is recommended to install and use the Homebrew Python distribution.

#### Install Homebrew Python (Optional)

```bash
brew install python
python3 -m pip install --upgrade pip
```

You can verify the installation using

```bash
python3 --version
pip3 --version
```

The required Python packages such as NumPy, SciPy, Matplotlib, GetDist, MPI4Py, and other dependencies will be installed automatically during the Cobaya installation process described in the following sections.

** 1.a For Apple Silicon Chips **

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```
