import Navigation from '../src/components/Navigation';

test('Navigation component is a function and it is not null', () => {
    expect(typeof Navigation).toBe('function');
    expect(Navigation).not.toBeNull();
  });
