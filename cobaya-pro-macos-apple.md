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

** 6.a For Apple Silicon Chips **

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```
** 6.b For Intel Chips

```bash
mkdir -p ~/miniconda3
curl https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-x86_64.sh -o ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
source ~/miniconda3/bin/activate
```

Once you have created and activated the Conda environment, please follow the same installation procedure described in Section 1 for Ubuntu.

