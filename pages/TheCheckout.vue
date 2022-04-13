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
                <input type="radio" @click="setPayIndex(1)" name="card" />
                <label for="card">Credit Card or Debit Card</label>
              </div>
              <div class="input-radio">
                <input  @click="setPayIndex(2)"  type="radio" name="card" />
                <label for="card">Square </label>
              </div>
              <div class="input-radio">
                <input  @click="setPayIndex(3)"  type="radio" name="card" />
                <label for="card">Flutterwave - Africa</label>
              </div>
            </div>
            <div class="card-form">
              <div class="form-title">
                <h3>Payment Details</h3>
                <font-awesome-icon icon="lock" />
              </div>
              <div class="form">
                <form v-if="payIndex == 1">
                  <input
                    type="text"
                    name="card num"
                    placeholder="Card Number"
                    required
                  />
                  <input
                    type="text"
                    name="expiry date"
                    placeholder="Expiry Date: MM / YY"
                    required
                  />
                  <input
                    type="number"
                    name="sec code"
                    placeholder="Security Code: XXX"
                    required
                  />
                  <button>
                        Pay With Card
                      </button>
                  </form>
                  <div class="comp">
                    <div v-if="payIndex == 2" class="square">
                      <div id="card-container"></div>
                      <button @click="initializeCard(card)">
                        Pay With Square
                        <span><img src="@/assets/img/square.png" /></span>
                      </button>
                    </div>
                    <div v-if="payIndex == 3" class="flutter">
                      <button @click="payViaService">
                        Pay With Flutterwave
                        <span><img src="@/assets/img/flutterwave.png" /></span>
                      </button>
                    </div>
                  </div>
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
export default {
  data() {
    return {
      payIndex: '',
      // Flutterwave Integration
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 49.99,
        public_key: 'FLWPUBK_TEST-02c0a349a358c8d03b48a3582dcf1a0d-X',
        currency: 'USD',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          counsumer_id: '7898',
          consumer_mac: 'kjs9s8ss7dd',
        },
        customer: {
          name: 'Favour Felix',
          email: 'favour@acumen.digital',
          phone_number: '081845***044',
        },
        customizations: {
          title: 'Yield Crypto Trasfer',
          description: 'Africa (Lagos)',
          logo: 'https://flutterwave.com/images/logo-colored.svg',
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal,
      },
      // Square Sdk Integration
      card: null,
      appId : 'sq0idp--aEjJre6mcOtD0A6MrryAw',
      locationId : 'LHK8V3B5FDWA8',

    }
  },
  mounted: async function() {
    const payments = Square.payments('sq0idp--aEjJre6mcOtD0A6MrryAw', 'LHK8V3B5FDWA8');
    const card = await payments.card();
    // await card.attach('#card-container');
    this.card = card
    },
  methods: {
    // Radio Input Methods
    setPayIndex(num) {
      this.payIndex = num
    },
    // Flutterwave Methods
    payViaService() {
      this.payWithFlutterwave(this.paymentData)
    },
    makePaymentCallback(response) {
      console.log('Pay', response)
    },
    closedPaymentModal() {
      console.log('payment is closed')
    },
    generateReference() {
      const date = new Date()
      return date.getTime().toString()
    },
    // Square Methods
   async initializeCard(payments) {
        const card = await payments.card();
        await card.attach('#card-container');

        return card;
      },async function () {
  if (!window.Square) {
    throw new Error('Square.js failed to load properly');
  }

  const payments = window.Square.payments(appId, locationId);
  let card;
  try {
    card = await initializeCard(payments);
  } catch (e) {
    console.error('Initializing Card failed', e);
    return;
  }

  // Checkpoint 2.
  async function handlePaymentMethodSubmission(event, paymentMethod) {
    event.preventDefault();

    try {
      // disable the submit button as we await tokenization and make a
      // payment request.
      cardButton.disabled = true;
      const token = await tokenize(paymentMethod);
      const paymentResults = await createPayment(token);
      displayPaymentResults('SUCCESS');

      console.debug('Payment Success', paymentResults);
    } catch (e) {
      cardButton.disabled = false;
      displayPaymentResults('FAILURE');
      console.error(e.message);
    }
  }

  const cardButton = document.getElementById(
    'card-button'
  );
  cardButton.addEventListener('click', async function (event) {
    await handlePaymentMethodSubmission(event, card);
  });
}
  },
}
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
    margin: 7rem 0rem;
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
            font-family: 'Poppins' sans-serif;
          }

          button {
            background: linear-gradient(135deg, #0a1e48 0%, #2a5ac2 100%);
          }
        }

          .comp {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            .flutter {
              button {
                display: flex;
                gap: 10px;
                cursor: pointer;
                color: orange;
                align-items: center;
                border: 1px solid orange;
                background: linear-gradient(
                  135deg,
                  #ffffff 2%,
                  #ffffff 0%,
                  #ffffff 40%
                );
                img {
                  width: 30px;
                }
              }
            }
            .square {
              button {
                display: flex;
                gap: 10px;
                cursor: pointer;
                color: #000000;
                align-items: center;
                border: 1px solid #000000;
                background: linear-gradient(
                  135deg,
                  #ffffff 2%,
                  #ffffff 0%,
                  #ffffff 40%
                );
                img {
                  width: 30px;
                }
              }
            }
          }
      }
    }
  }
}
</style>
