---
layout: page
---

<style>
.cv-container{
    max-width:1400px;
    margin:auto;
    color:#08245a;
}

.header{
    border-bottom:3px solid #d89a00;
    padding-bottom:25px;
}

.about-title{
    font-size:30px;
    font-weight:800;
    color:#08245a;
    margin-bottom:15px;
}

.about{
    font-size:18px;
    line-height:1.7;
    color:#333;
    text-align:justify;
}

.about a{
    color:#08245a;
    font-weight:bold;
}

.content{
    display:grid;
    grid-template-columns:60% 40%;
    gap:45px;
    margin-top:40px;
}

.section-title{
    font-size:32px;
    color:#08245a;
    border-bottom:2px solid #d89a00;
    padding-bottom:10px;
    margin-bottom:20px;
}

.pub-number{
    background:#08245a;
    color:white;
    padding:20px;
    border-radius:10px;
    text-align:center;
    margin-bottom:25px;
}

.pub-number h2{
    color:#f6c15b;
    font-size:58px;
    margin:0;
}

.pub-number p{
    font-size:24px;
    margin:0;
    font-weight:bold;
}

.pie-area{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:25px 0;
}

.pie-area svg{
    max-width:430px;
    width:100%;
    height:auto;
}

.journal-list{
    columns:2;
    column-gap:30px;
    margin-top:20px;
}

.journal-list li{
    margin-bottom:7px;
    font-size:16px;
    break-inside:avoid;
}

.metric-box{
    display:flex;
    justify-content:space-between;
    margin-top:30px;
    text-align:center;
    border:1px solid #e5c89b;
    border-radius:14px;
    padding:20px;
}

.metric{
    width:33%;
    border-right:1px solid #e5c89b;
}

.metric:last-child{
    border-right:none;
}

.metric h2{
    color:#08245a;
    margin:0;
    font-size:34px;
}

.education-item{
    margin-bottom:38px;
    border-left:4px solid #d89a00;
    padding-left:22px;
}

.education-item h3{
    margin-bottom:5px;
    color:#08245a;
    font-size:22px;
}

.year{
    color:#c07a00;
    font-weight:bold;
    margin-bottom:8px;
}

@media(max-width:900px){
    .content{
        grid-template-columns:1fr;
    }

    .journal-list{
        columns:1;
    }

    .metric-box{
        flex-direction:column;
    }

    .metric{
        width:100%;
        border-right:none;
        border-bottom:1px solid #e5c89b;
        padding:15px 0;
    }

    .metric:last-child{
        border-bottom:none;
    }
}
</style>

<div class="cv-container">

<div class="header">

<div class="about-title">About Me</div>

<div class="about">

Himanshu Chaudhary is a PhD researcher at Babeș-Bolyai University,
Cluj-Napoca, Romania. His research focuses on understanding the nature
of dark energy and its role in the evolution of the Universe. He works
on constraining different dark energy models using observational
datasets, including the Cosmic Microwave Background (CMB), Type Ia
Supernovae, Baryon Acoustic Oscillations (BAO), and gravitational
lensing probes.

<br><br>

His current research is primarily dedicated to investigating the
implications of recent DESI results and the impact of strong progenitor
age bias in supernova cosmology. In particular, he aims to understand
how these effects influence cosmological parameter estimation and
whether they indicate deviations from the standard ΛCDM model.

<br><br>

In astrophysics, he works on ray-tracing of photons around compact
objects, including black holes, and studies black hole shadows,
equatorial periodic orbits and their gravitational wave signatures, as
well as quasinormal modes.

<br><br>

Learn more about my research on
<a href="https://www.researchgate.net/profile/Himanshu-Chaudhary-17" target="_blank">ResearchGate</a>.
For collaborations, projects, or academic opportunities, please
<a href="mailto:himanshuch1729@gmail.com">contact me via email</a>.

</div>

</div>

<div class="content">

<div>

<h2 class="section-title">Research Publications</h2>

<div class="pub-number">
    <h2>67</h2>
    <p>Published</p>
</div>

<div style="max-width:900px;margin:auto;">
    <canvas id="publicationChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {

Chart.register(ChartDataLabels);

const ctx = document.getElementById('publicationChart');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [
            'The European Physical Journal C (11)',
            'Journal of High Energy Astrophysics (11)',
            'Physics of the Dark Universe (8)',
            'IJGMMP (5)',
            'Nuclear Physics B (4)',
            'Fortschritte der Physik (3)',
            'Chinese Physics C (3)',
            'Universe (3)',
            'Physica Scripta (2)',
            'GRG (2)',
            'EPJP (2)',
            'MPLA (2)',
            'Annalen der Physik (2)',
            'ApJS (2)',
            'Others (7)'
        ],
        datasets: [{
            data: [11,11,8,5,4,3,3,3,2,2,2,2,2,2,7],
            backgroundColor: [
                '#08245a',
                '#ff8800',
                '#39a935',
                '#6b46c1',
                '#008080',
                '#ff6a00',
                '#3559d5',
                '#6f2c8f',
                '#d38b11',
                '#1380a1',
                '#2d49b8',
                '#9cb300',
                '#e64b2c',
                '#7d3c98',
                '#666666'
            ],
            borderColor:'#ffffff',
            borderWidth:2
        }]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                position:'right',
                labels:{
                    boxWidth:15,
                    font:{
                        size:14
                    }
                }
            },
            datalabels:{
                color:'#ffffff',
                font:{
                    weight:'bold',
                    size:18
                },
                formatter:(value,ctx)=>{
                    const total = ctx.dataset.data.reduce((a,b)=>a+b,0);
                    const p = value*100/total;
                    return p >= 3 ? p.toFixed(1)+'%' : '';
                }
            }
        }
    }
});

});
</script>

<div class="metric-box">

<div class="metric">
<h2>1164</h2>
Citations
</div>

<div class="metric">
<h2>21</h2>
h-index
</div>

<div class="metric">
<h2>37</h2>
i10-index
</div>

</div>

</div>

<div>

<h2 class="section-title">Education</h2>

<div class="education-item">
<h3>PhD Student in Physics</h3>
<div class="year">2024 – Present</div>
Babeș-Bolyai University, Cluj-Napoca, Romania
</div>

<div class="education-item">
<h3>Master of Science in Applied Mathematics</h3>
<div class="year">2021 – 2023</div>
Delhi Technological University, India
</div>

<div class="education-item">
<h3>Bachelor of Education</h3>
<div class="year">2019 – 2021</div>
Guru Ram Dass College of Education, India
</div>

<div class="education-item">
<h3>Bachelor of Science in Physical Sciences</h3>
<div class="year">2016 – 2019</div>
Shyam Lal College, University of Delhi, India
</div>

</div>

</div>

</div>
