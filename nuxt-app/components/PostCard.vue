<script setup lang="ts">
import type { Post } from '~/types';
defineProps<Post>();
</script>

<template>
    <NuxtLink :to="`/posts/${id}`" class="p-6 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors block">
        <article>
            <h2 class="font-semibold text-lg">{{ title }}</h2>
            <p class="text-sm text-gray-600">User ID: {{ userId }}</p>
            <p>{{ body.slice(0, 100) }}...</p>
            <div class="flex flex-col gap-4 md:flex-row items-center justify-between py-3 text-sm text-gray-600">
                <div class="flex gap-2">
                    <span v-for="tag in tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded">
                        #{{tag}}
                    </span>
                </div>
                <div class="flex gap-4">
                    <span>👍 {{ reactions.likes }}</span>
                    <span>👎 {{ reactions.dislikes }}</span>
                    <span>👁️ {{ views }}</span>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>