<script setup>
import Footer from '@/components/Footer.vue'

console.log('test');
import NavBar from "@/components/Header.vue";
import Product from "@/components/Product.vue";
import Header from '@/components/Header.vue'
import ProductsList from '@/views/ProductsList.vue'
import Login from '@/components/Login.vue'
import Cart from '@/components/Cart.vue'
import Validation from '@/components/Validation.vue'
</script>

<template>
<header>
  <Header />
  </header>

  <main>
    <div class="bcc">
    <router-view />
    </div>

  </main>
  <footer>
    <Footer />

  </footer>


</template>

<style scoped>
.bcc{
  background-color: white;
}
</style>
