import { describe, it, expect, beforeEach } from "vitest";
import { usePostStore } from "#imports";
import { mountSuspended } from '@nuxt/test-utils/runtime';
import AllPostsPage from "~/pages/posts/index.vue";
import IdPage from "~/pages/posts/[id].vue";

describe('See if the posts pages render the data', async () => {
    beforeEach(() => {
        usePinia();
    });

    it('Displays all posts on /posts', async () => {
        const store = usePostStore();
        await store.loadPosts();
        const html = (await mountSuspended(AllPostsPage)).html();
        store.allPosts.posts.forEach(post => {
            expect(html).toContain(post.title);
        })
    });

    it('Displays post of id on /posts/:id', async () => {
        const id = 1;
        const store = usePostStore();
        const thisPost = await store.fetchPostById(id);
        const html = (await mountSuspended(IdPage, { route: `/posts/${id}` })).html();
        expect(html).toContain(thisPost.title);
    });
})