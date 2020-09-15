<template>
  <div class="outer-wrapper">
    <div class="inner-wrapper">
      <img class="inner-wrapper__photo">
      <div class="inner-wrapper__description">
        <h2 class="inner-wrapper__title">Title</h2>
        <p class="inner-wrapper__description">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
    </div>
    <div class="outer-wrapper__close" @click="$emit('close-modal')"></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
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

  &__photo {
    width: 100%;
    height: auto;
  }

  &__description {
    color: #333;
  }
}
</style>
