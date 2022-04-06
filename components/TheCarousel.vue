<template lang="">
  <div class="main">
    <div class="header">
      <p>FOR BUSINESSES</p>
      <h1>The financial institution for a digital business future</h1>
    </div>
    <div class="body">
      <div class="text-container">
        <div class="text">
          <h2>Multiple Payment Options</h2>
          <p>
            Let your customers pay you in crypto however they want. Bank
            transfers, card payments and more, all with YieldFi.
          </p>
        </div>
        <div class="text">
          <h2>Earn Crypto Yields</h2>
          <p>
            Start earning crypto just for learning about how specific
            cryptocurrencies work
          </p>
        </div>
        <div class="text">
          <h2>Learn the basics</h2>
          <p>
            Beginner guides, practical tips, and market updates for
            first-timers, experienced investors, and everyone in between
          </p>
        </div>
      </div>
      <div class="img-container">
        <div v-for="(image, index) in images" :key="index">
          <img :src="`${image}`" alt="" width="500" height="400" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'https://ak.picdn.net/offset/photos/5b23e65e17fb156e48082e2b/medium/photo.jpg',
        'https://www.unclecu.org/wp-content/uploads/2020/04/Woman-using-mobile-device-on-couch-at-home.jpg',
        'https://thumbs.dreamstime.com/b/african-american-guy-unboxing-cardboard-box-holding-new-t-shirt-indoor-shopping-delivery-concept-cheerful-sitting-couch-happy-210785294.jpg',
      ],
      imgIndex: 0,
    }
  },
  methods: {
    setImgIndex(num) {
      this.imgIndex = num
    },
  },
}
</script>
<style lang="scss" scoped>
.main {
  padding: 30px 3%;
  .header {
    h1 {
      line-height: 40px;
      font-family: 'Poppins', sans-serif;
      font-size: 33px;
      max-width: 48rem;
      font-weight: 900;
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .text-container {
      display: flex;
      flex-direction: column;
      .text {
        h2 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
        }
        p {
          line-height: 24px;
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          max-width: 32rem;
          font-weight: 400;
        }
      }
    }
    .img-container {
      display: flex;
      flex-direction: column;
      padding: 20px 5px;
      width: 500px;
    }
  }
}
</style>
