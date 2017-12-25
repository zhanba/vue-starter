import Vue from 'vue'
import Vuex from 'vuex'
/* import * as actions from './actions'
import * as getters from './getters'

import common from './modules/common'
import index from './modules/index'
import serve from './modules/serve'
import user from './modules/user'
import personal from './modules/personal'
import promotion from './modules/promotion' */

Vue.use(Vuex)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  /* actions,
  getters,
  modules: {
    common,
    index,
    serve,
    user,
    personal,
    promotion
  }, */
  strict: debug
})
