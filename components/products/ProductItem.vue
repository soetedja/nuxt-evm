<template>
  <div class="product">
    <NuxtLink :to="{ name: 'products-id', params: { id: data.id } }">
      <div class="product-img">
        <img :src="data.image" alt="">
        <div v-if="data.isBestSeller" class="badge">
          <span>Best Seller</span>
        </div>
        <div class="sold">
          <span>{{ data.sold }} Sold</span>
        </div>
        <div class="stars">
          <StarRating :rating="data.rating % 5" />
        </div>
        <div class="overview">
          {{ data.description }}
        </div>
      </div>
    </NuxtLink>
    <div class="product-details">
      <NuxtLink :to="{ name: 'products-id', params: { id: data.id } }">
        <p class="title">
          {{ data.name }}
        </p>
      </NuxtLink>
      <p class="price">
        Price:
        <span class="normal">${{ data.price }}</span>
        <span class="discount">${{ data.discount }}</span>
      </p>
      <button class="button-primary">
        BUY
      </button>
      <button class="button-secondary">
        ADD TO CART
      </button>
    </div>
  </div>
</template>

<script>
import StarRating from './StarRating.vue'
export default {
  name: 'ProductItem',
  components: { StarRating },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      },
      required: false
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.product {
  position: relative;
  display: flex;
  flex-direction: column;

  .title {
    font-weight: bold;
    font-size: 1.8rem;
  }

  .product-img {
    position: relative;
    overflow: hidden;

    &:hover {
      .overview {
        transform: translateY(0);
      }
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .sold,
    .badge,
    .stars {
      font-weight: bold;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      height: 40px;
      color: #fff;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    }

    .sold {
      top: 0;
      right: 0;
      background-color: #02c96c;
      border-radius: 0 0 0 16px;
    }

    .badge {
      top: 0;
      left: 0;
      background-color: #b52700;
      border-radius: 0 0 16px 0;
    }

    .stars {
      bottom: 0.5rem;
      right: 1rem;
      padding: 0;
      height: 40px;
      color: rgb(255, 255, 255);
      box-shadow: none;
    }

    .overview {
      line-height: 1.5;
      position: absolute;
      bottom: 0;
      background-color: #5c8d9de6;
      padding: 12px;
      color: #fff;
      transform: translateY(100%);
      transition: all .3s ease;
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
}
</style>
