import { GetterTree, ActionTree, MutationTree } from "vuex"

export const state = () => ({
  coupon: {
    document_id: "",
    email: ""
  },
  user: {
    isSigned: false,
    document_id: "",
    data: {}
  }
})

export type RootState = ReturnType<typeof state>

interface UserPayload {
  document_id: string
  data?: Record<string, unknown>
}

export const getters: GetterTree<RootState, RootState> = {
  isSigned: (state) => state.user.isSigned
}

export const mutations: MutationTree<RootState> = {
  setUser(state, payload: UserPayload) {
    state.user.document_id = payload.document_id
    if (payload.data) state.user.data = payload.data
  },

  signOut(state) {
    state.user = {
      isSigned: false,
      document_id: "",
      data: {}
    }
  },

  isSigned(state, isSigned: boolean) {
    state.user.isSigned = isSigned
  }
}

export const actions: ActionTree<RootState, RootState> = {
  setCouponInfo({ commit }, payload) {
    commit("setCouponInfo", payload)
  },
  setUser({ commit }, payload: UserPayload) {
    commit("setUser", payload)
  },
  signOut({ commit }) {
    commit("signOut")
  },
  setIsSigned({ commit }, isSigned: boolean) {
    commit("isSigned", isSigned)
  }
}
