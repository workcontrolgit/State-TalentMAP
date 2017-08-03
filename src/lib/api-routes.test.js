import ApiRoutes from './api-routes';

describe('api-routes', () => {
  it('should take a constructor', () => {
    const baseUrl = 'http://api:8000';
    const routes = new ApiRoutes(baseUrl);
    expect(routes.baseUrl).toBe(baseUrl);
  });
});
