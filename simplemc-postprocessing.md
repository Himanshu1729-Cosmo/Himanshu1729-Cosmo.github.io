---
layout: page
title: Post-processing and Statistical Analysis
permalink: /tutorials/simplemc-postprocessing/
---

This page is devoted to the post-processing stage in SimpleMC. After adding a cosmological model, the user should first navigate to the `SimpleMC` directory and inspect the `baseConfig.ini` file. Here, the developer explains the different sampler options, dataset choices, and post-processing settings used throughout the analysis.

Now, we will continue our discussion by exploring the JBP model after adding it to SimpleMC. In this tutorial, I will use the nested sampling algorithm via the `dynesty` Python package with the `multi` bounding option. Before that, I also show an example where we use the `dynesty` Python package with the `'ellipsoidal'`, `'multinest'`, `'balls'`, and `'cubes'` bounding options, together with the standard MCMC configuration options used in SimpleMC for cosmological analyses, as shown below.

![Figure](/assets/img/simpleMC_10.png){: .mx-auto.d-block }

### 3. Adding New .ini file `SimpleMC`

Now, I will explain how we can add a `.ini` file where you will define where the chains will be stored, the choice of the model, the choice of datasets, and the sampler settings. Below, you will find an example.

![Figure](/assets/img/simpleMC_11.png){: .mx-auto.d-block }

Find below the corresponding `.ini` file.




