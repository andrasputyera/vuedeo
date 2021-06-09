<template>
    <div class="navbar">
        <nav>
            <router-link :to="{ name: 'Home' }">
                <h1><span>Vue</span>deo</h1>
            </router-link>
            <div class="links">
                <button>Logout</button>
                <router-link class="btn" :to="{ name: 'Register' }">Register</router-link>
                <router-link class="btn" :to="{ name: 'Login' }">Login</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: #3f556d;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: 20px;
    font-size: 28px;
  }
  nav h1 span {
    color:#01ae72;
    font-size: 28px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>