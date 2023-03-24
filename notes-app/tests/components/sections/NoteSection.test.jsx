import { test, describe } from 'vitest';
import {  render } from '@testing-library/react';

import { NoteSection } from '../../../src/components';

describe('<NoteSection />', () => { 
  test('renders content', () => { 
    const notes = [
      {
        id: 1,
        content: 'One note',
        date: '1999/01/01 Monday 13:50:00',
        important: true
      },
      {
        id: 2,
        content: 'Two note',
        date: '2000/01/01 Friday 15:50:00',
        important: false
      }
    ]

    const component = render(<NoteSection notes={notes} />)
    component.getByText('One note')
    component.getByText('Two note')
  })
})