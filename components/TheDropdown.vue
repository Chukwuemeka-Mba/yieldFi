<template>
  <div class="dropdown">
    <div></div>
    <div class="head">
      <p class="title">{{ listItem.title }}</p>
      <p>{{ listItem.description }}</p>
    </div>
    <div class="arrow">
      <font-awesome-icon icon="arrow-right" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    listItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      list: this.listItem,
    }
  },
  methods: {},
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.dropdown {
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  align-items: center;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  gap: 30px;
  width: 200px;
  .title {
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 16px;
  }
  .arrow {
    color: #fff;
    padding-right: 10px;
    width: 50px;
  }
  .head {
    .title {
      font-family: 'Poppins', sans-serif;
      font-weight: 900;
      font-size: 16px;
    }
  }
}

.dropdown:hover {
  background-color: #dadadaa8;
  border-radius: 5px;
  .arrow {
    display: block;
    color: #39ff13;
  }
}
</style>
