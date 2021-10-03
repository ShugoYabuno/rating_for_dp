<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">rating_for_dp</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <button @click="test()">テスト</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import firestoreService from "~/composables/firestoreService"

export default defineComponent({
  setup() {
    const test = () => {
      firestoreService.add("tests", {
        name: "test"
      })
    }

    return {
      test
    }
  }
})
</script>
