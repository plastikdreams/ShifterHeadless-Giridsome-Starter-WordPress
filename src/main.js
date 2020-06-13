import DefaultLayout from '~/layouts/Default.vue'

// export default function (Vue) {
//   Vue.component('Layout', DefaultLayout)
// }
export default function (Vue, { router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    // href: 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css'
	href: 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css'
  })
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
