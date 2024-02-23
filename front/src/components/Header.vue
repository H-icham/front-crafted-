<template>

  <div class="navbar bg-base-100">

    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
    </div>

    <div class="flex-1">
      <img class="h-16 w-34"src="./icons/zyro-image.png">
    </div>


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
.flex-1{
  display: flex;
  justify-content: center;


}

.navbar {
  background-color: beige;
}
</style>

<script setup>
</script>