<template>
  <Navbar />
  <header>
    <router-link to="/">
      <h1><span>Vue</span>deo</h1>
    </router-link>
  </header>
  <router-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    components: { Navbar }
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Exo', sans-serif;

  &::selection {
    background: transparentize($color: #01ae72, $amount: 0.5);
  }
}

body {
  background-color: #e6edf4;
}

a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #3f556d;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);

  h1 {
    color: #cdfcec;
    font-size: 28px;

    span {
      color:#01ae72;
    }
  }
}
</style>
