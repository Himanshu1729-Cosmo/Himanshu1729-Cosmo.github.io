---
layout: page
title: Adding New Models and Likelihoods
permalink: /tutorials/simplemc-models-likelihoods/
---

This page is devoted to understanding the internal structure of `SimpleMC` and learning how to extend the code by implementing new cosmological models and likelihoods. In particular, we will focus on how to add a new dark energy parametrization within the `SimpleMC` framework and connect it with cosmological datasets through custom likelihood modules.

![Figure](/assets/img/simplemc.png){: .mx-auto.d-block }

## Structure of `SimpleMC`

The figure above shows the overall structure and workflow of `SimpleMC`. At the center of the framework is the `DriverMC` module, which acts as the main engine connecting cosmological models, likelihoods, samplers, optimizers, analyzers, and post-processing tools.

### Main Components of `SimpleMC`

* **Cosmo**
  This module contains the fundamental cosmological background quantities and basic cosmological calculations. Classes such as `BaseCosmology`, `RadiationAndNeutrinos`, and related background modules are defined here.

* **Models**
  The `Models` directory contains the cosmological models implemented in `SimpleMC`, such as:

  * `LCDMCosmology`
  * `owaCDMCosmology`
  * `oLCDMCosmology`
  * `slowDECosmology`
  * `GenericCosmology`

  This is the main location where new dark energy parametrizations can be added.

* **Likelihoods**
  This module contains the observational likelihoods used for cosmological parameter estimation, including:

  * BAO likelihoods
  * Pantheon supernova likelihoods
  * CMB compressed likelihoods
  * Rotation curve likelihoods
  * Generic likelihood classes

  New datasets can also be implemented within this structure.

* **Samplers**
  `SimpleMC` supports several Bayesian sampling algorithms, including:

  * MCMC samplers
  * `dynesty`
  * `nestle`
  * `emcee`
  * Nested samplers with machine learning acceleration

* **Optimizers**
  Optimization methods such as `MaxLikeAnalyzer` and `SimpleGenetic` are used for likelihood maximization and parameter searches.

* **Plots and Post-processing**
  `SimpleMC` includes built-in tools for:

  * Corner plots
  * Fisher plots
  * `GetDist`
  * `fgivenx`
  * Other cosmological visualization utilities

* **ini File and runbase**
  The `.ini` configuration files define the cosmological model, datasets, priors, and sampler settings. The `runbase` module connects these configurations to the internal `SimpleMC` pipeline.

In the next sections, we will explore how to:

1. Add a new dark energy parametrization,
2. Define new cosmological parameters,
3. Modify the Hubble function,
4. Connect the model to the likelihood pipeline,
5. Run cosmological parameter estimation using observational datasets.

![Figure](/assets/img/simpleMC_1.png){: .mx-auto.d-block }
