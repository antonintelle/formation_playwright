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

        // 4. Récupérer le post avec l'ID 1 et vérifier son titre

        const postOne = posts[0];
        expect(postOne.id).toBe(1);
        // Exemple: adapter au titre attendu dans l’énoncé ou la doc du cours
        expect(postOne.title).toBeDefined();
    });
});