<template lang="">
  <div class="pricing-container">
    <div>
      <TheNavbar />
    </div>
    <section class="price-card">
      <ThePriceCard />
    </section>
    <section>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>-</th>
              <th>Region</th>
              <th>Processing Fee</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Accept Payments via Crypto Transfer</td>
              <td>Worldwide</td>
              <td>1%</td>
              <td>Instantly</td>
            </tr>
            <tr>
              <td>Accept Payments via Bank Transfer</td>
              <td>Worldwide</td>
              <td>1%</td>
              <td>Instantly</td>
            </tr>
            <tr>
              <td>Yield Wallet Payout</td>
              <td>Africa</td>
              <td>0%</td>
              <td>10 - 15 mins</td>
            </tr>
            <tr>
              <td>Yield Local Bank Payout</td>
              <td>Worldwide</td>
              <td>0%</td>
              <td>Instantly</td>
            </tr>
            <tr>
              <td>Yield USD Bank Account Payout</td>
              <td>USA</td>
              <td>1%</td>
              <td>Instantly</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <div>
      <TheFooter />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.pricing-container {
  .price-card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0rem;
  }

  .table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem 0rem;
    overflow-x: scroll;
    table {
      width: 100%;
      height: auto;
      overflow-x: scroll;
      text-align: start;
      border-collapse: collapse;
      background-color: #ffff;
      padding: 2rem 3rem;
      font-family: 'Poppins', sans-serif;
      thead th {
        font-weight: 900;
        font-size: 17px;
        text-align: left;
      }
      tbody td {
        font-weight: 400;
        font-size: 13px;
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 10px;
      }
      tbody tr:hover {
        background-color: #e5edff;
      }
    }
    table tbody td:nth-child(1) {
      font-weight: 900;
      color: #000;
      opacity: 1;
      font-size: 17px;
      min-width: 210px;
    }
    table td,
    table th {
      text-align: start;
      height: 42px;
      padding: 0.2% 4%;
      min-width: 170px;
    }
  }
}
</style>
