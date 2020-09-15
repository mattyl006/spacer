<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <img class="inner-wrapper__photo" :src="photo">
      <div class="inner-wrapper__description">
        <h2 class="inner-wrapper__title">{{ title }}</h2>
        <p class="inner-wrapper__description">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="outer-wrapper__close" @click="$emit('close-modal')"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: null,
      title: null,
      description: null,
    };
  },
  mounted() {
    this.photo = this.item.links[0].href;
    this.title = this.item.data[0].title;
    this.description = this.item.data[0].description.substring(0, 250);
  },
};
</script>

<style scoped lang="scss">

.outer-wrapper {
  background-color: #f6f6f6;
  max-width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    max-width: 70%;
    height: 60%;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 30px 30px -10px rgba(0, 0, 0, 0.3);
  }

  &__close {
    position: absolute;
    width: 30px;
    height: 30px;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before, &::after {
      position: absolute;
      content: '';
      top: 30px;
      right: 20px;
      width: 20px;
      height: 2px;
      background-color: black;
      display: block;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
}

.inner-wrapper {
  display: flex;
  height: 100%;
  padding: 48px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    &__photo {
      min-width: 50%;
      margin-right: 20px;
    }
  }

  &__photo {
    width: 100%;
    height: auto;
  }

  &__description {
    color: #333;
  }
}
</style>
