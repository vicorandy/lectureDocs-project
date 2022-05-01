<template>
  <main class="body">
    <div class="main-scroll-div">
      <div>
        <button v-on:click="scrollLeft" class="icon"><p>&lArr;</p></button>
      </div>
      <div class="cover">
        <div class="scroll-images">
          <div class="child" v-for="school in schools" :key="school.id">
            <img class="child-img" :src="school.url" />
          </div>
        </div>
      </div>
      <div>
        <button v-on:click="scrollRight" class="icon"><p>&rArr;</p></button>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  props: ["schools"],

  methods: {
    scrollLeft() {
      const left = document.querySelector(".scroll-images");
      left.scrollBy(-350, 0);
      console.log(this.schools);
    },
    scrollRight() {
      const right = document.querySelector(".scroll-images");
      right.scrollBy(100, 0);
    },
  },
};
</script>
<style scoped>
.main-scroll-div {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
}
.cover {
  position: relative;
  width: 80%;
  height: 50%;
}

.scroll-images {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: center;
  overflow: auto;
  position: relative;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.child {
  min-width: 350px;
  height: 150px;
  margin: 1px 10px;
  cursor: pointer;
  border: 1px solid white;
  overflow: hidden;
}
.scroll-images::-webkit-scrollbar {
  display: none;
}
.child-img {
  width: 100%;
  height: 100%;
}
.icon {
  color: rgb(90, 231, 90);
  background: transparent;
  font-size: 40px;
  outline: none;
  border: none;

  cursor: pointer;
}
.icon:hover {
  color: darkgreen;
}
</style>
