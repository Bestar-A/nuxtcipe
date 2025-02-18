<template>
    <div class="bg-athensGray max-xl:flex max-xl:justify-center">
        <BaseContainer class="flex py-20 items-center justify-between max-xl:flex-col-reverse">
            <div>
                <h1 class="text-6xl max-w-[680px] max-xl:pt-20 max-xl:text-center max-xl:max-w-[620px] max-xl:text-4xl leading-[4.65rem]">
                    Master the Kitchen with Ease: Unleash Your Inner Chef Today!
                </h1>
                <p class="text-2xl max-w-[370px] my-4 mb-8 max-xl:text-center max-xl:max-w-[900px] max-xl:text-xl">
                    Discover recipes helping you to find the easiest way to cook.
                </p>
                <BaseButton class="text-lg max-xl:flex max-xl:justify-self-center px-4 py-2" label="Browse Recipes" :id="1" />
            </div>
            <NuxtImg width="660" src="/ImageHero.svg" format="webp" alt="image of the Hero" densities="x1" />
        </BaseContainer>
    </div>
</template>