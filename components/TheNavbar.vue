<template lang="">
  <nav>
    <div class="logo-links">
      <div class="hl1">
        <div class="hl1">
          <img src="../assets/img/yield-light.png" alt="" width="110" />
          <div>
            <nuxt-link class="hl1" to=""
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-grid-3x3-gap-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
                />
              </svg>
              <font-awesome-icon icon="caret-down" />
            </nuxt-link>
          </div>
        </div>

        <div class="hl1 nav-items" v-for="item in navItems">
          <TheNavItem :item="item" :dropItems="item.dropItems" :key="item.id" />
        </div>
      </div>
    </div>

    <div class="ham-links">
      <div class="hl1 nav-links">
        <div class="hl1">
          <nuxt-link class="login" to="">Login</nuxt-link>
          <nuxt-link class="signup" to="">Register</nuxt-link>
        </div>
        <div class="hl1 lang">
          <nuxt-link class="login" to="">Downloads</nuxt-link>
          <nuxt-link class="login" to="">Language</nuxt-link>
          <font-awesome-icon icon="caret-down" />
        </div>
      </div>

      <div class="ham">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
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
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  box-shadow: 0px 0.2px 2px gray;

  .logo-links {
    display: flex;
    align-items: center;
    .hl1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      a:hover {
        color: #d8b930;
      }
      img {
        margin: 5px 15px;
        margin-right: 0px;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      a:hover {
        color: #d8b930;
      }
      .signup {
        background: #ffe832;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 400;
        color: #000 !important;
      }
    }
  }
  .ham {
    margin: 5px 10px;
  }

  @media screen and (max-width: 1000px) {
    .nav-items {
      display: none !important;
    }
    .lang {
      display: none;
    }
    .ham-links {
      .hl1 {
        .lang {
          display: none;
        }
      }
    }
  }
}
</style>
