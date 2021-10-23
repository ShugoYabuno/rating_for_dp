import {
  InjectionKey,
  useContext,
  useStore,
  computed,
  useRoute,
  useAsync
} from "@nuxtjs/composition-api"
import axios from "../plugins/axios"
import { AxiosResponse } from "axios"

const userProviderKey = "userProvider"

interface UserSignIn {
  canSignIn: boolean
  message?: string
  user?: {
    document_id: string
  }
}

export const userProvider = () => {
  const context = useContext()
  const store = useStore()
  const route = useRoute()

  const _sign = async (_userId: string) => {
    await store.dispatch("setUser", {
      document_id: _userId
    })
    _updateIsSigned()
  }

  const _updateIsSigned = async () => {
    await axios.post("/api/v1/user/auth")

    const isSigned =
      context.$cookies.get("accessToken").length >= 1 &&
      store.getters.userId.length >= 1
    store.dispatch("setIsSigned", isSigned)
  }

  const get = async () => {
    return await axios.get<{
      message: string
      user: {
        id: string
        name: string
        rating: number
      }
    }>("/api/v1/user")
  }

  const update = async (_data: Record<string, unknown>) => {
    return await axios.post<{
      message: string
    }>("/api/v1/user/update", {
      params: {
        data: _data
      }
    })
  }

  const signIn = async (_email: string, _password: string) => {
    const resSignIn = await axios.post<UserSignIn>("/api/v1/user/sign_in", {
      params: {
        email: _email,
        password: _password
      }
    })

    if (!resSignIn || resSignIn.status !== 200) {
      // toast?.showErrorToasted("ログイン処理でエラーが発生しました")
      return resSignIn
    }
    if (!resSignIn.data.canSignIn || !resSignIn.data.user?.document_id) {
      // toast?.showErrorToasted(resSignIn.data.message || "エラーが発生しました")
      return resSignIn
    }
    await _sign(resSignIn.data.user?.document_id)

    return resSignIn
  }

  const signUp = async (
    _email: string,
    _password: string,
    _data: Record<string, unknown> = {}
  ) => {
    const resSignUp = await axios.post<{
      message: string
      user: {
        document_id: string
      }
    }>("/api/v1/user/sign_up", {
      params: {
        email: _email,
        password: _password,
        data: _data
      }
    })

    await _sign(resSignUp.data.user?.document_id)

    return resSignUp
  }

  const signOut = () => {
    store.dispatch("signOut")
    axios.post("/api/v1/user/sign_out")
  }

  const resetPasswordEmail = (_email: string) => {
    return axios.post<{
      hasSent: boolean
      status: "success" | "error"
      message?: string
    }>("/api/v1/user/reset_password", {
      params: {
        email: _email
      }
    })
  }

  const compareToken = () => {
    const email = route.value.query.email as string
    const token = route.value.query.token as string
    if (!email || !token) context.redirect(301, "/")

    useAsync(async () => {
      const resApi = await axios.post<{
        isCorrect: boolean
        status: "success" | "error"
        message?: string
      }>("/api/v1/user/compare_token", {
        params: {
          email,
          token
        }
      })
      if (!resApi?.data?.isCorrect) {
        context.redirect(301, "/")
      }
    })
  }

  const updatePassword = async (_email: string, _password: string) => {
    return await axios.post<{
      hasUpdated: boolean
      message?: string
    }>("/api/v1/user/update_password", {
      params: {
        email: _email,
        password: _password
      }
    })
  }

  const isSigned = (): boolean => {
    return store.getters.isSigned || false
  }

  return {
    get,
    signIn,
    signUp,
    update,
    isSigned,
    signOut,
    resetPasswordEmail,
    compareToken,
    updatePassword
  }
}
type UserProviderType = ReturnType<typeof userProvider>
export const UserProviderKey: InjectionKey<UserProviderType> =
  Symbol(userProviderKey)
