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

    <form @submit.prevent="SearchMovies()" class="search-box">
      <input type="text" placeholder="Movie search..." v-model="search" />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="Movie Poster" />
            <div class="type">{{ movie.Type }}</div>
          </div>
          <div class="detail">
            <p class="year">{{ movie.Year }}</p>
            <h3>{{ movie.Title }}</h3>
          </div>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue';
import env from '@/env.js'

export default {
  name: 'Home',
  setup() {
    const search = ref("");
    const movies = ref([]);
    
    const SearchMovies = () => {
      if (search.value != "") {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${env.apikey}&s=${search.value}`)
        .then(response => response.json())
          .then(data => {
            movies.value = data.Search;
            search.value = "";
          });  
      }
    }

    return {
      search,
      movies,
      SearchMovies
    }
  }
  
  
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
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;
    
      &[type="text"] {
        width: 100%;
        color: #FFF;
        background-color: #719bc8;
        font-size: 20px;
        padding: 10px 16px;
        border-radius: 8px;
        margin-bottom: 15px;
        transition: 0.4s;
        
        &::placeholder {
          color: #f3f3f3;
        }

        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
    
      &[type="submit"] {
        width: 100%;
        max-width: 300px;
        background-color: #01ae72;
        padding: 16px;
        border-radius: 8px;
        color: #FFF;
        font-size: 20px;
        text-transform: uppercase;
        transition: 0.4s;
        
        &:active {
          background-color: rgb(30, 98, 82);
        }
      }
    }
  }
}
</style>
