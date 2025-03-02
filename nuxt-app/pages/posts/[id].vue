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
    <main>
        <p>
            This is for an individual post<br />
            The post id is: {{ id }}<br />
            Post info: <br />
            {{ JSON.stringify(thisPost) }}
        </p>
    </main>
</template>