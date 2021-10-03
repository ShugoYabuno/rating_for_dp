<template>
  <div class="container">
    <form @submit.prevent="handleSignUp()">
      <input type="text" v-model="state.form.name" />
      <input type="text" v-model="state.form.email" />
      <input type="password" v-model="state.form.password" />
      <button type="submit">新規登録</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api"
// import { firestoreService } from "~/composables/firestoreService"
// import { User } from "~/interfaces"
// import axios from "~/plugins/axios"
import { useUserProvider } from "~/state"

export default defineComponent({
  setup() {
    const state: {
      form: {
        name: string
        email: string
        password: string
      }
    } = reactive({
      form: {
        name: "",
        email: "",
        password: ""
      }
    })
    const { userProvider } = useUserProvider()

    const handleSignUp = async () => {
      const res = await userProvider?.signUp(
        state.form.email,
        state.form.password,
        {
          name: state.form.name
        }
      )

      console.log(res)
    }

    return {
      handleSignUp,
      state
    }
  }
})
</script>
