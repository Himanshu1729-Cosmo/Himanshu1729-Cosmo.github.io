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

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0003.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0004.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0005.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0006.jpg){: .mx-auto.d-block }

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

