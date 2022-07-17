<template>
  <div>
    <font-awesome-icon v-for="i in 5" :key="i" :icon="['fas', 'star']" :class="{ checked: i <= rating }" />
  </div>
</template>

<script>
export default {
  name: 'StarRating',
  props: {
    rating: {
      type: Number,
      default: 0,
      required: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.checked {
  color: orange;
}
</style>
