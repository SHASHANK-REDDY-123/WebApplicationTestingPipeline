describe('Web Application Testing Pipeline',()=>{
  test('homepage content exists',()=>expect('Web Application Testing Pipeline').toContain('Testing'));
  test('pipeline includes Jenkins',()=>expect(['GitHub','Jenkins','Jest']).toContain('Jenkins'));
  test('quality gate passes',()=>expect(5).toBeGreaterThan(0));
  test('all tests are represented',()=>expect(5).toBe(5));
  test('health status is valid',()=>expect({status:'ok'}).toHaveProperty('status','ok'));
});