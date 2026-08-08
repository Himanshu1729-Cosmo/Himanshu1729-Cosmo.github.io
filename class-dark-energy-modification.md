---
layout: page
title: Implementing Different Dark Energy Models in CLASS
permalink: /tutorials/class-dark-energy-modification/
---

# Implementing Different Dark Energy Models in CLASS

In the previous tutorial, we covered the installation and compilation of the **CLASS** and **MontePython** codes. With a working CLASS installation in place, we are now ready to explore one of its greatest strengths—its flexibility in implementing new dark energy models.

In this tutorial series, we will focus on modifying the CLASS source code to implement the **JBP parameterization**, which can be further extended to implement different dark energy models. Rather than simply replacing equations, we will first develop a clear understanding of the structure of CLASS and then, step by step, modify the CLASS code. We will also learn how cosmological parameters are passed through the code and where modifications should be introduced. This approach will make it straightforward to implement virtually any dark energy parameterization.

## 1. Structure of CLASS

Before modifying CLASS to implement a new dark energy model, it is important to understand how the code is organized and which files control the different stages of the cosmological calculation.

The main source files of CLASS are located in the `class_public/source/` directory. CLASS follows a modular structure, where each `.c` file is responsible for a specific part of the calculation. For the implementation of a new dark energy model, the most relevant files are:

- **`background.c`** — controls the background evolution of the Universe and is the main file where the background dynamics of a new dark energy model are implemented.

- **`input.c`** — reads and initializes the input parameters of the cosmological model. Any new free parameters introduced by the model must be included here.

- **`output.c`** — controls the quantities returned or written by CLASS and can be modified when new model-dependent output quantities are required.

- **`perturbations.c`** — contains the evolution equations for cosmological perturbations. This file must be considered when the new model modifies the perturbation sector.

- **`thermodynamics.c`** — handles the thermodynamic and recombination history of the Universe. Modifications are required only when the new cosmological model directly affects this sector.

The figure below highlights the main CLASS source files that may be relevant when implementing a new cosmological model.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0001.jpg){: .mx-auto.d-block }

### 1.1 Defining Model Parameters in `background.h`

After identifying the relevant source files, the next step is to understand where the parameters and variables of a cosmological model are defined. For the background evolution, these definitions are mainly contained in

`class_public/include/background.h`.

The `background.h` header file defines the variables and indices used by the background module. For example, the standard fluid dark energy sector contains the present-day density parameter `Omega0_fld`, the equation-of-state parameters `w0_fld` and `wa_fld`, and the rest-frame sound speed `cs2_fld`.

The same file also defines indices such as `index_bg_rho_fld` and `index_bg_w_fld`, which allow CLASS to identify the corresponding quantities inside its background vectors.

Therefore, when implementing a new dark energy model that introduces additional parameters or background variables, they should first be declared in the appropriate structure in `background.h`. These variables can then be accessed in `background.c` and other CLASS modules when evaluating the cosmological evolution.

The figure below shows the relevant part of `background.h`, where the standard fluid dark energy parameters and background indices are defined.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0002.jpg){: .mx-auto.d-block }

### 1.2 Python Interface

After defining the model parameters in the CLASS header files, we also need to consider the Python interface. This interface allows the quantities defined in the C code to be accessed from Python and is essential when CLASS is used together with parameter-inference frameworks such as MontePython.

The relevant files are located in the

`class_public/python/`

directory. Two important files for our purpose are **`cclassy.pxd`** and **`classy.pyx`**.

The **`cclassy.pxd`** file contains the Cython declarations of the CLASS structures. If a new model parameter has been added to a C structure, such as the `background` structure in `background.h`, the corresponding variable should also be declared in `cclassy.pxd` when it needs to be exposed through the Python interface. This allows the Python wrapper to recognize and access the newly introduced quantity.

The **`classy.pyx`** file defines the Python interface to CLASS. It contains functions through which different cosmological quantities can be accessed from Python. If we want to expose an additional model-dependent quantity or derived observable, an appropriate function can be defined here.

Therefore, when extending CLASS, it is important to keep the C implementation and the Python interface consistent, particularly when the modified version of CLASS will be used with MontePython.

The figure below shows the location of `cclassy.pxd` and `classy.pyx` and illustrates how CLASS variables and derived quantities can be exposed through the Python interface.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0003.jpg){: .mx-auto.d-block }

### 1.3 Background Evolution and Density Convention in CLASS

Before modifying the background equations, it is essential to understand the conventions adopted internally by CLASS. The preamble and comments provided in each CLASS source file contain important information about the definitions, units, and numerical conventions used throughout the code. Therefore, these comments should be read carefully before introducing any modification.

In `background.c`, the expansion rate is computed from the Friedmann equation using the total energy density of all cosmological components. CLASS internally expresses the energy densities in units of

$$
\frac{3c^2}{8\pi G}.
$$

Therefore, the physical energy density is converted according to

$$
\rho_{\rm CLASS}
=
\frac{8\pi G}{3c^2}\rho_{\rm physical}.
$$

With this convention, CLASS evaluates the background expansion rate schematically as

$$
H^2 = \rho_{\rm tot}-\frac{K}{a^2},
$$

