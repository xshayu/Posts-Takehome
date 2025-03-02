<script setup lang="ts">
import type { Post } from '~/types';
defineProps<Post>();
</script>

<template>
    <article>
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
        <NuxtLink :to="`/posts/${id}`">
            View details
        </NuxtLink>
    </article>
</template>