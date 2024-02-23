<script setup>

</script>

<template>
  <div class="mx-auto max-w-screen-xl flex space-x-4">

  <div class="w-full">
  <div class="br card w-100 bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Ton Panier</h2>
    </div>
  </div>

  <div class="card">
    <div class="productImg">
      <img src="./icons/image%207.png" alt="Shoes" />
    </div>

    <div class="productBody">
      <h2 class="card-title">Sirop de vanille</h2>
      <p>Quantité :</p>
      <p>Contenance :</p>
      <p>Code article :</p>
      <div class="card-actions justify-end">
        <button class=" bt btn btn-ghost">Supprimer</button>
        <button class=" bt btn btn-ghost">Modifier</button>
      </div>
    </div>
  </div>

    <div class="card">
      <div class="productImg">
        <img src="./icons/image%2013.png" alt="Shoes" />
      </div>

      <div class="productBody">
        <h2 class="card-title">Sirop de jasmin</h2>
        <p>Quantité :</p>
        <p>Contenance :</p>
        <p>Code article :</p>
        <div class="card-actions justify-end">
          <button class=" bt btn btn-ghost">Supprimer</button>
          <button class=" bt btn btn-ghost">Modifier</button>
        </div>
      </div>
    </div>


    <!--  <div class="card w-96">-->
<!--    <figure><img src="./icons/image%2013.png" alt="Shoes" /></figure>-->
<!--    <div class="card-body">-->
<!--      <h2 class="card-title">Sirop de jasmin</h2>-->
<!--      <p>Quantité :</p>-->
<!--      <p>Contenance :</p>-->
<!--      <p>Code article :</p>-->
<!--      <div class="card-actions">-->
<!--        <button class="bt btn btn-ghost">Supprimer</button>-->
<!--        <button class=" bt btn btn-ghost">Modifier</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  </div>-->


  <div class="recap w-75 h-80 bg-base-100">
    <div class="card-body">
      <h2 class="card-title">Récapitulatif</h2>
      <p>Code promo</p>
      <p>Total des articles</p>
      <p>Frais de livraison</p>
      <p>Total</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Paiment</button>
      </div>
    </div>
  </div>
  </div>
  </div>

</template>

<style scoped>
.bt{
  background-color: gainsboro;
  color: black;
}
.card-body{
  color: white;
}



.card {
  display: flex;
  flex-direction: row;
}

.recap{
  background-color: black;

}

.br{
  border-radius: 0;
  background-color: gainsboro;
}


</style>