<template>
  <div id="app">
    <div :class="[{ flexStart: step === 1 }, 'wrapper']">
      <transition name="slide">
        <img src="./assets/logo.svg" class="logo" v-if="step === 1"
             alt="spacer subtitle with blue-green sign up to them">
      </transition>
      <transition name="fade">
        <HeroImage v-if="step === 0" />
      </transition>
      <Claim v-if="step === 0" />
      <div class="search">
        <label class="search__label" for="search" v-if="step === 0">
          Type anything space-related to start.</label>
        <input class="search__input" id="search" name="search"
        v-model="searchValue" @input="handleInput" :class="{ dark: step === 1 }"/>
      </div>
      <div class="results" v-if="results && !loading && step === 1">
        <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import HeroImage from '@/components/HeroImage.vue';
import Claim from '@/components/Claim.vue';
import Item from '@/components/Item.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'App',
  components: {
    HeroImage,
    Claim,
    Item,
  },
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function () {
      this.loading = true;
      console.log(this.searchValue);
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: margin-top .3s ease;
}

.slide-enter, .slide-leave-to {
  margin-top: -16px;
}

.wrapper {
  position: relative;
  margin: 0;
  padding: 32px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.flexStart {
    justify-content: flex-start;
  }
}

.logo {
  position: relative;
  top: 16px;
  margin-bottom: 36px;
}

.search {
    display: flex;
    flex-direction: column;

    &__label {
        margin: 0 0 32px 0;
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

.dark {
  color: #1e3d4a;
  border-bottom-color: #1e3d4a;
  &:focus {
    outline: transparent;
    box-shadow: 0 10px 20px -8px rgba(#1e3d4a, 0.5);
  }
}

.results {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
