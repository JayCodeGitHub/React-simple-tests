import Recat from 'react'
import { fireEvent, render } from '@testing-library/react'
import Counter from '../components/Counter'

test('counter increments count', () => {
  const { container } = render(<Counter />)
  const button = container.firstChild
  expect(button?.textContent).toBe('0')
  button ? fireEvent.click(button) : null
  expect(button?.textContent).toBe('1')
})
