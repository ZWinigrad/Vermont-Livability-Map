<script setup>
import MontpelierMap from '@/components/MontpelierMap.vue';
import ZoningMap from '@/components/ZoningMap.vue';
import { ref } from 'vue';
import { watch } from 'vue';
import StackedBar from '@/components/StackedBar.vue';

import VueScrollama from 'vue3-scrollama'
    let currStep = ref(null);
    let highlightForMap = ref(null);

    // when current step changes add class show-img to image
    watch(currStep, (newVal) => {
      if (newVal) {
        
        const images = document.querySelectorAll('.mont-images img');

        if (newVal === '4') {
          document.getElementById('mont-2').classList.add('show-img');
        } else if (newVal === '5') {
          document.getElementById('mont-3').classList.add('show-img');
        } else if (newVal === '6') {
          document.getElementById('mont-4').classList.add('show-img');
        } else if (newVal === '7') {
          document.getElementById('mont-5').classList.add('show-img');
        }
      }
    });

</script>

<style scoped>
.citation {
  max-width: 700px; margin: 0 auto;
  margin-top: -100px;
  font-size: 1rem;

}

sup {
  text-decoration: underline;
}
  .mont-images img {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
  }

  .show-img {
    opacity: 1 !important;
    animation: fadeIn 1s;
  }

  /* keyframe smooth animation fade in opacity */
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .step {
    padding: 20px;
    border: 1px solid #ccc;
    background-color: rgba(255, 255, 255, 0.9);
    margin-top: 300px;
    margin-bottom: 500px;
    max-width: 500px;
  }

  .step.centered {
    margin-left: auto;
    margin-right: auto;
  }

  .columns {
    position: relative;
  }

  .main__scrollama {
    position: relative;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 100px;
  }

  .level-item .title {
    color: #4a4a4a;
    font-size: 3rem;
    font-weight: 700;
  }
</style>

