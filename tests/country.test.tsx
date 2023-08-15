import React from 'react';
import { render, screen } from '@testing-library/react';
import { useFormContext } from 'react-hook-form';
import Country from '../src/_components/forms/Country'; 

jest.mock('react-hook-form', () => ({
    useFormContext: jest.fn(),
  }));
  
  describe('Country', () => {
    it('renders the component when null', () => {
      
      const mockFormContext = {
        register: jest.fn(),
        formState: { errors: { Country: { message: 'Test error message' } } },
      };
  
      (useFormContext as jest.Mock).mockReturnValue(mockFormContext);
  
      render(<Country />);
  
      const selectElement = screen.queryByLabelText('Country*');
      expect(selectElement).toBeNull();
    });
  });
