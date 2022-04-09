<template lang="">
  <div class="container">
    <div class="card">
      <div class="card-top">
        <h2>We charge a processing fee per transaction.</h2>
        <h1>1%</h1>
        <p>Transaction Fee</p>
      </div>
      <hr />
      <div class="card-info">
        <p><font-awesome-icon icon="clock" /> 24/7 In-house support</p>
        <p><font-awesome-icon icon="bolt" /> Instant assests withdrawal</p>
        <p><font-awesome-icon icon="rocket" /> Fast payouts to Bank accounts</p>
      </div>
      <div class="btn">
        <nuxt-link to="/TheCheckout">
          <button>Get Started</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background-color: #2a5ac2;
  border-radius: 1rem;
  max-width: 22rem;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    color: #fff;
    hr {
      width: 90%;
    }
    .card-top {
      text-align: center;
      h2 {
        max-width: 350px;
        text-align: center;
        font-weight: 900;
        font-size: 19px;
      }
      h1 {
        font-weight: 700;
        line-height: 30px;
        font-size: 72px;
      }
      p {
        font-size: 15px;
      }
    }
    .card-info {
      text-align: center;
      P {
        font-size: 15px;
      }
    }
    .btn {
      button {
        background: #fff;
        color: #2a5ac2;
        font-weight: 900;
        min-width: 260px;
      }
    }
  }
}
</style>
