import Main from '../src/components/Main';

test('Main component is defined and it is a function', () => {
    expect(Main).toBeDefined(); 
    expect(typeof Main).toBe('function'); 
    expect(Main).not.toBeNull();
  });


