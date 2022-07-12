export default {
  async getAll ({ commit }) {
    const slider = await this.$axios.$get('https://62cb5f253e924a01286661e0.mockapi.io/api/v1/slider')
    commit('all', slider)
  }
}
