import { inject, provide } from "@nuxtjs/composition-api"
import { userProvider, UserProviderKey } from "./user"

export const defineUserProvider = () => {
  return provide(UserProviderKey, userProvider())
}

export const useUserProvider = () => {
  return {
    userProvider: inject(UserProviderKey)
  }
}
