<template>
  <div class="container">
    <div>
      <p>{{ matchId }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from "@nuxtjs/composition-api"
// import { firestoreService } from "~/composables/firestoreService"
// import { Test } from "~/interfaces"
// import axios from "~/plugins/axios"

export default defineComponent({
  setup() {
    const route = useRoute()

    const matchId = route.value.params.matchId

    return {
      matchId
    }
  }
})
</script>
