<template lang="">
  <nav>
    <div class="logo-links">
      <div class="hl1">
        <div class="hl1">
          <img src="../assets/img/yield-dark.png" alt="" width="110" />
        </div>

        <div class="hl1 nav-items" v-for="item in navItems" :key="item.id">
          <TheNavItem :item="item" :dropItems="item.dropItems" />
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
  </nav>
</template>
<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      dropDown: false,
      navItems: this.$store.state.navItems,
    }
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
    margin-right: 30px;
    .hl1 {
      font-family: 'Poppins', sans-serif;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      a {
        font-family: 'Poppins', sans-serif;
      }
      a:hover {
        text-decoration: underline #39ff13;
        font-family: 'Poppins', sans-serif;
      }
      img {
        margin: 5px 15px;
        margin-right: 30px;
      }
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
      gap: 10px;
      font-size: 14px;
      a {
        font-family: 'Poppins', sans-serif;
        margin-right: 20px;
      }
      a:hover {
        text-decoration: none;
      }
      .signup {
        font-family: 'Poppins', sans-serif;
        background: #2a5ac2;
        padding: 7px 15px;
        border-radius: 5px;
        font-weight: 400;
        color: #fff !important;
        text-decoration: none;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .nav-items {
      display: none !important;
    }
  }
}
</style>
