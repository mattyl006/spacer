<template>
    <div class="search">
      <label class="search__label" for="search">Type anything space-related to start.</label>
      <input class="search__input" id="search" name="search"
       v-model="searchValue" @input="handleInput" />
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex-direction: column;

    &__label {
        margin: 0;
        margin-bottom: 32px;
        font-size: 12px;
        font-weight: 400;
        text-align: center;

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
        background: none;

        @media (min-width: 768px) {
            font-size: 14px;
        }

        @media (min-width: 1024px) {
            font-size: 16px;
        }
    }
}
</style>
