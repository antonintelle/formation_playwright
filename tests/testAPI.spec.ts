import test, { expect } from "@playwright/test";
import { exitCode } from "node:process";

test.describe('API Users', () => {
    test('GET - Récupérer tous les posts vérifier qu il y en a 100', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');

        expect(response.status()).toBe(200);

        const posts = await response.json();
        expect(posts).toBeInstanceOf(Array);
        expect(posts).toHaveLength(100);
    });

    test('GET - Vérifier que chaque post à les bonnes propriétés', async ({ request }) => {
        const response = await request.get('https://jsonplaceholder.typicode.com/posts');

        expect(response.status()).toBe(200);
        const posts = await response.json();
        
        for (const post of posts) {
            expect(post).toHaveProperty('id');
            expect(post).toHaveProperty('userId');
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('body');
        }

        const postOne = posts[0];
        expect(postOne.id).toBe(1);
        expect(postOne.title).toBeDefined();
    });

    test('POST - Création et manipulation de ressouces', async ({request}) => {
        const newPost = {
            title: 'Mon premier test',
            body: 'Contenu du test',
            userId: 1
        };

        const createResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: newPost
        })

        expect(createResponse.status()).toBe(201);

        const createdPost = await createResponse.json();
        const createdPostId = createdPost.id;
        expect(createdPostId).toBeDefined;
        expect(createdPost.title).toBe(newPost.title);
    });
});