<template>
  <main>
    <nav>
      <TheNavbar />
    </nav>
    <section class="section1">
      <div class="top">
        <!-- Info  -->
        <div class="info">
          <div class="info-head">
            <h1>
              Buy, trade, and hold 600+ <br />cryptocurrencies on <br />
              Yield Fi
            </h1>
          </div>
          <div class="input">
            <input class="form" type="text" placeholder="Email/Phone Number" />
            <input class="button" type="button" value="Get Started" />
          </div>
        </div>

        <!-- Cards  -->
        <div class="cards">
          <div class="card">
            <img src="../assets/img/nft.png" alt="" width="150" />
            <p>Yield NFTs</p>
          </div>
          <div class="card">
            <img src="../assets/img/coin-img-2.png" alt="" width="150" />
            <p>YTC Ether</p>
          </div>
          <div class="card">
            <img src="../assets/img/coin-img-3.png" alt="" width="150" />
            <p>Yield Cash</p>
          </div>
          <div class="cards"></div>
        </div>
      </div>

      <!-- Bottom Section -->

      <div class="stats">
        <div class="stat">
          <h1>$76 billion</h1>
          <p>24h trading volume on Yield exchange</p>
        </div>
        <div class="stat">
          <h1>600+</h1>
          <p>Cryptocurrencies listed</p>
        </div>
        <div class="stat">
          <h1>90 million</h1>
          <p>Registered users who trust Yield</p>
        </div>
        <div class="stat">
          <h1><font-awesome-icon icon="angle-left" /> 0.10%</h1>
          <p>Lowest transaction fees</p>
        </div>
      </div>
    </section>
    <section class="section2">
      <TheMarket />
    </section>
    <section class="section3">
      <div class="faq">
        <div class="text">
          <h1>Questions we get the most</h1>
          <p>
            If others are asking, then you're probably thinking the same thing.
            <br />Here are some answers that would help.
          </p>
        </div>
        <div class="drop-cards">
          <TheFaq v-for="faq in faqs" :faq="faq" :key="faq.id" />
        </div>
        <div class="action">
          <div class="text2">
            <h1>Got additional questions?</h1>
            <p>We would love to have a chat with you</p>
          </div>
          <router-link to="">
            <button type="submit">Get Started</button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- <section class="section4"></section> -->
    <!-- <section class="section5">section5</section>
    <section class="section6">section6</section>
    <section class="section7">section7</section> -->
  </main>
</template>

<script>
export default {
  name: 'HomePage',

  head() {
    return {
      title: 'Yield.Fi | Crypto Transactions Made Easy',
      meta: [
        {
          hid: 'homepage',
          name: 'description',
          content:
            'Yield Finance is an award winning crypto startup with a mission to onboard local retailers into Decentralised Finance',
        },
      ],
    }
  },
  data() {
    return {
      faqs: this.$store.state.faqs,
    }
  },
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
main {
  font-family: 'Poppins', sans-serif;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.5fr 0.5fr 1fr;
  grid-template-areas:
    'nav'
    's1'
    's2'
    's3';

  nav {
    grid-area: nav;
  }
  .section1 {
    grid-area: s1;

    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-top: 150px;
      .cards {
        margin-top: 50px;
        display: grid;
        align-items: center;
        grid-template-columns: repeat(2, 0.3fr);
        gap: 10px;
        grid-auto-rows: minmax(10px, auto);
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 5px;
          margin: 10px;
          max-width: 170px;
          padding: 20px;
          box-shadow: 0px 5px 9px 2px rgba(69, 104, 209, 0.06);
        }
        .card:hover {
          opacity: 0.6;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      margin: 30px;
      @media screen and (min-width: 800px) {
        margin-top: 80px;
        margin-left: 30px;
      }
      .info-head {
        h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 48px;
        }
      }
      .input {
        margin-top: 10px;
        font-family: 'Poppins', sans-serif;
        .form {
          height: 40px;
          border: 1px solid #aaaaaa9d;
          border-radius: 5px;
          padding: 2px 10px;
          width: 40%;
        }
        .button {
          height: 46px;
          font-family: 'Poppins', sans-serif;
          background-color: #010b12;
          border: 0px;
          border-radius: 5px;
          padding: 5px 30px;
          color: #9cff00;
        }
      }
    }

    .stats {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0px 10%;
      .stat {
        padding: 15px 30px;
        gap: 20px;
        width: 200px;
        h1 {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
          color: #010b12;
        }
        p {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
          margin: 0;
          min-width: 0;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #010b12;
        }
      }
    }
  }

  .section2 {
    grid-area: s2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 150px 0px;
    background-color: #fefefe;
  }

  .section3 {
    grid-area: s3;
    margin-top: 150px;
    .faq {
      @include flex-center();
      flex-direction: column;
      text-align: center;
      grid-area: faq;
      background: #b2e3b637;
      margin: 50px 75px;
      border-radius: 25px;

      .text {
        margin-top: 100px;
      }
      .text {
        h1 {
          font-size: 38px;
        }
        p {
          font-size: 17px;
        }
      }
      .text2 {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
        h1 {
          @include zona-pro();
        }
        p {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          margin-bottom: 40px;
        }
      }
      .action {
        @include flex-center();
        flex-direction: column;
        width: 300px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: 150px;
      }
      .text2 h1 {
        font-size: 22px;
        font-weight: 900;
        margin-bottom: 20px;
      }
    }
  }
}

@media screen and (max-width: 950px) {
  main {
    .section1 {
      .top {
        .cards {
          display: none;
        }
      }
      .info {
        .input {
          margin-top: 10px;
        }
      }
      .stats {
        margin-top: 150px;
        margin-bottom: 150px;
      }
    }

    .section3 {
      margin-top: 150px;
    }
  }
}
</style>
