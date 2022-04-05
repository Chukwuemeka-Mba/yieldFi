<template lang="">
  <div class="drop">
    <div class="row hover" @mouseover="showMenu" @mouseleave="hideMenu">
      <p>{{ item.name }}</p>

      <div v-if="dropList != ''" class="hover">
        <font-awesome-icon
          :class="{ icon2: !setHidden }"
          icon="caret-down"
          @click="showMenu"
        />
        <font-awesome-icon
          :class="{ icon1: setHidden }"
          icon="caret-up"
          @click="hideMenu"
        />
      </div>
    </div>
    <div class="drop-list">
      <div :class="{ hidden: setHidden }" v-for="listItem in dropList">
        <TheDropdown :listItem="listItem" :key="listItem.id" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      setHidden: true,
      dropList: this.item.dropItems,
    }
  },
  mounted() {
    // this.logItem()
  },
  methods: {
    logItem() {
      console.log(this.dropList)
    },
    showMenu() {
      this.setHidden = false
    },
    hideMenu() {
      this.setHidden = true
    },
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.drop {
  background-color: #fff;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    font-family: 'Poppins', sans-serif;
    p {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      text-align: left;
    }
    .hover:hover {
      color: #39ff13;
    }
  }
}

.icon1 {
  display: none;
}
.icon2 {
  display: none;
}
.hidden {
  display: none;
  font-size: 50px;
}
.hover:hover {
  color: #39ff13;
  p:hover {
    color: #39ff13;
  }
}
.drop-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
}
</style>
