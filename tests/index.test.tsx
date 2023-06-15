import { render, screen } from '@testing-library/react'
import App from '@/app/page'

describe('Home', () => {
  it('renders a heading to display user name', () => {
    render(<App />)

    const heading = screen.getByRole('heading')
    const headingText = 'Your name is:'

    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(headingText)
  })
})
