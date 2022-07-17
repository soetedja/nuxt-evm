export default {
  async getAll ({ commit }) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?page=1&limit=8')
    commit('all', products)
  },
  async getTopSellerProducts ({ commit }, payload) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?limit=8&page=' + payload)
    commit('topSellerProducts', products)
  },
  async getNewArrivalProducts ({ commit }, payload) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?limit=8&orderBy=price&page=' + payload)
    commit('newArrivalProducts', products)
  },
  async getProductDetails ({ commit }, payload) {
    const product = await this.$axios.get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products/' + payload.id)
    commit('productDetails', product.data)
  }
}
