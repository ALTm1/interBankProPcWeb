import util from '@/libs/utils/index.js'

export default {
  namespaced: true,
  mutations: {
    /**
     * @description 显示版本信息
     * @param {Object} state vuex state
     */
    versionShow () {
      util.log.capsule('VxAdmin', `v${process.env.VUE_APP_VERSION}`)
    }
  }
}
