<template lang="">
  <div>
    <div class="title">
      <h1>Market Data</h1>
    </div>
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Price</th>
            <th>24h Change</th>
            <th class="market-cap">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(coin, index) in marketData.slice(0, 7)" :key="index">
            <td>
              <img :src="`${coin.image}`" alt="" width="30" />
              <span> {{ coin.name }}</span>
              <span class="symbol">{{ coin.symbol }}</span>
            </td>
            <td>$ {{ coin.current_price.toLocaleString() }}</td>
            <td :class="coin.price_change_percentage_24h > 1 ? 'green' : 'red'">
              {{ coin.price_change_percentage_24h.toFixed(2) }}
            </td>
            <td class="market-cap">
              $
              {{
                (Math.abs(Number(coin.market_cap)) / 1.0e6)
                  .toFixed(0)
                  .toLocaleString() + 'M'
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="action">
      <h1>Sign up now to create your business portfolio for free!</h1>

      <a href="/TheRegister" target="_blank"
        ><button type="submit">
          Get Started
          <font-awesome-icon
            style="margin-left: 10px"
            icon="angle-right"
          /></button
      ></a>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      marketData: '',
    }
  },
  async fetch() {
    await axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        this.marketData = res.data
      })
      .catch((err) => {
        return err.message
      })
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Poppins:wght@300&display=swap');

@mixin fr {
  display: flex;
  flex-direction: row;
}
@mixin fc {
  display: flex;
  flex-direction: column;
}

@mixin aic {
  display: flex;
  align-items: center;
}

@mixin jcc {
  display: flex;
  justify-content: center;
}
@mixin inria {
  font-family: 'Inria', sans-serif;
}
.title {
  h1 {
    margin: 10px 40px;
    font-size: 25px;
  }
  h1:hover {
    color: blue;
  }
}
.action {
  margin-left: 40px;
  h1 {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    min-width: 0;
    font-weight: 600;
    font-size: 25px;
    line-height: 32px;
    margin-top: 40px;
    margin-bottom: 16px;
    color: #010b12;
  }
  button {
    font-family: 'Poppins', sans-serif;
    height: 46px;
    background-color: blue;
    border: 0px;
    border-radius: 5px;
    padding: 5px 30px;
    margin-top: 30px;
    color: #fff;
  }
}
.table {
  padding: 20px 10px;
  font-family: 'Poppins', sans-serif;
  min-width: 1200px;
  overflow-x: scroll;
}
table {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: auto;
  overflow-y: hidden;
  text-align: start;
  border-collapse: collapse;
  background-color: #fefefe;
}
table td,
table th {
  text-align: left;
  height: 42px;
  padding: 0.2% 4%;
}

table th {
  opacity: 0.3;
  font-weight: 400;
  font-size: 14px;
  padding: 0.2% 4%;
}
table tbody tr td:nth-child(1) {
  padding: 10px 18px;
}
table tbody tr td:nth-child(1) {
  @include aic();
  gap: 15px;
}
table tbody tr:hover {
  background-color: #e5edff;
  border-radius: 7px;
}

.symbol {
  text-transform: uppercase;
  font-weight: 200;
  opacity: 0.3;
  font-size: 13px;
}

.green {
  color: green;
}
.red {
  color: red;
}

@media screen and (max-width: 800px) {
  .market-cap {
    display: none;
  }
  table td,
  table th {
    font-size: 12px;
  }
  .table {
    padding: 20px 0px;
    min-width: 750px;
  }
  table tbody tr td:nth-child(1) {
    max-width: 60px;
  }
  table tbody tr td:nth-child(1) {
    max-width: 100px;
  }
  .action {
    h1 {
      max-width: 500px;
    }
  }
}
</style>
