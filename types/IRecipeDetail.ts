import type { IRecipesOverview } from "./IRecipesOverview"

export interface IRecipeDetail {
    overview: IRecipesOverview,
    ingredients: string[],
    instructions: string[]
}