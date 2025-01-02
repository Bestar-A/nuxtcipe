<script setup lang="ts">
defineProps<{
  label: string,
  id: number
}>()
</script>

<template>
  <NuxtLink 
    class="text-white bg-seaBuckthorn rounded-[5px]" 
    :to="`/recipes/${id}`"
  >
    {{ label }}
  </NuxtLink>
</template>