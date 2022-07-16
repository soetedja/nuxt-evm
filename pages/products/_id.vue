<template>
  <div>
    <div class="container">
      <div class="col four">
        <div class="product-img">
          <img class="u-max-full-width" :src="productDetails.image" alt="">
        </div>
      </div>
      <div class="col five pl-10">
        <div class="product-details">
          <div class="row">
            <div class="title">
              <span>
                {{ productDetails.name }}
              </span>
            </div>
          </div>
          <div class="row">
            <div class="product-description">
              {{ productDetails.description }}
            </div>
          </div>
          <div class="row">
            <p class="price">
              Price:
              <span class="normal">${{ productDetails.price }}</span>
              <span class="discount">${{ productDetails.discount }}</span>
            </p>
            <button class="button-primary">
              BUY
            </button>
            <button class="button-secondary">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div class="col three">
        <div class="product-variations">
          <span class="title">Variations</span>
          <div class="row">
            <div
              v-for="variant in productDetails.variations"
              :key="variant.id"
              class="box-variant"
              :data="variant"
              :style="{ 'background-color': variant.color }"
              @click="selectVariant(variant)"
            />
          </div>
          <div class="row">
            {{ productDetails.variantDescription }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  async fetch () {
    await this.getProductDetails()
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
    productDetails () {
      return this.$store.state.products.productDetails
    }
  },
  methods: {
    async getProductDetails () {
      await this.$store.dispatch('products/getProductDetails', { id: this.$route.params.id })
    },
    selectVariant (variant) {
      this.$store.commit('products/selectVariant', variant)
    }
  }
}
</script>

<style lang="scss">

.product-img {
  margin-top: 20px;
}

.title {
  margin: 10px 0 ;
    font-weight: 800;
    font-size: 2.28571rem;
    word-break: break-word;
}

p.price {
  margin-top: 1em;
  margin-bottom: 2em;
}

.product-details {
  margin: 0 30px;
}

.product-variations {
  margin: 10px 30px;
  .title{
    font-weight: bold;
    font-size: 2rem;
  }
}
span.normal {
  text-decoration: line-through;
  color: gray
}

span.discount {
  font-size: 2.5rem;
  font-weight: bold;
}

.box-variant {
  float: left;
  height: 20px;
  width: 20px;
  margin: 3px;
  border: 1px solid black;
  cursor: pointer;
}
</style>
