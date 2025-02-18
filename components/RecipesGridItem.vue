<script setup lang="ts">
defineProps<{
  id: number,  
  image: string,
  name: string,
  cookTimeMinutes: number,
  rating: number,
  caloriesPerServing: number,
  reviewCount: number
}>()
</script>

<template>
    <NuxtImg 
        :src="image" 
        :alt="name"
        densities="x1"
        width="480"
        class="rounded-t-lg" 
    />
    <div class="py-6 px-4">
        <p class="text-2xl max-sm:text-[19px]">{{ name }}</p>
        <div class="flex gap-8 mt-1 mb-5">
            <p class="flex gap-1 text-xl">
                <img src="/clock.svg" alt="image of a clock">
                {{ cookTimeMinutes }}
            </p>
            <p class="flex gap-1 text-xl">
                <img src="/fire.svg"  alt="image of a fire">
                {{ caloriesPerServing }}
            </p>
            <p class="flex gap-1 text-xl">
                <img src="/star.svg"  alt="image of a star">
                {{ rating }}<span>({{ reviewCount }})</span>
            </p>
        </div>
        <BaseButton 
            label="View" 
            class="px-4 py-1.5 font-semibold font-sans text-lg" 
            :id="id" 
        />
    </div>
</template>