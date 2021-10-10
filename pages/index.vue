<template>
  <div class="container">
    <div>
      <p>{{ test }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const test = "test"

    return {
      test
    }
  }
})
</script>
