<template lang="">
  <div>
    <section>
      <TheNavbar />
    </section>
    <section class="checkout">
      <div class="top">
        <div class="plan-container">
          <div class="plan-text">
            <h1>Your Plan</h1>
            <p><nuxt-link to="/ThePricing">Change Plan</nuxt-link></p>
          </div>
          <div class="plan-card">
            <div class="plan-title">
              <h1>Yield Crypto Transfer</h1>
              <p>Wordwide</p>
            </div>
            <hr />
            <div class="plan-info">
              <div class="plan-text">
                <h3>Starting Today</h3>
                <h3>$999.99+tax/year</h3>
              </div>
              <div class="plan-text">
                <h3>Next Billing Date</h3>
                <h3>May 9, 2023</h3>
              </div>
              <div class="list">
                <ul>
                  <li>You will next be billed on May 9, 2022</li>
                  <li>
                    Cancel anytime.
                    <span><a href="">Offer terms</a></span> apply
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-container">
        <div class="form-main">
          <div>
            <div class="">
              <h3>Choose Payment Method</h3>
            </div>
            <div>
              <div class="input-radio">
                <input type="radio" name="card" />
                <label for="card">Credit Card or Debit Card</label>
              </div>
              <div class="input-radio">
                <input type="radio" name="card" />
                <label for="card">Paypal</label>
              </div>
            </div>
            <div class="card-form">
              <div class="form-title">
                <h3>Payment Details</h3>
                <font-awesome-icon icon="lock" />
              </div>
              <div class="form">
                <form novalidate>
                  <input
                    type="text"
                    name="card num"
                    placeholder="Card Number"
                    required
                  />
                  <input
                    type="text"
                    name="expiry date"
                    placeholder="Expiry Date"
                    required
                  />
                  <input
                    type="number"
                    name="sec code"
                    placeholder="Security Code"
                    required
                  />

                  <nuxt-link to="/">
                    <button>Confirm Payment</button></nuxt-link
                  >
                </form>
              </div>
            </div>
          </div>
          <div class=""></div>
        </div>
      </div>
    </section>
    <section>
      <TheFooter />
    </section>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.checkout {
  font-family: 'Poppins', sans-serif;
  .top {
    display: flex;
    justify-content: center;
    .plan-container {
      width: 458px;
      .plan-text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        h1 {
          font-size: 1.3rem;
        }
        p {
          font-size: 0.8125rem;
        }
        h3 {
          font-weight: 900;
          font-size: small;
        }
      }
      .plan-card {
        padding: 16px;
        background: linear-gradient(135deg, #0a1e48 0%, #2a5ac2 100%);
        color: rgb(255, 255, 255);
        border-radius: 16px;
        box-shadow: #0000001a 0px 1px 1px;
        .plan-title {
          h1 {
            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 700;
          }
          p {
            font-size: 0.6875rem;
            line-height: 1rem;
            font-weight: 400;
          }
        }
        .plan-info {
          .list {
            font-size: 0.6875rem;
            line-height: 1rem;
            font-weight: 400;
            ul {
              padding-left: 0.5rem;
              li {
                margin-bottom: 0.6875rem;
                a {
                  color: #fff;
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
  }

  .form-container {
    .form-main {
      margin: 32px auto;
      width: 458px;
      padding: 24px;
      box-shadow: #00000026 0px 0px 10px 0px;
      border-radius: 3px;
      .input-radio {
        padding: 10px 16px;
        display: flex;
        align-items: center;
        color: rgb(24, 24, 24);
      }
    }
    .card-form {
      display: flex;
      flex-direction: column;
      .form-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0rem 1rem;
      }
      .form {
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          input {
            height: 40px;
            width: 89%;
            margin: 0.85rem;
            border-radius: 0.2rem;
            font-family: 'Poppins' sans-serif;
          }
          input:focus {
            border: 1px solid #000;
          }
          input:invalid {
            border: 1px solid red;
          }
          button {
            background: linear-gradient(135deg, #0a1e48 0%, #2a5ac2 100%);
          }
        }
      }
    }
  }
}
</style>
