import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'

describe('Default Button', () => {
  it('Render correctly', () => {
    render (<Button text="Button" />)
    const textElement = screen.getByText(/button/i)
    expect(textElement).toBeInTheDocument()
  })
})
