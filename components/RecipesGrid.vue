<script setup lang="ts">
import type { IRecipeDetail } from '~/types/IRecipeDetail'

interface IRecipesApiResponse {
  recipes: IRecipeDetail[]
}

const { data } = useFetch<IRecipesApiResponse>(() => 'https://dummyjson.com/recipes?limit=12')
</script>

<template>
    <BaseContainer>
        <h2 class="text-5xl mb-3 mt-24 ml-2 max-xl:text-3xl max-xl:ml-0">
            Discover, Create, Share
        </h2>
        <p class="text-xl mb-[100px] ml-2 max-xl:mb-8 max-xl:ml-0">Check out our most popular recipes!</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-fit gap-x-4 gap-y-8 mb-10">
            <div
                v-if="data"
                v-for="recipe in data.recipes" 
                :key="recipe.name"
                class="bg-white rounded-xl drop-shadow-md"
            >
                <RecipesGridItem 
                    :id="recipe.id"
                    :image="recipe.image" 
                    :name="recipe.name" 
                    :cookTimeMinutes="recipe.cookTimeMinutes" 
                    :caloriesPerServing="recipe.caloriesPerServing"
                    :rating="recipe.rating" 
                    :reviewCount="recipe.reviewCount" 
                />
            </div>
        </div>
    </BaseContainer>
</template>