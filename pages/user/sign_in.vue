<template>
  <div class="container">
    <form @submit.prevent="handleSignIn()">
      <input type="text" v-model="state.form.email" />
      <input type="password" v-model="state.form.password" />
      <button type="submit">新規登録</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api"
// import { firestoreService } from "~/composables/firestoreService"
import { User } from "~/interfaces"
import axios from "~/plugins/axios"

export default defineComponent({
  setup() {
    const state: {
      form: {
        email: string
        password: string
      }
    } = reactive({
      form: {
        email: "",
        password: ""
      }
    })

    const handleSignIn = async () => {
      const res = await axios.post<{
        user: User
      }>("/api/v1/user/sign_in", {
        params: {
          data: state.form
        }
      })

      console.log(res)
    }

    return {
      handleSignIn,
      state
    }
  }
})
</script>
