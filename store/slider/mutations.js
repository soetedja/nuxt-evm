export default {
  add (state, name) {
    state.slider.push({
      name,
      done: false
    })
  },
  remove (state, { slider }) {
    state.slider.splice(state.slider.indexOf(slider), 1)
  },
  toggle (state, slider) {
    slider.done = !slider.done
  },
  all (state, payload) {
    state.slider = payload
  }
}
