<script setup lang="ts">
    const PostStore = usePostStore();

    const id = useRoute().params.id as string;
    const thisPost = await PostStore.fetchPostById(Number(id));
</script>

<template>
    <main>
        <p>
            This is for an individual post<br />
            The post id is: {{ id }}<br />
            Post info: <br />
            {{ JSON.stringify(thisPost) }}
        </p>
    </main>
</template>