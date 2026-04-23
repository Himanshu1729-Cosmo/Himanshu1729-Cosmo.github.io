---
layout: page
title: Code
---

You can visit my [GitHub profile](https://github.com/igomezv) to explore additional projects, as well as materials from tutorials, courses, and workshops.

- [SimpleMC](#simplemc)
- [nnogada](#nnogada)
- [neuralike](#neuralike)
- [Cosmo Reconstructions](#ann-reconstructions)
- [NCosmoVAE](#ncosmovae)

---

## SimpleMC

**Cosmological parameter inference toolkit for robust parameter estimation and sampling.**

Cosmological parameter estimation code originally developed by Dr. A. Slosar and Dr. J. A. Vázquez. Between **2019 and 2023**, I contributed to maintenance and new features, including nested sampling, Metropolis–Hastings convergence criteria, post-processing utilities, and additional analysis options.

**Links**

- Library GitHub repository: [ja-vazquez/SimpleMC](https://github.com/ja-vazquez/SimpleMC)  
- Documentation: [igomezv/SimpleMC/Docs](https://igomezv.github.io/SimpleMC)  
- Workshop/tutorial: [igomezv/simplemc_workshop](https://github.com/igomezv/simplemc_workshop)  

![Figura](https://igomezv.github.io/assets/img/triangleSimplemc.png){: .mx-auto.d-block :}

---

## nnogada

**Neural networks optimized with genetic algorithms for flexible, data-driven inference.**

**Neural Networks Optimized by Genetic Algorithms in Data Analysis (nnogada)** is a framework that combines neural networks with genetic algorithms for efficient modeling, reconstruction, and parameter inference.

**Links**

- Library GitHub repository: [igomezv/nnogada](https://github.com/igomezv/nnogada)  
- Documentation: [docs/nnogada](https://igomezv.github.io/nnogada)  
- Related: [PRD paper with the method.](https://arxiv.org/abs/2209.02685)

![Figura](https://raw.githubusercontent.com/igomezv/igomezv.github.io/master/assets/img/nnogada.png){: .mx-auto.d-block :}

**Projects using `nnogada`**

- [igomezv/Reconstructing-RC-with-ANN](https://github.com/igomezv/Reconstructing-RC-with-ANN)  
- [igomezv/LSST_DE_neural_reconstruction](https://github.com/igomezv/LSST_DE_neural_reconstruction)  
- [igomezv/neuralike](https://github.com/igomezv/neuralike)  

---

## neuralike

**Surrogate-assisted Bayesian inference to accelerate cosmological likelihood evaluations.**

Deep learning and genetic-algorithm techniques designed to **speed up Bayesian inference in cosmology**, particularly within sampling pipelines where likelihood evaluations dominate the cost.

**Links**

- Library GitHub repository: [igomezv/neuralike](https://github.com/igomezv/neuralike)  
- Using `neuralike` within `SimpleMC` using nested sampling from `dynesty`library: [igomezv/simplemc_tests](https://github.com/igomezv/simplemc_tests/tree/neuralike)  
- Related: [PRD paper with the method.](https://arxiv.org/abs/2405.03293)

![Figura](https://raw.githubusercontent.com/igomezv/igomezv.github.io/master/assets/img/neuralike.png){: .mx-auto.d-block :}

---

## ANN Reconstructions

**Model-independent cosmological reconstructions with uncertainty-aware neural networks.**

Python implementations for **model-independent reconstructions of cosmological functions** using artificial neural networks, incorporating uncertainty quantification and hyperparameter optimization.

<div style="display:flex; justify-content:center; gap:15px; flex-wrap:wrap;">
  <img src="https://igomezv.github.io/assets/img/rec1.png" style="width:48%; height:auto;" />
  <img src="https://igomezv.github.io/assets/img/rec2.png" style="width:48%; height:auto;" />
</div>

**Repositories**

- [In progress] Library to reproduce our previous works: [igomezv/alp](https://github.com/igomezv/alp)

- Reconstructing rotation curves with Monte Carlo Dropout and gentetic algorithsm, through our `nnogada` code, for hyperparameter optimization: [igomezv/Reconstructing-RC-with-ANN](https://github.com/igomezv/Reconstructing-RC-with-ANN)  
  Related: [PDU paper.](https://www.sciencedirect.com/science/article/pii/S2212686426000294)

- Reconstructing SNeIa from LSST simulations with Monte Carlo Dropout and genetic algorihtms for hyperparameter optimization with our `nnogada` code: [igomezv/LSST_DE_neural_reconstruction](https://github.com/igomezv/LSST_DE_neural_reconstruction)  
  Related: [PDU paper.](https://www.sciencedirect.com/science/article/pii/S2212686424002887)

- Reconstructing cosmological functions with Monte Carlo Dropout and grid hyperparameter optimization: [igomezv/neuralCosmoReconstruction](https://github.com/igomezv/neuralCosmoReconstruction)  
  Related: [EPJC paper.](https://doi.org/10.1140/epjc/s10052-023-11435-9)

---

## NCosmoVAE

**Variational autoencoders for fast generative modeling of cosmological N-body simulations.**

Variational autoencoder framework trained on **N-body cosmological simulations** to generate realistic dark matter halo realizations. Hyperparameter optimization with genetic algorithms using the `optuna` Python library.

**Links**

- Library repository: [igomezv/NcosmoVAE](https://github.com/igomezv/NcosmoVAE)  
- Related: [PRD paper.](https://arxiv.org/abs/2507.18054)

![Figura](https://igomezv.github.io/assets/img/Nbody.png){: .mx-auto.d-block :}
