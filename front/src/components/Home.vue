<script setup>
// This is where you can add JavaScript setup code for your component
</script>

<template>
  <!-- Hero section with a background image -->
  <div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <!-- Overlay with reduced opacity for text visibility -->
    <div class="hero-overlay bg-opacity-60"></div>
    <!-- Main content area with centered text -->
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <!-- Welcome heading -->
        <h1 class="mb-5 text-5xl font-bold">BIENVENUE</h1>
        <!-- Description text -->
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <router-link to="/productlist">
          <button class="btn btn-primary">Visiter la boutique</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add your CSS styles here */
</style>







<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--  <div class="hero min-h-screen" style="background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);">-->
<!--    <div class="hero-overlay bg-opacity-60"></div>-->
<!--    <div class="hero-content text-center text-neutral-content">-->
<!--      <div class="max-w-md">-->
<!--        <h1 class="mb-5 text-5xl font-bold">BIENVENUE</h1>-->
<!--        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>-->
<!--        <router-link to="/productlist">-->
<!--        <button class="btn btn-primary">Visiter la boutique</button>-->
<!--        </router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--</style>-->