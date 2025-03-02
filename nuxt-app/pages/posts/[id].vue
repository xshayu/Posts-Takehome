<script setup lang="ts">
    const id = useRoute().params.id as string;
</script>

<template>
    <main>
        <p>
            This is for an individual post<br />
            The post id is: {{ id }}
        </p>
    </main>
</template>