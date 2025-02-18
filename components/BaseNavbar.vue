<template>
    <header class="border-b border-[#E5E7EB]">
    <BaseContainer>
        <nav class="py-3.5 flex justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <NuxtImg format="webp" src="/icon-nuxt.svg" densities="x1" alt="Nuxt Logo" />
                <p class="text-3xl max-sm:hidden">
                    Nuxtcipes
                </p>
            </NuxtLink>
            <NuxtLink to="/" class="py-4 text-xl">
                Home
            </NuxtLink>
        </nav>
    </BaseContainer>
    </header>
</template>