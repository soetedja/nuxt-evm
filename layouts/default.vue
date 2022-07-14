<template>
  <div>
    <div class="topnav" :class="{ responsive: isActive }">
      <div class="wrapper-nav">
        <div class="logo-container">
          <NuxtLogo />
        </div>
        <a href="/" class="active">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="javascript:void(0);" class="icon" @click="openNav">
          <font-awesome-icon :icon="['far', 'circle']" />
        </a>
      </div>
    </div>
    <div class="wrapper">
      <Nuxt keep-alive />
    </div>
    <DefaultFooter />
  </div>
</template>

<script>
import DefaultFooter from '../components/DefaultFooter.vue'
import NuxtLogo from '~/components/NuxtLogo.vue'

export default {
  name: 'DefaultPage',
  components: { NuxtLogo, DefaultFooter },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    openNav () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.wrapper-nav {
    position: relative;
    max-width: 1360px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto;

    &:after {
        content: "";
        display: table;
        clear: both;
    }
}
</style>
