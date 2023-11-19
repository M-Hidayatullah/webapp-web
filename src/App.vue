<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand">LOGO</router-link>
      <router-link
        :to="{ name: 'login' }"
        class="text-light text-decoration-none"
        id="navbarNav"
        href="#"
        >LOGIN</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
body {
  background: lightgray !important;
}
</style>
