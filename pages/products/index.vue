<template>
  <div>
    <div class="container">
      <ShowcaseProducts :data-source="topSellerProducts" :title="'Top Sellers'" />
      <ShowcaseProducts :data-source="newArrivalProducts" :title="'New Arrivals'" />
    </div>
  </div>
</template>

<script>
import ShowcaseProducts from '~/components/products/ShowcaseProducts.vue'
export default {
  name: 'IndexProducts',
  components: { ShowcaseProducts },
  async fetch () {
    await this.getTopSellerProducts()
    await this.getNewArrivalProducts()
    await this.getSlider()
  },
  head () {
    return {
      title: 'Products - NuxtEVM',
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
    topSellerProducts () {
      return this.$store.state.products.topSellerProducts
    },
    newArrivalProducts () {
      return this.$store.state.products.newArrivalProducts
    },
    slider () {
      return this.$store.state.slider.slider
    }
  },
  methods: {
    async getTopSellerProducts () {
      await this.$store.dispatch('products/getTopSellerProducts')
    },
    async getNewArrivalProducts () {
      await this.$store.dispatch('products/getNewArrivalProducts')
    },
    async getSlider () {
      await this.$store.dispatch('slider/getAll')
    }
  }
}
</script>
