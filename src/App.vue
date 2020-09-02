<template>
  <div id="app">
    <div class="wrapper">
      <HeroImage />
      <Claim />
      <div class="search">
        <label class="search__label" for="search">Type anything space-related to start.</label>
        <input class="search__input" id="search" name="search"
        v-model="searchValue" @input="handleInput"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'App',
  components: {
    HeroImage,
    Claim,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      console.log(this.searchValue);
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap');

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  color: #fff;
  line-height: 20px;
}

.wrapper {
  margin: 0;
  padding: 32px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search {
    display: flex;
    flex-direction: column;

    &__label {
        margin: 0;
        margin-bottom: 32px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
        letter-spacing: 1px;

        @media (min-width: 768px) {
            font-size: 14px;
        }

        @media (min-width: 1024px) {
            font-size: 16px;
        }
    }

    &__input {
        height: 30px;
        border: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: white;
        text-align: center;
        border-bottom: 2px solid white;
        letter-spacing: 2px;
        background: none;
        transition: box-shadow .3s ease-out;

        &:focus {
            outline: transparent;
            box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.5);
        }

        @media (min-width: 768px) {
            font-size: 14px;
        }

        @media (min-width: 1024px) {
            font-size: 16px;
            font-weight: 600;
        }
    }
}
</style>
