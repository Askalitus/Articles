<template>
  <div>
    <div class="header">
      <img src="./assets/logo.png" alt="logo" class="logo">
      <p class="logo_text">Карбюраттер</p>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router';
export default {
  setup () {

    return {}
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Comfortaa', cursive;
}
.header{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  gap: 10px;
  border-bottom: 1px solid black;
}
.logo{
  max-width: 50px;
}
.logo_text{
  font-size: 30px;
}
</style>