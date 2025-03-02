import type { Post } from "~/types";

export const usePostStore = defineStore('postStore', () => {
    const allPosts = ref({
        posts: [] as Array<Post>,
        total: 0
    });
    
    const loadPosts = async () => {
        await Promise.resolve();
    };

    const fetchPostById = async (id: number) => {
        await Promise.resolve();
    }

    return { allPosts, loadPosts, fetchPostById };
});