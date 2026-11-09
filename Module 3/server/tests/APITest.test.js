import { describe, it, expect } from 'vitest';

describe('GET /api/saved-recipes', () => {
  it('should return a 200 status', async () => {
    // Fetch the value
    const response = await fetch('http://localhost:3000/saved-recipes');

    // Check the value
    expect(response.status).toBe(200);
  });
});