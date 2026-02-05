// tests/auth-login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('DummyJSON auth', () => {
  test('login should succeed, get token, and use it for /auth/me', async ({ request }) => {
    // Étape 1: Login et obtenir le token
    const loginResponse = await request.post('https://dummyjson.com/auth/login', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: process.env.TEST_USERNAME,
        password: process.env.TEST_PASSWORD,
        expiresInMins: 30, // optionnel, par défaut 60
      },
    });

    await expect(loginResponse).toBeOK();
    const loginBody = await loginResponse.json();

    // Vérifications login
    expect(loginBody).toHaveProperty('id');
    expect(loginBody).toHaveProperty('username', 'emilys');
    expect(loginBody).toHaveProperty('accessToken');
    const accessToken = loginBody.accessToken;

    // Étape 2: Utiliser le token pour /auth/me
    const meResponse = await request.get('https://dummyjson.com/auth/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    await expect(meResponse).toBeOK();
    const meBody = await meResponse.json();

    // Vérifications /auth/me
    expect(meBody).toHaveProperty('id');
    expect(meBody).toHaveProperty('username', 'emilys');
    expect(meBody).toHaveProperty('email', 'emily.johnson@x.dummyjson.com');
    expect(meBody).toHaveProperty('firstName', 'Emily');

    console.log('User details:', meBody);
  });
});
