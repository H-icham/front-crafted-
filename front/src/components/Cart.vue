<script setup>
// This is where you can add JavaScript comments for your setup script
</script>

<template>
  <!-- Main container for the shopping cart -->
  <div class="mx-auto max-w-screen-xl flex space-x-4">

    <!-- Shopping cart title section -->
    <div class="w-full">
      <div class="br card w-100 bg-base-100">
        <div class="card-body">
          <h2 class="card-title">Your Cart</h2>
        </div>
      </div>

      <!-- Product card for Vanilla Syrup -->
      <div class="card">
        <div class="productImg mt-6">
          <img src="./icons/image%207.png" alt="Shoes" />
        </div>

        <div class="productBody text-black space-y-2 mt-7">
          <h2 class="card-title">Vanilla Syrup</h2>
          <p>Quantity:</p>
          <p>Volume:</p>
          <p>Product Code:</p>
          <div class="card-actions justify-end">
            <button class="bt btn btn-ghost">Remove</button>
            <button class="bt btn btn-ghost">Edit</button>
          </div>
        </div>
      </div>

      <!-- Product card for Jasmine Syrup -->
      <div class="card">
        <div class="productImg mt-7">
          <img src="./icons/image%2013.png" alt="Shoes" />
        </div>

        <div class="productBody text-black space-y-2">
          <h2 class="card-title mt-7">Jasmine Syrup</h2>
          <p>Quantity:</p>
          <p>Volume:</p>
          <p>Product Code:</p>
          <div class="card-actions justify-end">
            <button class="bt btn btn-ghost">Remove</button>
            <button class="bt btn btn-ghost">Edit</button>
          </div>
        </div>
      </div>

      <!-- Cart summary section -->
      <div class="recap w-75 h-80 bg-base-100 mt-7">
        <div class="card-body card-body-footer">
          <hr class="h-px my-5 mt-0 bg-gray-200 border-0 dark:bg-gray-700">
          <h2 class="card-title">Summary</h2>
          <p>Promo Code</p>
          <p>Total Items</p>
          <p>Shipping Fee</p>
          <p>Total</p>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Read and accept the general conditions</span>
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>


          <div class="card-actions justify-end">
            <router-link to="/validation">
              <button class="btn btn-primary">Payment</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Styling for buttons */
.bt{
  background-color: gainsboro;
  color: black;
}
/* Styling for card body */
.card-body{
  color: black;
  background-color: lightgrey;
}

/* Styling for card footer */
.card-body-footer{
  color: black;
  background-color: white;
}

/* Styling for card layout */
.card {
  display: flex;
  flex-direction: row;
}

/* Styling for summary section */
.recap{
  background-color: black;
}

/* Styling for border radius */
.br{
  border-radius: 0;
  background-color: gainsboro;
}
</style>





<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--  <div class="mx-auto max-w-screen-xl flex space-x-4">-->

<!--  <div class="w-full">-->
<!--  <div class="br card w-100 bg-base-100">-->
<!--    <div class="card-body">-->
<!--      <h2 class="card-title">Ton Panier</h2>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="card">-->
<!--    <div class="productImg mt-6">-->
<!--      <img src="./icons/image%207.png" alt="Shoes" />-->
<!--    </div>-->

<!--    <div class="productBody text-black space-y-2 mt-7">-->
<!--      <h2 class="card-title">Sirop de vanille</h2>-->
<!--      <p>Quantité :</p>-->
<!--      <p>Contenance :</p>-->
<!--      <p>Code article :</p>-->
<!--      <div class="card-actions justify-end">-->
<!--        <button class=" bt btn btn-ghost">Supprimer</button>-->
<!--        <button class=" bt btn btn-ghost">Modifier</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->

<!--    <div class="card">-->
<!--      <div class="productImg mt-7">-->
<!--        <img src="./icons/image%2013.png" alt="Shoes" />-->
<!--      </div>-->

<!--      <div class="productBody text-black space-y-2">-->
<!--        <h2 class="card-title mt-7">Sirop de jasmin</h2>-->
<!--        <p>Quantité :</p>-->
<!--        <p>Contenance :</p>-->
<!--        <p>Code article :</p>-->
<!--        <div class="card-actions justify-end">-->
<!--          <button class=" bt btn btn-ghost ">Supprimer</button>-->
<!--          <button class=" bt btn btn-ghost">Modifier</button>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


<!--  <div class="recap w-75 h-80 bg-base-100 mt-7">-->
<!--    <div class="card-body card-body-footer">-->

<!--      <hr class="h-px my-5 mt-0 bg-gray-200 border-0 dark:bg-gray-700">-->
<!--      <h2 class="card-title">Récapitulatif</h2>-->
<!--      <p>Code promo</p>-->
<!--      <p>Total des articles</p>-->
<!--      <p>Frais de livraison</p>-->
<!--      <p>Total</p>-->
<!--      <div class="card-actions justify-end">-->
<!--        <router-link to="/validation">-->
<!--        <button class="btn btn-primary">Paiment</button>-->
<!--        </router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  </div>-->
<!--  </div>-->

<!--</template>-->

<!--<style scoped>-->
<!--.bt{-->
<!--  background-color: gainsboro;-->
<!--  color: black;-->
<!--}-->
<!--.card-body{-->
<!--  color: black;-->
<!--  background-color: lightgrey;-->
<!--}-->

<!--.card-body-footer{-->
<!--  color: black;-->
<!--  background-color: white;-->
<!--}-->

<!--.card {-->
<!--  display: flex;-->
<!--  flex-direction: row;-->
<!--}-->

<!--.recap{-->
<!--  background-color: black;-->
<!--}-->

<!--.br{-->
<!--  border-radius: 0;-->
<!--  background-color: gainsboro;-->
<!--}-->


<!--</style>-->