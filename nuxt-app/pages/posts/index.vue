<script setup lang="ts">
    const PostStore = usePostStore();

    await useAsyncData('posts-list', () => PostStore.loadPosts(), {
        getCachedData(key, nuxtApp) {
            const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
            if (!data) {
                return;
            };
            const expirationDate = new Date(data._lastFetched);
            expirationDate.setTime(expirationDate.getTime() + (15 * 60 * 1000));
            const isExpired = expirationDate.getTime() < Date.now();
            if (isExpired) {
                return;
            }
            else return data;
        }
    })
    // await PostStore.loadPosts();
</script>

<template>
    <main>
        <h1 class="text-3xl font-bold mb-8">Posts</h1>
        <PostCard v-for="post in PostStore.allPosts.posts" :key="post.id" v-bind="post" class="mb-4" />
    </main>
</template>