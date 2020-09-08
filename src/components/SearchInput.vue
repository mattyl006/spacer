<template>
  <div class="search">
    <label class="search__label" for="search">Type anything space-related to start.</label>
    <input class="search__input" id="search" name="search" type="text"
    :value="value" @input="updateValue"/>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(e) {
      this.$emit('input', e.target.value);
    },
  },
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
