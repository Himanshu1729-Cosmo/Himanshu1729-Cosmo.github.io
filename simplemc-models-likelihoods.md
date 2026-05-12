---
layout: page
title: Adding New Models and Likelihoods
permalink: /tutorials/simplemc-models-likelihoods/
---

This page is devoted to understanding the internal structure of `SimpleMC` and learning how to extend the code by implementing new cosmological models and likelihoods. In particular, we will focus on how to add a new dark energy parametrization within the `SimpleMC` framework and connect it with cosmological datasets through custom likelihood modules.

![Figure](/assets/img/simplemc.png){: .mx-auto.d-block }

### 1. Structure of `SimpleMC`

The figure above shows the overall structure and workflow of `SimpleMC`. At the center of the framework is the `DriverMC` module, which acts as the main engine connecting cosmological models, likelihoods, samplers, optimizers, analyzers, and post-processing tools.

### 2. Main Components of `SimpleMC`

* **Cosmo**
  This module contains the fundamental cosmological background quantities and basic cosmological calculations. Classes such as `BaseCosmology`, `RadiationAndNeutrinos`, and related background modules are defined here.

* **Models**
  The `Models` directory contains the cosmological models implemented in `SimpleMC`, such as:

  * `LCDMCosmology`
  * `wCDMCosmology`
  * `owa0CDMCosmology`
  * `oLCDMCosmology`
  * `ChaplyginCosmology`, etc.

  This is the main location where new dark energy parametrizations can be added.

* **Likelihoods**
  This module contains the observational likelihoods used for cosmological parameter estimation, including:

  * `DESI DR2 BAO Likelihood`
  * `PantheonPlus Supernova Likelihood`
  * `Cosmic Chronometer Likelihoods`
  * `Compressed CMB Likelihoods`
  * `Rotation Curve Likelihoods`
  * `Strong Lensing Likelihoods`, etc.

  New likelihoods can also be implemented within this structure.

* **Samplers and Optimizers**
  `SimpleMC` supports several Bayesian sampling and optimization algorithms, including:

  * `MCMC Samplers`
  * `Nested Sampling using the dynesty library`
  * `Maximum Likelihood Analyzer`
  * `Genetic Algorithms (using the deap library)`
  * `Particle Swarm Optimization (pyswarms)`
  * `emcee`, etc.

* **ini File and runbase**
  The `.ini` configuration files define the cosmological model, datasets, and sampler settings. The `runbase` module connects these configurations to the internal `SimpleMC` pipeline.

### 3. Understanding the Structure of `SimpleMC`

Now, I will explain how to add a new dark energy model within `SimpleMC`. However, before doing that, we first need to understand the internal structure of `SimpleMC` and how the code is organized once you clone and install it. Below, you can see a schematic overview of the `SimpleMC` code.

![Figure](/assets/img/simpleMC_1.png){: .mx-auto.d-block }

You will first find the parent `SimpleMC` folder, and once you open it, you will see the smaller `simplemc` directory, which contains the main source code of the framework.

![Figure](/assets/img/simpleMC_2.png){: .mx-auto.d-block }

Inside the `SimpleMC` → `simplemc` → `models` directory, you can find the different cosmological models. This is the main location where new dark energy models and parametrizations can be added and modified.

![Figure](/assets/img/simpleMC_3.png){: .mx-auto.d-block }

Inside the `SimpleMC` → `simplemc` → `likelihoods` directory, you can find the different likelihoods. This is the main location where new likelihoods.

![Figure](/assets/img/simpleMC_4.png){: .mx-auto.d-block }

### 3. Adding a new dark energy Model in `SimpleMC`

Now, I will explain how we can add a new dark energy model within `SimpleMC`. As an example, we will consider the JBP (*Jassal–Bagla–Padmanabhan*) parametrization. For this, we first need to define the normalized Hubble function. In the case of the CPL model, the corresponding Hubble function is given by the following equation:

**3.a Equation of State**

$$
w(z) = w_0 + w_a \frac{z}{(1+z)^2}
$$

**3.b Dark Energy Density Evolution**

$$
f_{\rm DE}(z)
=
(1+z)^{3(1+w_0)}
\exp\left[
\frac{3w_a z^2}{2(1+z)^2}
\right]
$$

**3.c Normalized Hubble Function**

$$
E^2(z)
=
\Omega_m(1+z)^3
+
(1-\Omega_m)
(1+z)^{3(1+w_0)}
\exp\left[
\frac{3w_a z^2}{2(1+z)^2}
\right]
$$

where

$$
E(z)=\frac{H(z)}{H_0}.
$$


