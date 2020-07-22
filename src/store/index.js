import Vue from 'vue'
import Vuex from 'vuex'

import vxadmin from './modules/vxadmin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vxadmin
  }
})
