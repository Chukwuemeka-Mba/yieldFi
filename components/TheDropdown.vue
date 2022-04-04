<template>
  <div class="dropdown title">
    <div></div>
    <div>
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
.dropdown {
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
  align-items: center;
  text-align: left;
  gap: 30px;
  z-index: 2;
  width: 200px;
  .title {
    font-weight: 900;
    font-size: 16px;
  }
  .arrow {
    color: #fff;
    padding-right: 10px;
    width: 50px;
  }
}

.dropdown:hover {
  background-color: #dadadaa8;
  border-radius: 5px;
  .arrow {
    display: block;
    color: #d8b930;
  }
}
</style>
