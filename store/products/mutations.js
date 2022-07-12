export default {
  add (state, name) {
    state.products.push({
      name,
      done: false
    })
  },
  remove (state, { product }) {
    state.products.splice(state.products.indexOf(product), 1)
  },
  toggle (state, product) {
    product.done = !product.done
  },
  all (state, payload) {
    state.products = payload
  }
}
