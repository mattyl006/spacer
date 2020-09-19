<template>
  <div :style="style" class="item"></div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title,
    };
  },
  computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 40vw;
  height: 30vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  transition: transform 0.25s ease-in-out;

  &:hover {
    transform: scale(1.08);
  }

  @media (min-width: 768px) {
    width: 25vw;
    height: 20vw;
  }
}
</style>