<template>
  <main>
    <div class="container has-text-centered" style="max-width: 700px; margin-top: 100px; margin-bottom: 100px">
      <p style="font-size: 1.5rem;">
        The Vermont Zoning Atlas is a database and web tool that brings together zoning laws from 1,755 districts across the state of Vermont. Its goal is to help answer fundamental questions facing cities and towns: for the land that we have, what can be built?
      </p>
    </div>
    <section class="section is-medium">
      <h1 class="title">Zoning is complex. We tried to bring it all together.</h1>
      <h2 class="subtitle">
        
      </h2>
      <div class="columns">
        <div class="column is-half">
          <img src="@/assets/flowchart.png" width="100%" alt="">
        </div>
        <div class="column is-half">
          <p>
            Zoning laws regulate the types of housing that can be built. But for ordinary people, they can be complex, overwhelming, and hard to find. The Vermont Zoning Atlas takes inspiration from the National Zoning Atlas project to "digitize, demystify, and democratize information" that is often hidden under many layers of hard to parse paperwork. 
          </p>
          <p>
            As a rural state, Vermont's zoning laws can be especially difficult to find and understand. Many towns use their own methods of record keeping and governance. But we believe that universal access to this information is critical for smart community growth.
          </p>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <h1 class="title" style="max-width: 600px">Complex civic problems require everyone to get on board.</h1>
      
      <div class="columns">
        <div class="column">
          <p>
            The Vermont Zoning Atlas began as a grassroots civic tech project run by a team of community volunteers, student interns, and a Steering Committee of stakeholders from the public and private sectors and academia.
          </p>
          <p>
            Over nine months of work, the Atlas grew from a handful of volunteers passionate about housing justice to 36 specially trained Zoning Analysts, GIS Specialists, and team leads funded by the state of Vermont, University of Vermont fellowships, an anonymous donor, and the Vermont Community Foundation. Using a methodology published by the National Zoning Atlas, the team analyzed 1,755 districts across 209 zoned and 57 unzoned jurisdictions. 
          </p>
        </div>
        <div class="column">
          <div class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">1,755</p>
                <p class="heading">districts</p>
                
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div><p class="title">36</p>
                <p class="heading">analysts</p>
              </div>
            </div>
          </div>
          <div class="level">
            <div class="level-item has-text-centered">
              <div>
                <p class="title">57</p>
                <p class="heading">unzoned</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="title">209</p>
                <p class="heading">zoned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="" id="zoning-overview">
      <h1 class="title">The Vermont Zoning Atlas</h1>
      <h2 class="subtitle">
        All the land we have, and what can be built there.
      </h2>
      <div style="position: relative">
        <StackedBar :width="800" :height="100" />
      </div>
      <div class="columns">
        <div class="column is-one-thid">
          <VueScrollama
            :debug="false"
            :offset="0.55"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            class="main__scrollama"
        >
            <div class="step" data-step-no="1">
              <p>
              This is every district in Vermont colored by its <strong>primary zoning type</strong>. Districts that are blank or missing are currently unzoned.
              </p>
              <p>
                Many districts have multiple zoning types, which dictate the types of things that can be built there.
              </p>
            </div>
            <div class="step" data-step-no="2">
              <p>
                Here are all the areas that are zoned <strong>primarily residential</strong> across the state.
              </p>
            </div>
           <div class="step" data-step-no="3">
            <p>
                And here are the areas for <strong>nonresidential</strong> buildings.
              </p>
            </div>
        </VueScrollama>
          
        </div>
        <div class="column is-two-thirds">
          <ZoningMap 
          class="sticky"
          :layerToHighlight="currStep"
          mapboxToken="pk.eyJ1IjoiYmRjb29sZXkiLCJhIjoiY20zM2Nzd212MWl3cTJrcTM5NWNrcjk0byJ9.40rHMMd1TXsvF8zeqxLaBw"
           />
        </div>
        
      </div>
    </section>
    <section class="section is-medium">
      <h1 class="title">Zoning is just the start.</h1>
      <h2 class="subtitle">
        We plan to enrich the information started by the Zoning Atlas Project with geographic data on wastewater, flood basins, and more.
      </h2>
      <div class="container">
        <div class="sticky">
          <div style="position: relative; top: 0; left: 0">
            <div class="mont-images">
              <img src="@/assets/mont-1.png" id="mont-1" style="opacity: 1; position: relative; top: 0; left: 0" width="100%" alt="">
              <img src="@/assets/mont-2.png" id="mont-2" width="100%" alt="">
              <img src="@/assets/mont-3.png" id="mont-3" width="100%" alt="">
              <img src="@/assets/mont-4.png" id="mont-4" width="100%" alt="">
              <img src="@/assets/mont-5.png" id="mont-5" width="100%" alt="">
            </div>
          </div>
        </div>
           <VueScrollama
            :debug="false"
            :offset="0.55"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            class="main__scrollama"
        >
            <div class="step centered" data-step-no="null">
              <p>
              This map shows the approximate boundaries of Montpelier, Vermont's capital city. Using open data, we can add layers to understand our public systems.
              </p>
            </div>
            <div class="step centered" data-step-no="4">
              <p>
                The green dots indicate where the wastewater treatment facilities are located.
              </p>
            </div>
            <div class="step centered" data-step-no="5">
              <p>
                These yellow lines mark the sewage lines across the city.
              </p>
            </div>
           <div class="step centered" data-step-no="6">
            <p>
              As Vermonters face more frequent and severe flooding, understanding the flood basins in our cities is critical. This map shows new Lidar-informed flood inundation data<a href="https://vcgi.vermont.gov/data-release/lake-champlain-basin-lidar-informed-flood-inundation-layer-now-available" target="_blank"><sup>[1]</sup></a>.
              </p>
            </div>
            <div class="step centered" data-step-no="7">
            <p>
                Finally, let's add zoning data underneath it all. 
              </p>
            </div>
            <div class="step centered" data-step-no="8">
            <p>
              This is the sort of comprehensive view that we hope to build for every town in Vermont. The Zoning Atlas tells us what can be built and where; but adding new layers of data can help inform our decisions about areas vulnerable to flooding, incapable of hosting sewage lines, and more.
              </p>
            </div>
        </VueScrollama>
      </div>
      <div class="citation">
        1. Diehl, R.M, J.D. Gourevitch, S. Drago, B.C. Wemple (2021). Improving flood hazard datasets using a low-complexity, probabilistic floodplain mapping approach. Plos one, 16(3), e0248683. (Article Link - Open Access)
      </div>
    </section>
    <section class="section has-text-centered">
      <h1 class="title">We need your help.</h1>
      <h3 class="subtitle">Tell us what information we should be adding to this resource.</h3>
      <iframe src="https://qualtrics.uvm.edu/jfe/form/SV_2rEmqLAhRrabOx8" height="900px" width="100%"></iframe>
    </section>
  </main>
</template>
