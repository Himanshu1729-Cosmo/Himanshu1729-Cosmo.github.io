---
layout: page
title: Post-processing and Statistical Analysis
permalink: /tutorials/simplemc-postprocessing/
---

This page is devoted to the post-processing stage in SimpleMC. After adding a cosmological model, the user should first navigate to the `SimpleMC` directory and inspect the `baseConfig.ini` file. Here, the developer explains the different sampler options, dataset choices, and post-processing settings used throughout the analysis.

Now, we will continue our discussion by exploring the JBP model. For this analysis, I will use nested sampling within SimpleMC. The nested sampling implementation in SimpleMC is based on the `dynesty` package with the `multi` bounding option. Below, we also show the different `dynesty` bounding methods available in SimpleMC, namely `{'single', 'multi', 'balls', 'cubes'}`, together with the standard MCMC configuration options.

![Figure](/assets/img/simpleMC_4.png){: .mx-auto.d-block }



