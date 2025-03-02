<script setup lang="ts">
    const id = Number(useRoute().params.id as string);

    const PostStore = usePostStore();
    const { data: thisPost } = useAsyncData(`post-${id}`, () => PostStore.fetchPostById(id), {
        transform(input) {
            return {...input, _lastFetched: new Date()}
        },
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
    // const thisPost = await PostStore.fetchPostById(Number(id));
</script>

<template>
    <main class="max-w-4xl mx-auto p-4">
    <article v-if="thisPost">
      <h1 class="text-2xl font-semibold text-gray-900 mb-2">{{ thisPost.title }}</h1>
      <p class="text-sm text-gray-600 mb-4">User ID: {{ thisPost.userId }}</p>
      <p class="text-gray-700 leading-relaxed mb-6">{{ thisPost.body }}</p>
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-gray-600">
        <div class="flex gap-2">
          <span v-for="tag in thisPost.tags" :key="tag" class="px-2 py-1 bg-gray-100 rounded">
            #{{ tag }}
          </span>
        </div>
        <div class="flex gap-4">
          <span>👍 {{ thisPost.reactions.likes }}</span>
          <span>👎 {{ thisPost.reactions.dislikes }}</span>
          <span>👁️ {{ thisPost.views }}</span>
        </div>
      </div>
      <NuxtLink to="/posts" class="mt-6 inline-block link">
        Back to Posts
      </NuxtLink>
    </article>
    <p v-else class="text-gray-600">Loading post...</p>
  </main>
</template>