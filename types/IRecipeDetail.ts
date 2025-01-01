export interface IRecipeDetail {
    id: number,
    image: string,
    name: string,
    cookTimeMinutes: number,
    caloriesPerServing: number,
    rating: number,
    reviewCount: number,
    ingredients: string[],
    instructions: string[]
}