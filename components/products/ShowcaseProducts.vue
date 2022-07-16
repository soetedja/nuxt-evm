<template>
  <div class="pt-10">
    <div class="row category-title">
      <h1> {{ title }} </h1>
    </div>
    <div class="top-products-grid">
      <ProductItem v-for="data in dataSource" :key="data.id" :data="data" />
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: 'ShowcaseProducts',
  components: { ProductItem },
  props: {
    title: {
      type: String,
      required: true
    },
    dataSource: {
      type: Array,
      default () {
        return []
      },
      required: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss">
.category-title {
    padding: 0;
}

.top-products-grid {
    display: grid;
    grid-column-gap: 32px;
    -moz-column-gap: 32px;
    column-gap: 32px;
    grid-row-gap: 64px;
    row-gap: 64px;
    grid-template-columns: 1fr;
}

/* Larger than phablet */
@media (min-width: 550px) {
    .top-products-grid {
        grid-template-columns: repeat(2,1fr);
    }
}

/* Larger than tablet */
@media (min-width: 750px) {
    .top-products-grid {
        grid-template-columns: repeat(3,1fr);
    }
}

/* Larger than desktop */
@media (min-width: 1000px) {
    .top-products-grid {
        grid-template-columns: repeat(4,1fr);
    }
}
</style>
