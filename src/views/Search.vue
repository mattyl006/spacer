<template>
  <div class="wrapper">
    <div class="wrapper__search">
      <label for="search">Search</label>
      <input id="search" name="search" v-model="searchValue" @input="handleInput" />
      <ul>
        <li v-for="item in results" :key="item.id">
          <p>{{ item.largeImageURL }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://pixabay.com/api/?key=18106414-1107bb6e032c28774d4b9314f&';

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
      axios.get(`${API}q=${this.searchValue}&image_type=photo`)
        .then((response) => {
          this.results = response.data.hits;
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
