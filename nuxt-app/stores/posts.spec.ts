import { beforeEach, it, describe, expect } from "vitest";
import { usePostStore } from "./posts";

describe('Testing Post Store', () => {
    beforeEach(() => {
        usePinia();
    });

    it('Initializes with an empty posts info', () => {
        const store = usePostStore();
        expect(store.allPosts.posts).toStrictEqual([]);
        expect(store.allPosts.total).toEqual(0);
    });

    it('Populates posts after fetchPosts', async () => {
        const store = usePostStore();
        await store.loadPosts();
        expect(store.allPosts.total).toBeGreaterThan(0);
    });

    it('Fetches specific post by id', async () => {
        const id = 1;
        const store = usePostStore();
        const thisPost = await store.fetchPostById(id);
        expect(thisPost).toHaveProperty('id');
        expect(thisPost?.['id']).toEqual(id);
    })
});