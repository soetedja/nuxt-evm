<template>
  <div>
    <div class="container">
      <div class="col four">
        <div class="product-img">
          <img class="u-max-full-width" :src="productDetails.image" alt="">
          <div v-if="productDetails.isBestSeller" class="badge">
            <span>Best Seller</span>
          </div>
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
          <div class="row  rating-container">
            <StarRating :rating="productDetails.rating % 5" class="rating" /> ({{ productDetails.rating % 5 }})
          </div>
          <div class="row">
            <span>Sold: </span> <span class="sold-number">{{ productDetails.sold }}</span>
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
import StarRating from '~/components/products/StarRating.vue'
export default {
  name: 'ProductDetails',
  components: { StarRating },
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

<style scoped lang="scss">

.product-img {
  margin-top: 20px;
  .badge {
      font-weight: bold;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      color: #fff;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
      top: 20px;
      left: 10px;
      background-color: #b52700;
      border-radius: 0 0 16px 0;
    }
}

.title {
  margin-top: 10px;
  font-weight: 800;
  font-size: 2.28571rem;
  word-break: break-word;
}

.rating-container {
  font-weight: bold;

  .rating {
    margin: 0 10px 0 0;
    float: left;
  }
}

.sold-number {
  font-weight: bold;
}

p.price {
  margin-top: 1em;
  margin-bottom: 2em;
}

.product-details {
  margin: 0 30px;
  .product-description {
    margin-top: 10px
  }
}

.product-variations {
  margin: 10px 30px;

  .title {
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
