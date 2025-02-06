# REST API Testing with Playwright

#### Hello and welcome!
#### My name is Murillo and I created this repository to practice REST API automation and keep improving my Playwright knowledge!

## Used Technologies
- Git
- GitHub Actions
- JavaScript
- Playwright

## REST API Tested
- JSON Placeholder [Documentation](https://jsonplaceholder.typicode.com/guide/)

## Test Scenarios
#### I decided to create automated tests to cover the CRUD endpoints of this API:

#### **POST**  - /posts - Creates a new Post
#### **PUT**  - /posts/100 - Updates an existing Post information
#### **GET**  - /posts - Lists all existing Posts
#### **GET**  - /posts/10 - Lists only a specific Post
#### **DELETE**  - /posts/10 - Deletes an existing Post

## Assertions
- For each request, I`m validating if it has the correct status code and the body
- For the second GET test, I`m validating if the response has the correct UserId
- For the DELETE test, I`m validating that the body is returning an empty object (I also validated it as text)




  
