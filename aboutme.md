---
layout: page
title: About Me
---

<style>
.cv-wrap{
  font-family: Arial, sans-serif;
  color:#061b49;
}
.cv-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom:3px solid #d99000;
  padding-bottom:25px;
  margin-bottom:25px;
}
.cv-name h1{
  font-size:48px;
  margin:0;
  color:#061b49;
}
.cv-name h2{
  margin:5px 0;
  color:#c47a00;
}
.cv-grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:40px;
}
.cv-card{
  background:#fff;
  border:1px solid #e2cfae;
  border-radius:14px;
  padding:25px;
  box-shadow:0 4px 15px rgba(0,0,0,0.06);
  margin-bottom:25px;
}
.cv-title{
  font-size:26px;
  font-weight:700;
  color:#061b49;
  border-bottom:2px solid #d99000;
  padding-bottom:8px;
  margin-bottom:20px;
}
.cv-item{
  margin-bottom:22px;
}
.cv-item h3{
  margin:0;
  font-size:21px;
  color:#061b49;
}
.cv-item span{
  color:#d98000;
  font-weight:600;
}
.cv-item p{
  margin:6px 0 0;
  color:#061b49;
}
.skill-list li{
  margin-bottom:8px;
}
@media(max-width:800px){
  .cv-grid{grid-template-columns:1fr;}
  .cv-header{flex-direction:column; align-items:flex-start;}
  .cv-name h1{font-size:36px;}
}
</style>

<div class="cv-wrap">

<div class="cv-header">
  <div class="cv-name">
    <h1>Himanshu Chaudhary</h1>
    <h2>PhD Student</h2>
    <p>
      Faculty of Physics<br>
      Universitatea Babeș-Bolyai din Cluj-Napoca, România
    </p>
  </div>
</div>

<div class="cv-grid">

<div>

<div class="cv-card">
<div class="cv-title">Education</div>

<div class="cv-item">
<h3>Doctor of Philosophy (PhD) in Physics</h3>
<span>2024 – Present</span>
<p>Babeș-Bolyai University, Cluj-Napoca, Romania</p>
</div>

<div class="cv-item">
<h3>Master of Science (M.Sc.) in Applied Mathematics</h3>
<span>2021 – 2023</span>
<p>Delhi Technological University, India</p>
</div>

<div class="cv-item">
<h3>Bachelor of Education (B.Ed.)</h3>
<span>2019 – 2021</span>
<p>Guru Ram Dass College of Education, India</p>
</div>

<div class="cv-item">
<h3>Bachelor of Science (B.Sc.) in Physical Sciences</h3>
<span>2016 – 2019</span>
<p>Shyam Lal College, University of Delhi, India</p>
</div>

</div>

</div>

<div>

<div class="cv-card">
<div class="cv-title">Computer Skills</div>

<h3>Skills</h3>
<ul class="skill-list">
<li>Microsoft Office: Word, Excel, PowerPoint</li>
<li>Operating Systems: Windows, macOS, Linux</li>
<li>Typesetting: LaTeX</li>
</ul>

<h3>Programming</h3>
<ul class="skill-list">
<li>Python: scientific computing, data analysis, MCMC pipelines</li>
<li>C, C++, Fortran</li>
<li>Mathematica</li>
</ul>

<h3>Cosmology and Astrophysics Tools</h3>
<ul class="skill-list">
<li>Cobaya</li>
<li>SimpleMC</li>
<li>CosmoSIS</li>
<li>CAMB / CLASS</li>
<li>GetDist</li>
<li>Pytearcat</li>
<li>GADGET</li>
<li>L-PICOLA</li>
</ul>

</div>

</div>

</div>
</div>
