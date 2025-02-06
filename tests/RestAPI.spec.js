import { expect, request, test } from "@playwright/test";

test.describe('REST API SMOKE TESTS', () => {
    let apiContext;

    test.beforeEach(async () => {
        apiContext = await request.newContext();
    });

    test('GET - List all posts', async () => {
        let postsResponse = await apiContext.get('/posts');
        let jsonResponse = await postsResponse.json();
        await expect(postsResponse.ok()).toBeTruthy();
        await expect(jsonResponse).not.toBeNull();
    });

    test('POST - Create a post', async () => {
        let createPostResponse = await apiContext.post('/posts', {
            data: {
                userId: 1,
                title: 'Muca Post',
                body: `I'm creating a new post on this API`
            }
        });
        let jsonResponse = await createPostResponse.json();
        console.log(jsonResponse);
        await expect(createPostResponse.ok()).toBeTruthy();
        await expect(jsonResponse).not.toBeNull();
    });

    test('GET - Verify if a post exists', async () => {
        let getPostResponse = await apiContext.get('/posts/100');
        let jsonResponse = await getPostResponse.json();
        console.log(jsonResponse);
        await expect(getPostResponse.ok()).toBeTruthy();
        await expect(jsonResponse).not.toBeNull();
    });


    test('PUT - Update an existing post', async () => {
        let updatePostResponse = await apiContext.put('/posts/100', {
            data: {
                userId: 10,
                title: 'Muca Post',
                body: `I'm updating an existing post`
            }
        });
        let jsonResponse = await updatePostResponse.json();
        console.log(jsonResponse);
        await expect(updatePostResponse.status()).toBe(200);
        await expect(jsonResponse).not.toBeNull();
    });

    test('GET - Verify post contains correct UserID', async () => {
        let getPostResponse = await apiContext.get('/posts/100');
        let jsonResponse = await getPostResponse.json();
        let userId = jsonResponse.userId;
        await expect(userId).toBe(10);
        await expect(getPostResponse.ok()).toBeTruthy();
        console.log(jsonResponse);
    });

    test('DELETE - Delete an existing post', async () => {
        let getPostResponse = await apiContext.delete('/posts/100');
        let textReponse = await getPostResponse.text();
        let jsonResponse = await getPostResponse.json();
        console.log(textReponse);
        console.log(jsonResponse);
        await expect(getPostResponse.ok()).toBeTruthy();
        await expect(textReponse).toBe('{}');
        await expect(jsonResponse).toMatchObject({});
    });
});
