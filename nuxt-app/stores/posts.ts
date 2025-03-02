import type { Post, AllPosts } from "~/types";

export const usePostStore = defineStore('postStore', () => {
    const ENDPOINT = 'https://dummyjson.com/posts';

    const allPosts = ref<AllPosts>({
        posts: [],
        total: 0,
        _lastFetched: null
    });
    
    const loadPosts = async () => {
        const data = await $fetch<AllPosts>(ENDPOINT);
        allPosts.value = { ...data, _lastFetched: new Date() };
        return data; // if needed
    };

    const fetchPostById = async (id: number) => {
        let thisPost = allPosts.value.posts.find(post => post.id == id);
        const expirationDate = new Date(allPosts.value._lastFetched!);
        expirationDate.setTime(expirationDate.getTime() + (15 * 60 * 1000));
        const isExpired = expirationDate.getTime() < Date.now();
        if (isExpired || !thisPost) {
            thisPost = await $fetch<Post>(`${ENDPOINT}/${id}`);
        };
        return thisPost;
    };

    return { allPosts, loadPosts, fetchPostById };
});