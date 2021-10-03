<template>
  <div class="container">
    <div>
      <button @click="matchStart()">テスト</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter } from "@nuxtjs/composition-api"
import { firestoreService } from "~/composables/firestoreService"
import { Match } from "~/interfaces"
// import axios from "~/plugins/axios"

export default defineComponent({
  setup() {
    const router = useRouter()

    const matchStart = async () => {
      const resMatchs = await firestoreService.add<Match>("matchs", {
        userId1: "aaa",
        userId2: "",
        status: "waiting"
      })
      if (resMatchs.status !== 200) return

      router.push(`/match/${resMatchs.data.document_id}`)
    }

    return {
      matchStart
    }
  }
})
</script>
