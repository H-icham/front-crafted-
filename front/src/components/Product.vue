<!--class="px-10 pt-10"-->
<script setup>
</script>

<template>

  <!-- Card container with a base background color and margin bottom -->
  <div class="card bg-base-100 mb-1">
    <!-- Image container with a rounded image -->
    <figure>
      <img src="./icons/image%207.png" alt="Sirop" class="rounded-xl"/>
    </figure>
    <!-- Card body with centered text and padding -->
    <div class="card-body items-center text-center p-2">
      <!-- Card title -->
      <h2 class="card-title">Sirop</h2>
      <!-- Button with product details -->
      <button class="btn-ghost">
        <p>{{ titre }}</p>
        <p>{{ prix }}</p>
        <!-- Product description -->
        <p>description du produit</p>
      </button>
      <!-- Card actions with an add to cart button -->
      <div class="card-actions">
        <button class="btn btn-outline text-black">ADD TO CART</button>
      </div>
    </div>
  </div>

</template>

<script>
// Exporting a Vue component with props for title and price
export default {
  props:{
    titre:String,
    prix:Number
  }
}
</script>

<style scoped>

.card {
  background-color: white;
  color: black;
}

</style>






<!--&lt;!&ndash;class="px-10 pt-10"&ndash;&gt;-->
<!--<script setup>-->
<!--</script>-->

<!--<template>-->

<!--  <div class="card bg-base-100 mb-1">-->
<!--    <figure >-->
<!--      <img src="./icons/image%207.png" alt="Sirop" class="rounded-xl"/>-->
<!--    </figure>-->
<!--    <div class="card-body items-center text-center p-2">-->
<!--      <h2 class="card-title">Sirop</h2>-->
<!--      <button class="btn-ghost">-->
<!--        <p>{{ titre }}</p>-->
<!--        <p>{{ prix }}</p>-->
<!--      <p>description du produit</p>-->
<!--      </button>-->
<!--      <div class="card-actions">-->
<!--        <button class="btn btn-outline text-black">ADD TO CART</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props:{-->
<!--    titre:String,-->
<!--    prix:Number-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--.card {-->
<!--  background-color: white;-->
<!--  color: black;-->
<!--}-->

<!--</style>-->