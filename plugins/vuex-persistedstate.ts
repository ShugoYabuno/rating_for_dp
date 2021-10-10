import createPersistedState from "vuex-persistedstate"

/* eslint-disable */
export default ({ store }: { store: never }) => {
  createPersistedState({
    key: "GlobalState",
    paths: ["user"]
  })(store)
}
