<template lang="">
  <div class="register">
    <section class="slider"></section>

    <section class="form-container">
      <div class="img">
        <nuxt-link to="/">
          <img src="../assets/img/yield-dark.png" alt="" width="150"
        /></nuxt-link>
      </div>
      <div class="form">
        <div class="title">
          <h1>Get Started</h1>
          <p>
            Create an account to start accepting crypto payments from customers
            globally
          </p>
        </div>
        <form @submit.prevent enctype="multipart/form-data">
          <div class="fields">
            <div class="name-field">
              <div class="name">
                <label for="first"><strong>First Name</strong></label>
                <input type="text" name="first" placeholder="Favour" />
              </div>
              <div class="name">
                <label for="Last Name"><strong>Last Name</strong></label>
                <input type="text" name="Last Name" placeholder="Felix" />
              </div>
            </div>

            <label for="email"><strong>Email Address</strong></label>
            <input
              type="password"
              name="email"
              required
              placeholder="favour@acumen.digital"
            />

            <label for="phone"><strong>Phone Number</strong></label>
            <input type="tel" name="phone" />

            <label for="password"><strong>Password</strong></label>
            <input type="password" name="password" />
            <p class="forgot">Forgot Password?</p>
          </div>
          <div class="button">
            <nuxt-link to="">
              <button type="submit">Sign In</button>
            </nuxt-link>
          </div>
          <p class="reg">
            Already got an account?
            <nuxt-link to="/TheLogin"><span>Login Here</span></nuxt-link>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: '',
    }
  },
}
</script>
<style lang="scss" scoped>
.form-container {
  height: 150vh;
  font-family: 'Poppins', 'sans-serif';
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  .img {
    text-align: center;
    margin: 2rem 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100%;
    max-width: 500px;
    padding: 1rem 2.5rem;
    --tw-border-opacity: 1;
    border-color: rgba(252, 252, 252, var(--tw-border-opacity));
    .title {
      text-align: center;
      h1 {
        font-family: 'Poppins', 'sans-serif';
        font-weight: 900;
        font-size: 32px;
      }
      p {
        font-family: 'Poppins', 'sans-serif';
        max-width: 420px;
      }
    }
    form {
      .fields {
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        .name-field {
          display: flex;
          flex-direction: row;
          gap: 40px;
          .name {
            display: flex;
            flex-direction: column;
          }
          label {
            font-weight: 900;
            margin-bottom: 0.5rem;
            font-size: 15px;
          }
          input {
            height: 40px;
            width: 150px;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 0.1rem 0.4rem;
          }
        }
        label {
          font-weight: 900;
          margin-bottom: 0.5rem;
          font-size: 15px;
        }
        input {
          height: 40px;
          width: 350px;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 0.1rem 0.5rem;
        }
        .forgot {
          font-family: 'Poppins', 'sans-serif';
          text-align: right;
          opacity: 0.4;
          font-size: 14px;
        }
      }
      .button {
        a {
          button {
            width: 350px;
          }
          button:hover {
            background-color: #0b71e5;
          }
        }
      }
      .reg {
        margin: 2rem 0.5rem;
        font-size: 13px;
        text-align: center;
        span {
          color: #2ae4ac;
        }
      }
    }
  }
}
</style>
