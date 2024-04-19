<script setup>
import Product from '@/components/Product.vue'
</script>

<template>

  <div class=" product flex justify-center">
    <h1 class="title text-2xl m-10 text-black">BEST SELLERS</h1>
  </div>
  <div class="container">
    <div class="bg flex justify-center">
      <div class="wrapper">
        <Product v-for="singleProduct in products" :key="card"  :titre=singleProduct.titre :prix=singleProduct.prix />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data(){
    return{
      products:[
        {
          titre:"test1",
          prix:"11.5 €",
        },
        {
          titre: 'test2',
          prix:"11.5 €",
        },
        {
          titre:"test1",
          prix:"11.5 €",
        },
        {
          titre: 'test2',
          prix:"11.5 €",
        }
      ]
    }
  }

}
</script>

<style scoped>

.wrapper {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2,minmax(0,1fr));
  grid-auto-rows: auto;
}

.container {
  margin: 0 auto;
  max-width: 100%;
  webkit-transition: padding .4s ease-in-out;
  transition: padding .4s ease-in-out;
}

.product{
  background-color: lightgrey;
}


.bg {
  background-color: white;
}

</style>
