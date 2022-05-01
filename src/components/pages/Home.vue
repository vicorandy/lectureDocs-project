<template>
  <main>
    <div class="home">
      <h1 class="home-content">Lecture notes in</h1>
      <h1 class="home-content">your pocket</h1>
      <p class="spc">The best educational Lecture notes</p>
      <base-button link :to="'/search'" :mode="'flat'" class="spc green"
        >Get notes</base-button
      >
    </div>

    <div class="options">
      <div class="options-box">
        <div class="options-box-container">
          <h3 class="option-box-content">university</h3>
          <p class="option-box-content">
            <base-button link :mode="'flat'" :to="'/institution/university'"
              >school &#8594;</base-button
            >
          </p>
        </div>
      </div>

      <div class="options-box">
        <div class="options-box-container">
          <h3 class="option-box-content">Polytechnic</h3>
          <p class="option-box-content">
            <base-button link :mode="'flat'" :to="'/institution/polytechnic'">
              school &#8594;</base-button
            >
          </p>
        </div>
      </div>

      <div class="options-box">
        <div class="options-box-container">
          <h3 class="option-box-content">College of education</h3>
          <p class="option-box-content">
            <base-button link :mode="'flat'" :to="'/institution/college'"
              >school &#8594;</base-button
            >
          </p>
        </div>
      </div>
    </div>

    <section>
      <h3>About us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        quisquam quod aperiam illo odit atque ab, delectus eaque magnam? Facere
        ea alias sed molestiae amet, delectus voluptatem quis doloribus autem?
      </p>

      <div class="box">
        <img class="box1" src="../../assets/img-1.png" />
        <div class="box1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic
            culpa? Quos perspiciatis neque ipsam praesentium hic eveniet fugiat
            laboriosam amet porro magni dolore iusto deleniti, totam unde nihil
            mollitia.
          </p>
          <button class="green">know more</button>
        </div>
      </div>

      <div class="box">
        <div class="box1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, hic
            culpa? Quos perspiciatis neque ipsam praesentium hic eveniet fugiat
            laboriosam amet porro magni dolore iusto deleniti, totam unde nihil
            mollitia.
          </p>
          <button class="green">know more</button>
        </div>
        <img src="../../assets/img-2.png" class="box1" />
      </div>
    </section>
  </main>
</template>
<script>
import baseButton from "../ui/base-button.vue";
export default {
  components: { baseButton },
};
</script>
<style scoped>
h1 {
  font-size: 60px;
}
button {
  border-style: none;
  font-size: 14px;
}
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 100px;
  padding-bottom: 60px;
  background: radial-gradient(
      89.2% 335.96% at 10.8% 23.25%,
      #6f58af 0%,
      rgba(196, 196, 196, 0.44) 100%
    ),
    url("../../assets/image.png");
  background-position: center;
}
.spc {
  margin-top: 15px;
  margin-left: 19px;
  color: aliceblue;
}
.home-content {
  margin: 0;
  color: aliceblue;
  margin-left: 19px;
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;
}
.options-box {
  background: #c4c4c4;
  width: 30%;
  height: 100px;
  margin-top: -30px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 10px;
}
.options-box-container {
  margin-top: 35px;
}
.option-box-content {
  margin: 0;
  margin-top: 3px;
}
.box {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 30px;
}
.box1 {
  width: 47%;
  border-radius: 12px;
  padding: 17px;
  margin-left: 5px;
  text-align: start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.green {
  padding: 5px;

  text-align: center;
  background: rgb(90, 231, 90);
  color: aliceblue;
  padding: 10px 30px;
}
@media (max-width: 750px) {
  .home {
    align-items: center;
  }
  .home h1 {
    font-size: 40px;
  }
  .options {
    flex-direction: column;
    align-items: center;
  }
  .options-box {
    background: whitesmoke;
    width: 100%;
    height: 100px;
    margin-top: 0px;
    margin-bottom: 7px;
    border-radius: 0px;
  }
  .box1 {
    width: 45%;
    border-radius: 0px;
    padding: 8px;
    align-items: start;
  }
}
</style>
