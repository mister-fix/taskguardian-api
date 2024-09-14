// Initialize module-alias
require('module-alias/register');

// Import the necessary test functions from the 'node:test' library
const { test, after, beforeEach, describe } = require('node:test');
const supertest = require('supertest');

// Import Express application instance for use in tests using the alias
const app = require('@src/app');

// Initialize supertest with the Express application instance
const api = supertest(app);

/**
 * Test suite for API launch functionality.
 * This test verifies that the API page can be opened.
 */
describe('launching the api', () => {
  /**
   * Runs before each test in this suite.
   * Logs a 'beginning tests' message.
   */
  beforeEach(() => {
    console.log('Beginning tests.');
  });

  /**
   * Verify that the root API page can be opened.
   */
  test('hello response can be retrieved', async () => {
    await api
      .get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect({ message: '👋 Hello from the API!' });
  });
});

/**
 * Runs after all test suites.
 * Logs a 'tests finished' message.
 */
after(async () => {
  console.log('Tests finished.');
});