where $\rho_{\rm tot}$ is the total density expressed in the internal CLASS units, $K$ denotes the spatial curvature, and $a$ is the scale factor.

The code also computes the derivative of the Hubble parameter with respect to conformal time using the total density and pressure. Consequently, any new dark energy component must contribute consistently to both `rho_tot` and `p_tot`.

This convention is particularly important when implementing a new dark energy model, since the model equations must be translated into the internal variables and units used by CLASS.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0004.jpg){: .mx-auto.d-block }

### 1.4 Computing the Total Density and Pressure

The background evolution in CLASS is constructed by computing the energy density and pressure of each cosmological component separately and then adding their contributions to the total density and pressure.

For example, the photon energy density evolves as

$$
\rho_{\gamma}(a) \propto a^{-4},
$$

while non-relativistic components such as baryons and cold dark matter evolve as

$$
\rho_{m}(a) \propto a^{-3}.
$$

For each component, CLASS first computes its density and stores it in the corresponding entry of the background vector `pvecback`. The contribution is then added to the total energy density through `rho_tot`. Similarly, the pressure of each component is added to `p_tot`.

For photons,

$$
p_{\gamma} = \frac{1}{3}\rho_{\gamma},
$$

whereas baryons and cold dark matter are treated as pressureless components,

$$
p_b = p_{\rm cdm} = 0.
$$

Therefore, the total background quantities are constructed schematically as

$$
\rho_{\rm tot}
=
\rho_{\gamma}
+\rho_b
+\rho_{\rm cdm}
+\rho_{\nu}
+\rho_{\rm DE}
+\cdots,
$$

and

$$
p_{\rm tot}
=
p_{\gamma}
+p_b
+p_{\rm cdm}
+p_{\nu}
+p_{\rm DE}
+\cdots.
$$

These total quantities are subsequently used by CLASS to determine the expansion history through the Friedmann equations.

This structure is particularly important for implementing a new dark energy model. Once its density $\rho_{\rm DE}(a)$ and equation of state $w_{\rm DE}(a)$ are specified, its pressure is obtained from

$$
p_{\rm DE}(a)
=
w_{\rm DE}(a)\rho_{\rm DE}(a),
$$

and both contributions must be consistently included in the total background density and pressure.

The figure below illustrates how CLASS computes and accumulates the density and pressure contributions of photons, baryons, and cold dark matter.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0005.jpg){: .mx-auto.d-block }

## 2. Dark Energy in CLASS

Before implementing a new dark energy parameterization, it is useful to understand how dark energy is already incorporated into CLASS.

The available dark energy components and their input parameters are described in the `explanatory.ini` file. In the standard CLASS implementation, dark energy can be represented through three main descriptions:

- **Cosmological constant (`Lambda`)** — corresponds to a constant vacuum-energy component with equation of state

$$
w_{\Lambda}=-1.
$$

- **Fluid (`fld`)** — describes dark energy as a fluid characterized by an equation of state $w(a)$. This is the sector that is particularly useful for implementing phenomenological dynamical dark energy parameterizations.

- **Scalar field (`scf`)** — describes dark energy through the dynamics of a scalar field.

The corresponding present-day density parameters are represented internally by quantities such as `Omega0_lambda`, `Omega0_fld`, and `Omega0_scf`.

CLASS also uses these dark energy components when imposing the cosmological closure relation,

$$
\sum_i \Omega_{i,0}=1+\Omega_{k,0},
$$

where $\Omega_{k,0}$ represents the present-day curvature density parameter.

If one of the dark energy density parameters is left unspecified, CLASS can infer the corresponding value from this closure condition, depending on the other components supplied in the input configuration.

For the implementation of phenomenological dark energy parameterizations such as JBP, we will mainly work with the **fluid (`fld`) description**, since it allows the dark energy equation of state to evolve with the scale factor or redshift.

The figure below shows the dark energy options described in the CLASS `explanatory.ini` file.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0006.jpg){: .mx-auto.d-block }

### 2.1 Cosmological Constant

The simplest dark energy description available in CLASS is the cosmological constant, denoted internally by `Lambda`. It corresponds to a constant energy density with the equation of state

$$
w_{\Lambda}=-1.
$$

The present-day cosmological constant density is specified through `Omega0_lambda`. Since the energy density of a cosmological constant does not evolve with the scale factor, CLASS computes it as

$$
\rho_{\Lambda}
=
\Omega_{\Lambda,0}H_0^2,
$$

in the internal CLASS density convention discussed above.

The corresponding pressure follows directly from $w_{\Lambda}=-1$,

$$
p_{\Lambda}=-\rho_{\Lambda}.
$$

In `background.c`, CLASS first checks whether the cosmological constant component is active through `has_lambda`. Its energy density is then added to `rho_tot`, while the same quantity is subtracted from `p_tot`, thereby implementing the relation $p_{\Lambda}=-\rho_{\Lambda}$.

Thus, the cosmological constant contributes to the background evolution without introducing any time dependence in its equation of state.

The figure below shows how the cosmological constant contribution is implemented in `background.c`.

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0007.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0008.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0009.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0010.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0011.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0012.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0013.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0014.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0015.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0016.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0017.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0018.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0019.jpg){: .mx-auto.d-block }

