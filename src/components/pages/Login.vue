<template>
  <section>
    <base-card>
      <form v-on:submit.prevent="submitForm">
        <div class="actions">
          <button
            @click.prevent="login"
            class="in-active"
            :class="{ active: mode === 'Login' }"
          >
            Login
          </button>
          <button
            @click.prevent="signUp"
            class="in-active"
            :class="{ active: mode === 'Sign up' }"
          >
            Sign up
          </button>
        </div>
        <div class="form-control" v-if="mode === 'Sign up'">
          <input
            type="email"
            id="email"
            v-model.trim="email"
            placeholder="EMAIL"
          />
        </div>
        <div class="form-control">
          <input
            type="text"
            id="username"
            v-model.trim="userName"
            placeholder="USERNAME"
          />
        </div>
        <div class="form-control">
          <input
            type="text"
            id="password"
            v-model.trim="passWord"
            placeholder="PASSWORD"
          />
        </div>

        <p v-if="!formIsValid" class="errors">
          please ensure to fill up the form completely..
        </p>
        <div class="actions">
          <button class="green">{{ mode }}</button>
        </div>
        <p v-if="mode === 'Sign up'">
          By signing up your are agreeing with our trems of service and privacy
          policy
        </p>
      </form>
    </base-card>
  </section>
</template>
<script>
import BaseCard from "../ui/base-card.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      mode: "Login",
      userName: "",
      email: "",
      passWord: "",
      formIsValid: true,
    };
  },
  methods: {
    login() {
      this.mode = "Login";
    },
    signUp() {
      this.mode = "Sign up";
    },
    submitForm() {
      this.formIsValid = true;
      if (this.userName === "" || this.passWord === "") {
        this.formIsValid = false;
        return;
      }
      const userDetails = {
        email: this.email,
        userName: this.userName,
        password: this.passWord,
      };
      console.log(userDetails);
      this.email = this.userName = this.passWord = "";
    },
  },
};
</script>
<style scoped>
.actions {
  display: flex;
  justify-content: space-between;
}
.in-active {
  color: rgb(255, 255, 255, 0.5);
  font-weight: bold;
  font-size: 17px;
}
.active {
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 17px;
  border-bottom: 2px solid rgb(90, 231, 90);
}
section {
  background: radial-gradient(
      89.2% 335.96% at 10.8% 23.25%,
      #6f58af 0%,
      rgba(196, 196, 196, 0.44) 100%
    ),
    url("../../assets/image.png");
  background-position: center;
  height: 100vh;
  padding-top: 50px;
}
p {
  color: aliceblue;
}
form {
  margin: 1rem;
  border-radius: 12px;
  padding: 1rem;
}
button {
  border-style: none;
  background-color: transparent;
}
.green {
  widows: 100%;
  padding: 10px 20px;
  background: rgb(90, 231, 90);
  color: white;
  width: 100%;
  border-radius: 12px;
  font-size: 15px;
}
.form-control {
  margin: 4rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  background: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  color: white;
}

input:focus,
textarea:focus {
  background-color: transparent;
  outline: none;
  color: white;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
@media (max-width: 1090px) {
  .green {
    width: 30%;
    border-radius: 0;
    margin: auto;
  }
}
</style>
