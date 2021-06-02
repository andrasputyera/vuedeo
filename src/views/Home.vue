<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img src="../assets/hollywood.jpg" alt="Hollywood Poster" class="featured-img">
        <div class="detail">
          <h3>A Century of Film</h3>
          <p>Hollywood, also called Tinseltown, district within the city of Los Angeles, California, U.S., whose name is synonymous with the American film industry.</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}
</script>

<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .featured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 16px;
      z-index: 1;
      h3 {
        color:#FFF;
        margin-bottom: 16px;
      }
      p {
        color: #FFF;
      }
    }
  }
}
</style>
