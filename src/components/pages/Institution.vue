<template>
  <main>
    <nav-holder></nav-holder>
    <section>
      <select name="filters" class="filters">
        <option value="" disabled selected hidden>Filters</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
      </select>

      <div class="search-container">
        <select name="filters" class="search-filters">
          <option value="" disabled selected hidden>level</option>
          <option value="100">100 level</option>
          <option value="200">200 level</option>
          <option value="300">300 level</option>
          <option value="400">400 level</option>
          <option value="500">500 level</option>
        </select>
        <input
          id="school"
          class="search-bar"
          type="text"
          placeholder="search for a school"
        />
        <button class="green">search &#9906;</button>
      </div>

      <!-- <div class="options">
        <div class="options-box" v-for="school in schools" :key="school.id">
          <img :src="school.url" />
        </div>
      </div> -->
      <owl-slider :schools="schools"></owl-slider>

      <h3>Search Results</h3>

      <div class="search-results">
        <div
          class="search-results-box"
          v-for="school in schools"
          :key="school.id"
        >
          <img :src="school.url" />
        </div>
      </div>
      <button class="grn">More</button>
    </section>
  </main>
</template>
<script>
import OwlSlider from "../ui/owl-slider.vue";
export default {
  components: { OwlSlider },
  created() {
    this.loadSchools();
    console.log(this.$store.getters["Schools/schools"]);
  },
  computed: {
    schools() {
      return this.$store.getters["Schools/schools"];
    },
  },
  methods: {
    async loadSchools() {
      try {
        await this.$store.dispatch("Schools/getSchools");
      } catch (error) {
        //test
      }
    },
  },
};
</script>
<style scoped>
section {
  margin-top: 90px;
}
.filters {
  background: transparent;
  border-style: none;
  border: 1px solid rgb(90, 231, 90);
  padding: 7px 14px;
  float: right;
  margin-bottom: 28px;
}
.search-filters {
  background: transparent;
  border-style: none;
  padding: 7px 5px;
}
.green {
  padding: 5px 24px;
  border-style: none;
  background: rgb(90, 231, 90);
  font-weight: bold;
  color: white;
}
.search-container {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 45px;
}
h3 {
  float: left;
}
input {
  border-style: none;
  border-left: 1px solid black;
  width: 90%;
  padding-left: 30px;
}

.options {
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  overflow-x: auto;
}
.options-box {
  background: white;
  max-width: 100%;
  height: 150px;
  margin-top: 10px;
  border-radius: 10px;
  margin-left: 20px;
}

img {
  width: inherit;
  height: inherit;
}
.search-results {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 35px;
}
.search-results-box {
  background: #dddd;
  width: 100%;
  height: 150px;
  margin-top: 10px;
  border-radius: 10px;
}
.grn {
  float: right;
  background: rgb(90, 231, 90);
  border-style: none;
  padding: 10px 34px;
  color: white;
}
@media (max-width: 1090px) {
  .search-results {
    display: flex;
    flex-direction: column;
  }
}
</style>
