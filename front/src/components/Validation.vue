<script setup>
// This is a script setup section for Vue 3 Composition API
</script>

<template>
  <!-- Hero section with a thank you message -->
  <div class="hero min-h-screen bg-base-200">
    <!-- Content layout for hero section -->
    <div class="hero-content flex-col lg:flex-row">
      <!-- Image for the hero section -->
      <img src="./icons/Cmd-check.jpg" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <!-- Heading for the thank you message -->
        <h1 class="center text-5xl font-bold">THANK YOU!</h1>
        <!-- Paragraph for the thank you message -->
        <p class="py-6">You will receive an email once your order is shipped.</p>
        <!-- Button to return to the homepage -->
        <router-link to="/">
          <button class="btn btn-primary ">Return to Home</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero section styling */
.hero {
  background-color: lightgrey;
  color: black;
}

/* Center text alignment */
.center {
  text-align: center;
}
</style>






<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--  <div class="hero min-h-screen bg-base-200">-->
<!--    <div class="hero-content flex-col lg:flex-row">-->
<!--      <img src="./icons/Cmd-check.jpg" class="max-w-sm rounded-lg shadow-2xl" />-->
<!--      <div>-->
<!--        <h1 class=" center text-5xl font-bold">MERCI !</h1>-->
<!--        <p class="py-6">Vous recevrer un mail des que votre commande sera expédier.</p>-->
<!--        <router-link to="/">-->
<!--        <button class="btn btn-primary">Retour à l'accueil</button>-->
<!--        </router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<!--<style scoped>-->
<!--.hero{-->
<!--  background-color: lightgrey;-->
<!--  color: black;-->
<!--}-->

<!--.center{-->
<!--  text-align: center;-->
<!--}-->

<!--</style>-->