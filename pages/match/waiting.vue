<template>
  <div class="container">
    <div>
      <p>{{ test }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
// import { firestoreService } from "~/composables/firestoreService"
// import { Test } from "~/interfaces"
// import axios from "~/plugins/axios"

export default defineComponent({
  setup() {
    const test = "test"

    return {
      test
    }
  }
})
</script>
