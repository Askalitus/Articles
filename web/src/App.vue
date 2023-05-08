<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="./assets/logo.png" alt="logo" class="logo_img">
        <p class="logo_text">Карбюраттер</p>
      </div>
      <div class="links">
        <RouterLink to="/" class="link">Статьи</RouterLink>
        <RouterLink to="/analytic" class="link">Аналитика</RouterLink>
      </div>
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
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20vw;
  border-bottom: 1px solid black;
}
.logo{
  display: flex;
  gap: 10px;
  align-items: center;
}
.logo_img{
  max-width: 50px;
}
.logo_text{
  font-size: 30px;
}
.links{
  display: flex;
  gap: 30px;
}
.link{
  color: black;
  text-decoration: none;
  font-size: 20px;
}
</style>