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
  },
  topSellerProducts (state, payload) {
    state.topSellerProducts = payload
  },
  newArrivalProducts (state, payload) {
    state.newArrivalProducts = payload
  },
  productDetails (state, payload) {
    state.productDetails = payload
  },
  selectVariant (state, payload) {
    state.productDetails.discount = payload.price
    state.productDetails.image = payload.image
    state.productDetails.variantDescription = payload.description
  }
}
