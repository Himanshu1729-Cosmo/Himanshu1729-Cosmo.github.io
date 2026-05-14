---
layout: page
title: Post-processing and Statistical Analysis
permalink: /tutorials/simplemc-postprocessing/
---

This page is devoted to the post-processing stage in SimpleMC. After adding a cosmological model, the user should first navigate to the `SimpleMC` directory and inspect the `baseConfig.ini` file. Here, the developer explains the different sampler options, dataset choices, and post-processing settings used throughout the analysis.

Now, we will continue our discussion by exploring the JBP model after adding it to SimpleMC. In this tutorial, I will use the nested sampling algorithm via the `dynesty` Python package with the `multi` bounding option. Before that, I also show an example where we use the `dynesty` Python package with the `'ellipsoid'`, `'multi'`, `'balls'`, and `'cubes'` bounding options, together with the standard MCMC configuration options used in SimpleMC for cosmological analyses, as shown below.

![Figure](/assets/img/simpleMC_10.png){: .mx-auto.d-block }



