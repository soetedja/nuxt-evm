<template>
  <div>
    <div class="container">
      <ShowcaseProducts
        :data-source="topSellerProducts.items"
        :title="'Top Sellers'"
        :page="topSellersPage"
        :total-page="5"
        @set-page="getTopSellerProducts"
      />
      <ShowcaseProducts
        :data-source="newArrivalProducts.items"
        :title="'New Arrivals'"
        :page="newArrivalsPage"
        :total-page="4"
        @set-page="getNewArrivalProducts"
      />
    </div>
  </div>
</template>

<script>
import ShowcaseProducts from '~/components/products/ShowcaseProducts.vue'
export default {
  name: 'IndexProducts',
  components: { ShowcaseProducts },
  data () {
    return {
      topSellersPage: 1,
      newArrivalsPage: 1
    }
  },
  async fetch () {
    await this.getTopSellerProducts(1)
    await this.getNewArrivalProducts(1)
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
    async getTopSellerProducts (page) {
      this.topSellersPage = page
      await this.$store.dispatch('products/getTopSellerProducts', page)
    },
    async getNewArrivalProducts (page) {
      this.newArrivalsPage = page
      await this.$store.dispatch('products/getNewArrivalProducts', page)
    },
    async getSlider () {
      await this.$store.dispatch('slider/getAll')
    }
  }
}
</script>
