<template>
  <main>
    <div class="header">
      <h1 class="dpt">Computer engineering</h1>
      <div class="header-search">
        <input type="text" placeholder="Type your level" />
        <button class="search-filters">&#8964;</button>
      </div>
    </div>

    <h4>Lecture notes</h4>

    <div class="material-container">
      <div class="material">
        <div>
          <p class="material-icon">&#x1F4D1;</p>
        </div>
        <div>
          <h3>CSE 521</h3>
          <p>computer Architecture</p>
        </div>
      </div>

      <div class="material">
        <div>
          <p class="material-icon">&#x1F4D1;</p>
        </div>
        <div>
          <h3>CSE 521</h3>
          <p>computer Architecture</p>
        </div>
      </div>

      <div class="material">
        <div>
          <p class="material-icon">&#x1F4D1;</p>
        </div>
        <div>
          <h3>CSE 521</h3>
          <p>computer Architecture</p>
        </div>
      </div>

      <div class="material">
        <div>
          <p class="material-icon">&#x1F4D1;</p>
        </div>
        <div>
          <h3>CSE 521</h3>
          <p>computer Architecture</p>
        </div>
      </div>

      <div class="material">
        <div>
          <p class="material-icon">&#x1F4D1;</p>
        </div>
        <div>
          <h3>CSE 521</h3>
          <p>computer Architecture</p>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.material-icon {
  color: #6f58af;
  font-size: 34px;
  margin-top: 13px;
  margin-right: 23px;
  padding: 0;
}
.material {
  background-color: white;
  display: flex;
  justify-content: start;
  padding-left: 40px;
  margin-bottom: 10px;
}
.material h3 {
  margin-left: -80px;
  margin-bottom: -19px;
}
.material-container {
  background: #dddd;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 45px;
}
h1 {
  font-size: 40px;
  color: aliceblue;
}
h4 {
  margin-bottom: 0px;
  margin-top: 80px;
  display: flex;
}
input {
  border-style: none;
  margin-left: 7px;
  width: 80%;
  background: transparent;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: column;

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
.search-filters {
  background: transparent;
  border-style: none;
  padding: 7px 5px;
  width: 10%;
}
.header-search {
  background: white;
  width: 28%;
  margin: auto;
  border-radius: 12px;
  display: flex;
}

@media (max-width: 700px) {
  .header-search {
    width: 40%;
  }
  h1 {
    font-size: 30px;
  }
}
</style>
