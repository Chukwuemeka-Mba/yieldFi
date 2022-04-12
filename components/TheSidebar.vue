<template lang="">
  <div>
    <div class="side-container">
      <div class="hl1 nav-items" v-for="item in navItems" :key="item.id">
        <nuxt-link :to="`/${item.link}`">
          <TheNavItem :item="item" :dropItems="item.dropItems"
        /></nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      dropDown: false,
      navItems: this.$store.state.navItems,
    }
  },
}
</script>
<style lang="scss">
.side-container {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 2rem 3rem;
  height: 100vh;
  box-shadow: 0px 0.2px 12px rgb(218, 230, 253);
  .nav-items {
    padding: 1rem 1rem;
  }
}
</style>
