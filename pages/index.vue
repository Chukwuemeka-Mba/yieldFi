<template>
  <main>
    <section class="section1">
      <div class="top">
        <!-- Info  -->
        <div class="info">
          <div class="info-head">
            <h1>Buy, trade, and hold 600+ cryptocurrencies on Yield Fi</h1>
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
    <!-- <section class="section3">section3</section>
    <section class="section4">section4</section>
    <section class="section5">section5</section>
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
}
</script>

<style lang="scss" scoped>
main {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    's1'
    's2'
    // 's3'
    // 's4'
    // 's5'
    // 's6'
    // 's7'
;

  .section1 {
    grid-area: s1;
    height: 100vh;

    .top {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
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
        margin-left: 50px;
      }
      .info-head {
        h1 {
          font-size: 48px;
        }
      }
      .input {
        margin-top: 100px;
        .form {
          height: 40px;
          border: 1px solid #aaaaaa9d;
          border-radius: 5px;
          padding: 2px 10px;
          width: 40%;
        }
        .button {
          height: 46px;
          background-color: #fcd535;
          border: 0px;
          border-radius: 5px;
          padding: 5px 30px;
        }
      }
    }

    .stats {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin: 20px;
      .stat {
        padding: 10px 10px;
        gap: 20px;
        h1 {
          font-weight: 600;
          font-size: 40px;
          line-height: 48px;
        }
        p {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #1e2329;
        }
      }
    }
  }

  .section2 {
    grid-area: s2;
  }

  .section3 {
    grid-area: s3;
  }

  .section4 {
    grid-area: s4;
  }

  .section5 {
    grid-area: s5;
  }

  .section6 {
    grid-area: s6;
  }

  .section7 {
    grid-area: s7;
  }
}

@media screen and (max-width: 850px) {
  main {
    .section1 {
      .top {
        .cards {
          display: none;
        }
      }
    }
  }
}
</style>
