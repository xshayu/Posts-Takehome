import type { Post } from "~/types";

export const usePostStore = defineStore('postStore', () => {
    const ENDPOINT = 'https://dummyjson.com/posts';

    const allPosts = ref({
        posts: [] as Array<Post>,
        total: 0
    });
    
    const loadPosts = async () => {
        allPosts.value = await $fetch(ENDPOINT);
        return allPosts.value; // if needed
    };

    const fetchPostById = async (id: number) => {
        let thisPost = allPosts.value.posts.find(post => post.id == id);
        if (!thisPost) {
            thisPost = await $fetch<Post>(`${ENDPOINT}/${id}`);
        };
        return thisPost;
    };

    return { allPosts, loadPosts, fetchPostById };
});