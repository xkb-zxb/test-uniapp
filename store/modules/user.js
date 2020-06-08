export default {
  state: {
    userInfo: null,
    token: null
  },
  getters: {
    userInfo: state => state.userInfo,
    token: state => state.token,
    // 当userinfo 和 token 都存在时 即认定已经登录.
    hasSignin: state => !!(state.userInfo && state.token)
  },
  mutations: {
    SET_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_TOKEN(state, token) {
      state.token = token
    },
    CLEAR_SIGNIN_STATUS(state) {
      state.userInfo = null
      state.token = null
    }
  },
  actions: {
    signOut({
      commit
    }) {
      return new Promise(async (resolve, reject) => {
        // 处理退出逻辑
        commit('CLEAR_SIGNIN_STATUS')
        resolve()
      })
    },
  }
}