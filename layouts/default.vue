<template>
  <div>
    <div class="topnav" :class="{responsive: isActive}">
      <a href="/" class="active">Home</a>
      <a href="/products">Products</a>
      <a href="/about">About</a>
      <a href="javascript:void(0);" class="icon" @click="openNav">
        <font-awesome-icon :icon="['far', 'circle']" />
      </a>
    </div>
    <div class="wrapper">
      <Nuxt keep-alive />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultPage',
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
