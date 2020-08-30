<template>
  <div class="wrapper">
    <div class="wrapper__search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput" />
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          <p>{{ item.data[0].description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>

<style scoped lang="scss">
  .wrapper {
    margin: 0;
    padding: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__search {
      display: flex;
      flex-direction: column;
      width: 250px;

      label {
        font-family: Montserrot, sans-serif;
      }

      input {
        height: 30px;
        border: 0;
        border-bottom: 1px solid black;
      }
    }
  }
</style>
