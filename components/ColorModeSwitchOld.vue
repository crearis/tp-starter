<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'theaterpedia' ? (colorMode.preference = 'light') : (colorMode.preference = 'theaterpedia'))
</script>

<template>
  <button aria-label="Color Mode" class="inline-block w-5" @click="onClick">
    <ColorScheme placeholder="...">
      <Icon v-if="colorMode.value === 'light'" name="heroicons-outline:moon" class="w-5 h-5" />
      <Icon v-else name="heroicons-outline:sun" class="w-5 h-5" />
    </ColorScheme>
  </button>
</template>
