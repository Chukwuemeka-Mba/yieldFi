<template lang="">
  <nav>
    <div class="logo-links">
      <div class="hl1">
        <div class="hl1">
          <div class="rotate" @click="showSidebar">
            <font-awesome-icon icon="bars" />
          </div>
          <nuxt-link to="/">
            <img src="../assets/img/yield-light.png" alt="" width="110"
          /></nuxt-link>
        </div>

        <div class="hl1 nav-items" v-for="item in navItems" :key="item.id">
          <nuxt-link :to="`/${item.link}`">
            <TheNavItem :item="item" :dropItems="item.dropItems"
          /></nuxt-link>
        </div>
      </div>
    </div>

    <div class="ham-links">
      <div class="hl1 nav-links">
        <div class="hl1">
          <nuxt-link class="login" to="/TheLogin">Login</nuxt-link>
          <nuxt-link class="signup" to="/TheRegister">Register</nuxt-link>
        </div>
      </div>
    </div>
    <div class="sidebar" v-if="sidebar">
      <TheSidebar />
    </div>
  </nav>
</template>
<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      dropDown: false,
      sidebar: false,
      navItems: this.$store.state.navItems,
    }
  },
  methods: {
    showSidebar() {
      this.sidebar = !this.sidebar
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  padding: 10px 10px;
  box-shadow: 0px 0.2px 12px rgb(218, 230, 253);

  .logo-links {
    display: flex;
    align-items: center;
    margin-right: 0px;
    .hl1 {
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      a {
        font-family: 'Poppins', sans-serif;
        margin-right: 5px;
        transition: text-decoration 0.5s;
      }
      img {
        margin: 5px 15px;
        margin-right: 30px;
      }
    }
    .nav-items {
      margin-bottom: 10px;
    }
  }
  .nav-logo {
    padding: 5px 10px;
  }

  .ham-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .hl1 {
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      font-size: 14px;
      a {
        font-family: 'Poppins', sans-serif;
        margin-right: 10px;
      }
      a:hover {
        text-decoration: none;
      }
      .signup {
        font-family: 'Poppins', sans-serif;
        background: blue;
        padding: 7px 15px;
        border-radius: 5px;
        font-weight: 400;
        color: #fff !important;
        text-decoration: none;
      }
    }
  }

  .rotate {
    display: none;
    svg {
      height: 25px;
      color: blue;
    }
  }
  .sidebar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    .nav-items {
      display: none !important;
    }
    .rotate {
      display: block;
      svg {
        height: 25px;
        color: blue2;
      }
    }
    .sidebar {
      display: block;
      position: absolute;
      left: 0px;
      top: 69px;
    }
  }
}
</style>
