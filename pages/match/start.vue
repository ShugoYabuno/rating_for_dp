<template>
  <div class="container">
    <div>
      <button @click="matchStart()">対戦開始</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from "@nuxtjs/composition-api"
import { firestoreService } from "~/composables/firestoreService"
import { RatingMatchWaiting } from "~/interfaces"
import { useUserProvider } from "~/state"

export default defineComponent({
  setup() {
    const router = useRouter()
    const { userProvider } = useUserProvider()

    const matchStart = async () => {
      const resUsers = await userProvider?.get()
      if (resUsers?.status !== 200) return

      const user = resUsers.data.user
      const resMatchs = await firestoreService.add<RatingMatchWaiting>(
        "ratingMatchWaitings",
        {
          userId: user.id,
          rating: user.rating,
          status: "waiting"
        }
      )
      if (resMatchs.status !== 200) return

      router.push(`/match/waiting`)
    }

    return {
      matchStart
    }
  }
})
</script>
