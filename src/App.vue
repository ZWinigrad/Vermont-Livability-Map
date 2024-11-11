<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="45" height="45" />
      <nav id="site-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    
      <section class="hero">
  <div class="hero-body">
    <div class="columns">
      <div class="column">
        <h1 class="title">Vermont Zoning Atlas</h1>
        <h3 class="subtitle">Open data for building strong, resilient communities.</h3>
      </div>
      <div class="column">
        <img src="@/assets/vt-screenshot.png" alt="">
      </div>
    </div>  
  </div>
</section>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
