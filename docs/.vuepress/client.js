import { defineClientConfig } from '@vuepress/client'
import Home from './components/Home.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Home', Home)
  },
}) 