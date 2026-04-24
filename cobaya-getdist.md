---
layout: page
title: Cobaya Installation
permalink: /tutorials/cobaya-getdist/
---

# Plotting with GetDist
---

Once the MCMC sampling with Cobaya is completed, the output consists of a set of chain files containing the sampled parameter values and associated statistical information. These raw chains must be analyzed and visualized to extract meaningful physical constraints.

For this purpose, the GetDist package is widely used in cosmology. It provides a powerful and flexible framework for processing Monte Carlo chains, computing marginalized constraints, and generating high-quality plots such as one-dimensional distributions and two-dimensional contour (triangle) plots.

GetDist is fully compatible with Cobaya outputs and allows efficient handling of large datasets. It also supports derived parameters, parameter transformations, and comparison between different cosmological models or datasets.

For visualization and interactive analysis, it is recommended to use Jupyter Notebook or JupyterLab, which provide a convenient environment for exploring parameter constraints and generating publication-quality figures.

In this section, we will demonstrate how to load Cobaya chain files, analyze them using GetDist, and produce standard cosmological plots.
