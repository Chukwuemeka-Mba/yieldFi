<template lang="">
  <div class="drop" @mouseover="showMenu" @mouseleave="hideMenu">
    <div class="row hover">
      <p>{{ item.name }}</p>
    </div>
    <div class="drop-list">
      <div
        :class="{ hidden: setHidden }"
        v-for="listItem in dropList"
        :key="listItem.id"
      >
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
  margin-right: 1rem;
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
      color: #2a5ac2;
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
}
.hover:hover {
  color: blue;
  p:hover {
    color: blue;
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
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
}
</style>
