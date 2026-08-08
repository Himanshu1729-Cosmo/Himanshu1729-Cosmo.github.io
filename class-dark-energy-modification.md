---
layout: page
title: Implementing Different Dark Energy Models in CLASS
permalink: /tutorials/class-dark-energy-modification/
---

# Implementing Different Dark Energy Models in CLASS

In the previous tutorial, we covered the installation and compilation of the **CLASS** and **MontePython** codes. With a working CLASS installation in place, we are now ready to explore one of its greatest strengths—its flexibility in implementing new dark energy models.

In this tutorial series, we will focus on modifying the CLASS source code to implement the **JBP parameterization**, which can be further extended to implement different dark energy models. Rather than simply replacing equations, we will first develop a clear understanding of the structure of CLASS and then, step by step, modify the CLASS code. We will also learn how cosmological parameters are passed through the code and where modifications should be introduced. This approach will make it straightforward to implement virtually any dark energy parameterization.

## 1. Structure of CLASS

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0012.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0013.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0014.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0015.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0016.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0017.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0018.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-00119.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0020.jpg){: .mx-auto.d-block }

![CLASS Architecture](/assets/img/CLASS%20Beyond%20%CE%9BCDM_page-0021.jpg){: .mx-auto.d-block }

