1<script setup lang="ts">
defineProps<{  
  image: string,
  name: string,
  cookTimeMinutes: number,
  rating: number,
  caloriesPerServing: number,
  reviewCount: number,
  ingredients: string[],
  instructions: string[]
}>()

const activeIngredients = ref(new Set<string>())

const toggleIngredient = (ingredient: string) => {
  if (activeIngredients.value.has(ingredient)) {
    activeIngredients.value.delete(ingredient)
  } else {
    activeIngredients.value.add(ingredient)
  }
}

const isActive = (ingredient: string) => activeIngredients.value.has(ingredient)
</script>

<template>
      <div class="max-w-[1045px] mx-auto mt-20 mb-20 px-12 max-sm:px-6">
        <p class="text-5xl max-xl:text-4xl">{{ name }}</p>
        <div class="flex gap-8 my-5">
          <p class="flex gap-1 text-xl">
            <img src="/clock.svg">
            {{ cookTimeMinutes }}
          </p>
          <p class="flex gap-1 text-xl">
            <img src="/fire.svg">
            {{ caloriesPerServing }}
          </p>
          <p class="flex gap-1 text-xl">
            <img src="/star.svg">
            {{ rating }}<span class="ml-0.5">({{ reviewCount }})</span>
          </p>
        </div>
        <hr class="border-t border-[#E5E7EB] mb-6">
        <div 
          class="bg-center bg-no-repeat bg-cover rounded-md h-[495px] w-full" 
          :style="{ backgroundImage: `url('${image}')` }"
        ></div>
        <h2 class="text-3xl mt-14 mb-3">Ingredients</h2>
        <div class="grid grid-cols-2 w-fit gap-x-5 max-sm:grid-cols-1">
          <div v-for="ingredient in ingredients" :key="ingredient" class="flex items-center space-x-2 mb-2 text-sm">
            <span
              @click="toggleIngredient(ingredient)"
              class="min-w-6 h-6 rounded-full border border-seaBuckthorn flex items-center justify-center cursor-pointer"
            >
              <span v-if="isActive(ingredient)" class="bg-seaBuckthorn rounded-full w-4 h-4"></span>
            </span>
          <label
            :class="`text-lg cursor-pointer ${isActive(ingredient) ? 'line-through' : ''}`"
            @click="toggleIngredient(ingredient)"
          >
          {{ ingredient }}
          </label>
        </div>
       </div>
        <h3 class="text-3xl mt-8 mb-3">Instructions</h3>
        <div v-for="(instruction, index) in instructions" :key="index" class="mb-3 flex items-center">
          <div
            class="min-w-7 h-7 rounded-full bg-seaBuckthorn text-white flex items-center justify-center text-[14px] font-thin mr-2"
          >
          {{ index + 1 }}
          </div>
          <span class="text-lg">{{ instruction }}</span>
        </div>
      </div>
</template>