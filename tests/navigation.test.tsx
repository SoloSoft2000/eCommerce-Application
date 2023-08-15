import Navigation from '../src/_components/Navigation';

test('Navigation component is a function and it is not null', () => {
    expect(typeof Navigation).toBe('function');
    expect(Navigation).not.toBeNull();
  });
