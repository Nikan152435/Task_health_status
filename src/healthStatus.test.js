import { getHealthStatus } from './healthStatus';

test('should return "healthy" for health > 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should return "wounded" for health between 15 and 50', () => {
  const result = getHealthStatus({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});

test('should return "critical" for health < 15', () => {
  const result = getHealthStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});