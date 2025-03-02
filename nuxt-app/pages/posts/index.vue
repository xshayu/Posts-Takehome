<script setup lang="ts">
    const PostStore = usePostStore();
    await PostStore.loadPosts();
</script>

<template>
    <main>
        <p>
            Posts will be here.<br />
            <NuxtLink to="/posts/1">
                Check out some post here.
            </NuxtLink><br />
        </p>
        <PostCard v-for="post in PostStore.allPosts.posts" :key="post.id" v-bind="post" />
    </main>
</template>