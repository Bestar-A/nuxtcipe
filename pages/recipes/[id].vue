<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { IRecipeDetail } from '~/types/IRecipeDetail'

definePageMeta({
  layout: 'landing'
})

const route = useRoute()
const recipeId = route.params.id as string

const { data } = useFetch<IRecipeDetail>(`https://dummyjson.com/recipes/${recipeId}`)
</script>


<template>
  <RecipeDetails
  v-if="data"
  :name="data?.name"
  :cookTimeMinutes="data?.cookTimeMinutes"
  :caloriesPerServing="data?.caloriesPerServing"
  :rating="data?.rating"
  :reviewCount="data?.reviewCount"
  :image="data?.image"
  :ingredients="data?.ingredients"
  :instructions="data?.instructions"
  />
</template>