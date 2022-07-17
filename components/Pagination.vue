<template>
  <div class="row">
    <div class="pagination">
      <a href="">&laquo;</a>
      <a v-for="i in totalPage" :key="i" :class="{ active: i == page }" @click="setPage(i)">{{ i }} </a>
      <a href="">&raquo;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    totalPage: {
      type: Number,
      required: true
    }
  },
  methods: {
    setPage (page) {
      this.$emit('set-page', page)
    }
  }
}

</script>

<style lang="scss">
.pagination {
    margin-top: 20px;
    float: right;

    a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
    }

    a.active {
        background-color: #0f5185;
        color: white;
    }

    a:hover:not(.active) {
        background-color: #ddd;
    }
}
</style>
