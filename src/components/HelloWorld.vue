<script setup lang="ts">
import { ref } from 'vue'

const aa = 'WWWWWWWWW'
defineProps <{
  msg: string
  a: number
  }>()
//
// const props = defineProps({
//   msg: {
//     type: String,
//     default: ''
//   },
//   a: {
//     type: Number,
//     default: 22
//   }
// })

const count = ref(0)

// const emit = defineEmits(['output'])
defineEmits<{(e:'con', id:void):void}>()

const con = () => {
  console.log('count:', count.value)
}

</script>

<template>
  <h1>{{ msg }}</h1>

  <h2 @click="con"> {{aa}} </h2>
  <h3 > {{a}} </h3>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
