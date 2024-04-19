<script setup>
// This is a script setup section for Vue 3 Composition API
// You can add your reactive data, computed properties, and methods here
</script>

<template>
  <!-- Hero section with a login form -->
  <div class="hero min-h-screen bg-base-200">
    <!-- Content layout for login form and text -->
    <div className="hero-content flex-col lg:flex-row-reverse">
      <!-- Text section for login message -->
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Connecter vous !</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <!-- Login form card -->
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <!-- Email input field -->
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <!-- Password input field and forgot password link -->
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mot de passe</span>
            </label>
            <input type="password" placeholder="mot de passe" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Mot de passe oublié ?</a>
            </label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Read and accept the general conditions</span>
              <input type="checkbox" checked="checked" class="checkbox checkbox-primary" />
            </label>
          </div>

          <!-- Login button -->
          <div className="form-control mt-6">
            <button className="btn btn-primary">Connexion</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hero section styling */
.hero{
  background-color: lightgrey;
  color: black;
}
</style>







<!--<script setup>-->

<!--</script>-->

<!--<template>-->
<!--  <div class="hero min-h-screen bg-base-200">-->
<!--    <div className="hero-content flex-col lg:flex-row-reverse">-->
<!--      <div className="text-center lg:text-left">-->
<!--        <h1 className="text-5xl font-bold">Connecter vous !</h1>-->
<!--        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem-->
<!--          quasi. In deleniti eaque aut repudiandae et a id nisi.</p>-->
<!--      </div>-->
<!--      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">-->
<!--        <form className="card-body">-->
<!--          <div className="form-control">-->
<!--            <label className="label">-->
<!--              <span className="label-text">Email</span>-->
<!--            </label>-->
<!--            <input type="email" placeholder="email" className="input input-bordered" required />-->
<!--          </div>-->
<!--          <div className="form-control">-->
<!--            <label className="label">-->
<!--              <span className="label-text">Mot de passe</span>-->
<!--            </label>-->
<!--            <input type="password" placeholder="mot de passe" className="input input-bordered" required />-->
<!--            <label className="label">-->
<!--              <a href="#" className="label-text-alt link link-hover">Mot de passe oublié ?</a>-->
<!--            </label>-->
<!--          </div>-->
<!--          <div className="form-control mt-6">-->
<!--            <button className="btn btn-primary">Connexion</button>-->
<!--          </div>-->
<!--        </form>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--.hero{-->
<!--  background-color: lightgrey;-->
<!--  color: black;-->
<!--}-->
<!--</style>-->