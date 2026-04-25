---
layout: page
title: Monte Python & CLASS Installation
permalink: /tutorials/montepython-install/
---

# Class-Installation

CLASS (Cosmic Linear Anisotropy Solving System) is a numerical tool for solving the evolution of linear cosmological perturbations and for computing the cosmological observables for a given input model. CLASS is a flexible and user-friendly code that can be easily generalized to non-minimal cosmological models. CLASS was written by Julien Lesgourgues & Thomas Tram, and first released in 2011. CLASS is written in C language for each module. It comes with C++ and Python wrapper.

For more information about CLASS can be found on the website: [CLASS official website](http://class-code.net). The CLASS papers can be found below

* CLASS I: Overview, by J. Lesgourgues, arXiv:1104.2932 [astro-ph.IM]
* CLASS II: Approximation schemes, by D. Blas, J. Lesgourgues, T. Tram, arXiv:1104.2933 [astro-ph.CO], JCAP 1107 (2011) 034

---

## 1. Pre-requisites

### 1.a) Mac users

Mac users may have to install the Command Line Tools for Xcode in order to use the commands like `gcc`, `git` or `make` or package management tools like Homebrew. You can check if the Command Line Tools have already installed to your system or not by open the terminal and run

```bash
xcode-select -p
```

If they are already installed, it should return a path like /Library/Developer/CommandLineTools. If not, you can install them manually by running the following command

```bash
xcode-select --install
```

Alternatively you can download the Command Line Tools by going to the site: [Apple Developer Downloads](https://developer.apple.com/download/all/) (sign in is required), click download Command Line Tools for XCode. Next step, you need to install Homebrew in the system. Homebrew can be downloaded it by typing this command on the terminal

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After that, you will need to install a C-language compiler such as `GCC` (Gnu Compiler Collection), which is commonly used as a compiler with support for `C`, `C++`, `Fortran`, etc.

```bash
brew install gcc
```

To make sure that CGG works properly, run

```bash
gcc --version
```

Next step, check for the python version with

```bash
python --version
```

Python wrapper for class may not yet be compatible with Python version v.3.11, so we have to specify version of Python in order to set up the wrapper. In this note we will use Python v.3.11. Next step, we need to install Cython. This allows Python code to directly call the C functions in CLASS. To install Cython that associate with the Python v.3.11, use the command below.

```bash
python3.11 -m pip install Cython
```

---

### 1.b) Linux Users

You need to have `gcc` compiler `Python`, and `Cython`. To install `gcc` use the following commands,

```bash
sudo apt update
sudo apt upgrade
sudo apt install gcc
```

Almost every Linux distribution comes with a version of `Python` included in the default system packages, Check your `Python` version by using the following command;

```bash
python3 --version
```

or

```bash
python --version
```

In case you want a better handling of the `Python` packages download and install Miniconda or Anaconda from the following links; [Miniconde](https://docs.anaconda.com/miniconda/), [Anaconda](https://www.anaconda.com/download). Next to install `Cython`;

```bash
pip install Cython
```

or

```bash
conda install Cython
```

---

## 2. Downloading CLASS

Before getting CLASS, you may create a project directory using

```bash
mkdir <dirname> && cd $_
```

Replace <dirname> with the name you prefer. After entering the <dirname> directory, download the latest version of `CLASS` by downloading via git using the command

```bash
git clone https://github.com/lesgourg/class_public.git
```

We can also download `CLASS` directly from Github.

![Figure](/assets/img/class.png){: .mx-auto.d-block }

---

## 2.a) Installing CLASS

Enter `CLASS` directory. Compile C code and Python wrapper using the command.

```bash
PYTHON=python3.11 make all
```

or

```bash
make -j
```

If you have no multiple versions of Python. Execute the command.

```bash
./class explanatory.ini
```

to test if the `C` code installed successfully. To test if the Python wrapper setup successfully, compile.

```bash
python3.11 -c "import classy; print(classy.__version__)"
```
---

## 4. Setting Python wrapper in a virtual environment

Create a virtual environment (venv) using

```bash
python3.11 -m venv <myenv>
```

You can replace `(myenv)` with any name you want. Then activate the virtual environment with 

```bash
source <myenv>/bin/activate
```

To make sure that whenever the command python is compiled it point to the correct version of Python as you included in the virtual environment, you can place the function below in `.bashrc` or `.zshrc` for z-shell (if you don’t have `.bashrc` or `.zshrc`, just create one).

```bash
function venv() {
  source "$1/bin/activate"  
  alias python="$1/bin/python"
  alias pip="$1/bin/pip"
}
```

Then restart the terminal. Activate the virtual environment again. Now you can test if the command python points to the same version of Python using in the virtual environment by compiling.

```bash
which python; which pip
```

Or, check for the version of Python.

```bash
python --version; pip --version
```

After that, install necessary modules to the environment, type.

```bash
pip install numpy scipy cython matplotlib
```

In the '`CLASS` directory, go to the ‘python’ directory and execute the command:

```bash
python setup.py build
python setup.py install
```

Checking if the steps above worked properly by compiling

```bash
python -c "import classy; print(classy.__version__)"
```

---

## 5. Using `CLASS` on Jupyter Notebook

Firstly you have to install Jupyter Notebook.

```bash
pip install notebook
```

To make sure that the path of Jupyter Notebook is in the created venv, type.

```bash
which jupyter
```

If the Notebook is not in the right path, you may have follow this way:

```bash
pip install ipython ipykernel
```

After installing `ipython` and `ipykernel`, run

```bash
ipython kernel install --user --name=<myvenv>
```

and

```bash
python -m ipykernel install --user --name=<myvenv>
```

Now the Jupyter Notebook should be in the right path. You can test it by typing (you probably have to restart the shell, and activate the venv again).

```bash
which jupyter
```

If all thing going fine, to use the Jupyter Notebook, run

```bash
jupyter notebook
```

---

## (Optional) Creating the alias for the virtual environment

You can create a command to activate the venv any directory by putting the following command in the file `.bashrc` or `.zshrc.` Firstly, open the `.bashrc` or `.zshrc` file by typing

```bash
vim ~/.bashrc
```

or

```bash
vim ~/.zshrc
```

(or you can use the text editor, nano, if you prefer). Then, put the command:

```bash
alias <your_prefer_name>="source $HOME/<path/to/myvenv>/bin/activate"
```

Then, overwrite the file with `:wq` (in vim command mode), or `Ctr+O` (for nano).

---

# Monte Python

## 1. Getting Monte Python

```bash
git clone https://github.com/brinckmann/montepython_public.git
```

Go to directory

```bash
cd montepython_public
```

Copy config

```bash
cp default.conf.template default.conf
```

Edit path

```bash
path['cosmo'] = '<path/to/your/class_public>'
```

Help commands

```bash
python montepython/MontePython.py --help
python montepython/MontePython.py run --help
python montepython/MontePython.py info --help
```

Run test

```bash
python montepython/MontePython.py run -o test -p input/example.param
```

Run longer chain

```bash
python montepython/MontePython.py run -o test -p input/example.param -N 100
```

Analyse chains

```bash
python montepython/MontePython.py info test/
```

More info: https://baudren.github.io/montepython.html

---

# Setting up Planck Likelihood

Create directory

```bash
mkdir -p <path/to/planck> && cd $_
```

Download

```bash
wget -O COM_Likelihood_Code-v3.0_R3.10.tar.gz "http://pla.esac.esa.int/pla/aio/product-action?COSMOLOGY.FILE_ID=COM_Likelihood_Code-v3.0_R3.10.tar.gz"
wget -O COM_Likelihood_Data-baseline_R3.00.tar.gz  "http://pla.esac.esa.int/pla/aio/product-action?COSMOLOGY.FILE_ID=COM_Likelihood_Data-baseline_R3.00.tar.gz"
```

Extract

```bash
tar -xvzf COM_Likelihood_Code-v3.0_R3.10.tar.gz
tar -xvzf COM_Likelihood_Data-baseline_R3.00.tar.gz
rm COM_Likelihood_*tar.gz
```

Go to directory

```bash
cd code/plc_3.0/plc-3.01
```

Configure

```bash
./waf configure --lapack_mkl=${MKLROOT} --install_all_deps
```

Install

```bash
./waf install
```

Source

```bash
source bin/clik_profile.sh
```

Add to config

```bash
path['clik'] = '</path/to/planck/code/plc_3.0/plc-3.01>'
```

---

Planck likelihoods available:

* Planck_highl_TT
* Planck_highl_TT_lite
* Planck_highl_TTTEEE
* Planck_highl_TTTEEE_lite
* Planck_lensing
* Planck_lowl_TT
* Planck_lowl_EE
* Planck_lowl_EEBB
* Planck_lowl_BB

---
