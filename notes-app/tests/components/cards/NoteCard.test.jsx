import { test, vi, afterEach, expect, describe } from 'vitest';
import { fireEvent, render } from '@testing-library/react';

import { NoteCard } from '../../../src/components';

describe('<NoteCard />', () => {
  test('renders content', () => {
    const note = {
      content: 'Hello world',
      date: '1999/01/01 Monday 13:50:00',
      important: true
    }
          
    const component = render(<NoteCard note={note} />)
  
    component.getByText('Hello world')
    component.getByText('important')
  })
  
  test('clicking the button handle toggle important call once', () => { 
    afterEach(() => {
      vi.restoreAllMocks()
    })
  
    const note = {
      content: 'Hello world',
      date: '1999/01/01 Monday 13:50:00',
      important: true
    }
  
    const mockHandleToggleImportant = vi.fn()
          
    const component = render(
      <NoteCard note={note} onUpdate={mockHandleToggleImportant} />
    )
  
    const button = component.getByText('important')
    fireEvent.click(button)
  
    expect(mockHandleToggleImportant).toHaveBeenCalledTimes(1)
  })
})
