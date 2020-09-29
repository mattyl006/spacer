<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <img class="inner-wrapper__photo" :src="photo">
      <div class="inner-wrapper__content">
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
    this.description = this.item.data[0].description;
  },
};
</script>

<style scoped lang="scss">

.outer-wrapper {
  background-color: #f6f6f6;
  height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  }

  &__photo {
    height: 100%;
    border: 1px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 1024px) {
      width: 100%;
      margin-bottom: 32px;
    }
    @media (min-width: 1024px) {
      width: 80%;
      margin-right: 20px;
    }
  }

  &__content {
    overflow: scroll;
    max-height: 70%;
  }

  &__title {
    color: #1e3d4a;
  }

  &__description {
    color: #1e3d4a;
  }
}
</style>
