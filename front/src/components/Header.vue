<template>
  <!-- Navigation bar with a logo, menu button, and user/cart icons -->
  <div class="navbar bg-base-100">
    <!-- Menu button with a hamburger icon -->
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Logo and brand image -->
    <div class="flex-1">
      <router-link to="/">
        <img class="h-10 w-36" src="./icons/zyro-image.png">
      </router-link>
    </div>

    <!-- User and cart icons for navigation -->
    <div class="logo">
      <router-link to="/login">
        <button class="btn btn-square btn-ghost">
          <i-ph-user></i-ph-user>
        </button>
      </router-link>

      <router-link to="/cart">
        <button class="btn btn-square btn-ghost">
          <i-ph-shopping-bag></i-ph-shopping-bag>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style>
/* Styling for the navigation bar and its elements */
.flex-1 {
  display: flex;
  justify-content: center;
}

.navbar {
  background-color: white;
}
</style>

<script setup>
// No script content provided, but this section is reserved for any setup logic or component options
</script>






<!--<template>-->

<!--  <div class="navbar bg-base-100">-->

<!--    <div class="flex-none">-->
<!--      <button class="btn btn-square btn-ghost">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>-->
<!--      </button>-->
<!--    </div>-->

<!--    <div class="flex-1">-->
<!--      <router-link to="/">-->
<!--      <img class="h-10 w-36"src="./icons/zyro-image.png">-->
<!--      </router-link>-->
<!--    </div>-->


<!--    <div class="logo">-->
<!--      <router-link to="/login">-->
<!--      <button class="btn btn-square btn-ghost">-->
<!--      <i-ph-user></i-ph-user>-->
<!--      </button>-->
<!--      </router-link>-->

<!--      <router-link to="/cart">-->
<!--      <button class="btn btn-square btn-ghost">-->
<!--      <i-ph-shopping-bag></i-ph-shopping-bag>-->
<!--      </button>-->
<!--      </router-link>-->
<!--    </div>-->

<!--  </div>-->

<!--</template>-->

<!--<style>-->
<!--.flex-1{-->
<!--  display: flex;-->
<!--  justify-content: center;-->


<!--}-->

<!--.navbar {-->
<!--  background-color: white;-->
<!--}-->
<!--</style>-->

<!--<script setup>-->
<!--</script>-->