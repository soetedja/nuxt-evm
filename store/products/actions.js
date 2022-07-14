export default {
  async getAll ({ commit }) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?page=1&limit=8')
    commit('all', products)
  },
  async getTopSellerProducts ({ commit }) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?page=1&limit=8')
    commit('topSellerProducts', products)
  },
  async getNewArrivalProducts ({ commit }) {
    const products = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/products?page=1&limit=4')
    commit('newArrivalProducts', products)
  }
}
