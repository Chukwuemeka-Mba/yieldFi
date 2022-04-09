<template lang="">
  <section>
    <div class="main-card">
      <div class="head">
        <h1>Ready to get started?</h1>
        <p>
          Take your business global with our crypto payment and business growth
          infrastructure.
        </p>
      </div>
      <div class="button">
        <nuxt-link to="/ThePricing"> <TheButton /></nuxt-link>
      </div>
    </div>
    <div class="cards">
      <div class="card startup">
        <div class="card-text">
          <img src="../assets/img/bus.png" alt="" width="60" />
          <h1>Are you a startup?</h1>
          <p>
            Become truly borderless. Unlock the power of crypto for your
            business.
          </p>
        </div>
        <div class="button">
          <nuxt-link to="/ThePricing">
            <button type="submit">
              Get Started
              <font-awesome-icon style="margin-left: 10px" icon="arrow-right" />
            </button>
          </nuxt-link>
        </div>
      </div>
      <div class="card dev">
        <img src="../assets/img/dev.png" alt="" width="50" />
        <div class="card-text">
          <h1>Are you a developer?</h1>
          <p>
            Build custom crypto payment solutions with well documented APIs.
          </p>
        </div>
        <div class="button">
          <nuxt-link to="/ThePricing">
            <button type="submit">
              View Documentation
              <font-awesome-icon
                style="margin-left: 10px"
                icon="arrow-right"
              /></button
          ></nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

section {
  display: flex;
  flex-direction: row;
  font-family: 'Poppisns', sans-serif;

  .main-card {
    margin-bottom: 40px;
    padding: 1.5rem;
    max-width: 450px;
    border-radius: 10px;
    .head {
      h1 {
        font-size: 26px;
      }
      p {
        font-family: 'Poppisns', sans-serif;
      }
    }

    .button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      max-width: 250px;
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    gap: 30px;

    .card {
      padding: 1.5rem;
      max-width: 450px;
      border-radius: 10px;
      margin-bottom: 40px;

      .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 250px;

        button {
          background-color: transparent;
          color: #4671ca;
        }
      }
    }
    .dev {
      background-color: #fdf5e7;
    }
    .startup {
      background-color: #e6ebf3;
    }
  }
}

@media screen and (max-width: 1000px) {
  section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 10px 30px;

    .cards {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
