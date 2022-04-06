<template lang="">
  <div class="drop">
    <div class="row">
      <h1>{{ faq.question }}</h1>
      <font-awesome-icon
        :class="{ icon2: !setHidden }"
        icon="angle-down"
        @click="setHidden = !setHidden"
      />
      <font-awesome-icon
        :class="{ icon1: setHidden }"
        icon="angle-up"
        @click="setHidden = !setHidden"
      />
    </div>
    <div class="ans" :class="{ hidden: setHidden }">
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheFaq',
  props: {
    faq: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      setHidden: 'false',
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

//* Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
}
@mixin google-sans {
  font-family: 'Poppins', sans-serif;
}
@mixin zona-pro {
  font-family: 'Poppins', sans-serif;
}

.drop {
  background-color: #fff;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 5px;
  max-width: 900px;
  .row {
    @include flex-center();
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    h1 {
      @include zona-pro();
      font-size: 17px;
      text-align: left;
    }
  }
  .ans {
    max-width: 500px;
    p {
      font-weight: 400;
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
.ans {
  text-align: left;
  opacity: 0.5;
  margin: 0px 20px;
  p {
    font-family: 'Poppins', sans-serif;
  }
}

@media screen and (max-width: 950px) {
  .drop {
    width: 700px;
    margin: 20px 20px;
  }
}
@media screen and (max-width: 850px) {
  .drop {
    max-width: 600px;
    margin: 20px 20px;
  }
}
@media screen and (max-width: 600px) {
  .drop {
    max-width: 400px;
    margin: 20px 20px;
  }
}
</style>
