<template>
  <div class="slider">
    <transition-group name="fade" tag="div">
      <div key="id" class="img-container">
        <img :src="currentImg">
      </div>
      <!-- <div v-for="i in [currentIndex]" :key="i" class="img-container">
        <img :src="currentImg">
      </div> -->
    </transition-group>
    <a class="prev" @click="prev">&#10094; Previous</a>
    <a class="next" @click="next">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    dataSource: {
      type: Array,
      default () {
        return []
      },
      required: false
    }
  },
  data () {
    return {
      timer: null,
      currentIndex: 0
    }
  },

  computed: {
    currentImg () {
      return this.dataSource[Math.abs(this.currentIndex) % this.dataSource.length].image
    }
  },
  mounted () {
    this.startSlide()
  },

  methods: {
    startSlide () {
      this.timer = setInterval(this.next, 3000)
    },

    next () {
      this.currentIndex += 1
    },
    prev () {
      this.currentIndex -= 1
    }
  }
}
</script>

<style scoped>

.slider {
    height: 400px;
    width: 100%;
    margin: auto;
}

.img-container {
    height: 400px;
    max-width: 100%;
    position: relative;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    height: 400px;
    width: 100%;
    opacity: 1;
}

.fade-enter,
.fade-leave-to {
    visibility: hidden;
    width: 100%;
    opacity: 0;
}

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    overflow-y: hidden;
    max-width: 100%;
}

.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 17rem;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}

.next {
    right: 0;
}

.prev {
    left: 0;
}

.prev:hover,
.next:hover {
    background-color: rgba(0, 0, 0, 0.9);
}
</style>
