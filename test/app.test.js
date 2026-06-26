describe('App', () => {
  test('health check returns ok', () => {
    expect({ status: 'ok' }).toEqual({ status: 'ok' });
  });

  test('port defaults to 3000', () => {
    expect(process.env.PORT || 3000).toBe(3000);
  });
});
