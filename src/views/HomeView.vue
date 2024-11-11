<script setup>
import MontpelierMap from '@/components/MontpelierMap.vue';
import ZoningMap from '@/components/ZoningMap.vue';
import { ref } from 'vue';
import { watch } from 'vue';

import VueScrollama from 'vue3-scrollama'
    let currStep = ref(null);
    let highlightForMap = ref(null);

</script>

<style scoped>
  .step {
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 200px;
    margin-bottom: 200px;
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
    top: 0;
  }
</style>

<template>
  <main>
    <div class="container has-text-centered" style="max-width: 700px; margin-top: 100px; margin-bottom: 100px">
      <p>
        The Vermont Zoning Atlas is a database and web tool that brings together zoning laws from 1,755 districts across the state of Vermont. Its goal is to help answer fundamental questions facing cities and towns: for the land that we have, what can be built?
      </p>
    </div>
    <div class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">1,755</p>
          <p class="heading">districts</p>
          
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div><p class="title">209</p>
          <p class="heading">zoned</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="title">57</p>
          <p class="heading">unzoned</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </div>
    <section class="section is-medium">
      <h1 class="title">Zoning is complex. We tried to bring it all together.</h1>
      <h2 class="subtitle">
        A sub
      </h2>
      <div class="columns">
        <div class="column is-half">
          graphic here 
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
    <section class="" id="zoning-overview">
      <h1 class="title">Overview section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like
        the one you're currently reading.
      </h2>
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
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
            <div class="step" data-step-no="2">
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
           <div class="step" data-step-no="3">
            <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
        </VueScrollama>
          
        </div>
        <div class="column is-two-thirds">
          <ZoningMap 
          class="sticky"
          :layerToHighlight="currStep"
          mapboxToken="pk.eyJ1IjoiYmRjb29sZXkiLCJhIjoiY20zM2Nzd212MWl3cTJrcTM5NWNrcjk0byJ9.40rHMMd1TXsvF8zeqxLaBw"
          fgbPath="/vt-zoning-spatial-index.fgb"
           />
        </div>
        
      </div>
    </section>
    <section class="section is-large">
      <h1 class="title">Zoning is complex. We tried to bring it all together.</h1>
      <h2 class="subtitle">
        A sub
      </h2>
      <div class="container">
        <MontpelierMap 
          class="sticky"
          mapboxToken="pk.eyJ1IjoiYmRjb29sZXkiLCJhIjoiY20zM2Nzd212MWl3cTJrcTM5NWNrcjk0byJ9.40rHMMd1TXsvF8zeqxLaBw"
          fgbPath="/vt-zoning-spatial-index.fgb"
           />
           <VueScrollama
            :debug="false"
            :offset="0.55"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            class="main__scrollama"
        >
            <div class="step" data-step-no="1">
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
            <div class="step" data-step-no="2">
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
              <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
           <div class="step" data-step-no="3">
            <p>
                A simple container to divide your page into <strong>sections</strong>, like
              the one you're currently reading.
              </p>
            </div>
        </VueScrollama>
      </div>
      
    </section>
  </main>
</template>
