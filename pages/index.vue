<template>
  <div>
    <div class="row">
      <Slider :data-source="slider" />
    </div>
    <div class="container">
      <TopProducts :data-source="products" />
    </div>
  </div>
</template>

<script>
import TopProducts from '../components/TopProducts.vue'
export default {
  name: 'IndexPage',
  components: { TopProducts },
  async fetch () {
    await this.getProducts()
    await this.getSlider()
  },
  head () {
    return {
      title: 'Home - NuxtEVM',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'NuxtJS for EVM Test'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'nuxtjs, nuxt, evm, about'
        }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.products.products
    },
    slider () {
      return this.$store.state.slider.slider
    }
  },
  methods: {
    async getProducts () {
      await this.$store.dispatch('products/getAll')
    },
    async getSlider () {
      await this.$store.dispatch('slider/getAll')
    }
  }
}
</script>
