<template>
  <div class="container">
    <div>
      <!-- <button @click="matchStart()">対戦開始</button> -->
      <div v-for="_match in matchesRef">
        <p>{{ _match.userId1 }}</p>
        <p>{{ _match.userId2 }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ssrRef } from "@nuxtjs/composition-api"
// import { firestoreService } from "~/composables/firestoreService"
// import { Match } from "~/interfaces"

export default defineComponent({
  setup() {
    const matchesRef = ssrRef([])

    // useAsync(async () => {
    //   const resMatches = await firestoreService.where(
    //     "matchs",
    //     "status",
    //     "waiting"
    //   )
    //   if (resMatches.status !== 200) return

    //   matchesRef.value = resMatches.data
    // })

    console.log(matchesRef.value)

    return {
      matchesRef
    }
  }
})
</script>
