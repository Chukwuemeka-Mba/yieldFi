<template lang="">
  <div class="login">
    <section class="slider"></section>

    <section class="">
      <div class="img">
        <nuxt-link to="/">
          <img src="../assets/img/yield-dark.png" alt="" width="150"
        /></nuxt-link>
      </div>
      <div class="form">
        <div class="title">
          <h1>Welcome Back</h1>
          <p>Please enter your account details</p>
        </div>
        <form @submit.prevent enctype="multipart/form-data">
          <div class="fields">
            <label for="email"><strong>Email</strong></label>
            <input type="email" name="email" />

            <label for="email"><strong>Password</strong></label>
            <input type="password" name="email" />
            <p class="forgot">Forgot Password?</p>
          </div>
          <div class="button">
            <nuxt-link to="">
              <button>Sign In</button>
            </nuxt-link>
          </div>
          <p class="reg">
            No account yet?
            <nuxt-link to="/TheRegister"><span>Register Here</span></nuxt-link>
          </p>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.login {
  height: 100vh;
  font-family: 'Poppins', 'sans-serif';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .img {
    text-align: center;
    margin: 1.5rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    padding: 3rem 2.5rem;
    border-radius: 7px;
    .title {
      text-align: center;
      h1 {
        font-family: 'Poppins', 'sans-serif';
        font-weight: 900;
        font-size: 32px;
      }
      p {
        font-family: 'Poppins', 'sans-serif';
      }
    }
    form {
      .fields {
        display: flex;
        flex-direction: column;
        margin-top: 4rem;
        label {
          font-weight: 900;
          margin-bottom: 0.5rem;
          font-size: 15px;
        }
        input {
          height: 30px;
          width: 350px;
          margin-bottom: 1rem;
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
