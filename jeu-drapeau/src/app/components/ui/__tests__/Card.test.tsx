import { render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies base styles', () => {
    render(<Card>Content</Card>)
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('rounded-lg', 'bg-white', 'p-6', 'shadow-lg')
  })

  it('applies custom className', () => {
    render(<Card className="custom-class">Content</Card>)
    const card = screen.getByText('Content').parentElement
    expect(card).toHaveClass('custom-class')
  })
})
