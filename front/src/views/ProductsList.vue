<script setup>
import Product from '@/components/Product.vue'
</script>

<template>

  <div class=" product flex justify-center">
    <h1 class="title text-2xl m-10">BEST SELLERS</h1>
  </div>
  <div class="container">
    <div class="bg flex justify-center">
      <div class="wrapper">
        <Product v-for="(card) in 4" :key="card"/>
      </div>
    </div>
  </div>

</template>

<style scoped>

.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-auto-rows: auto;
  background-color: beige;
}

.container {
  margin: 0 auto;
  max-width: 100%;
  webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
  background-color: beige;
}

.product{
  background-color: beige;
}

.wrapper{
  background-color: beige;
}

.bg {
  background-color: beige;
}

</style>