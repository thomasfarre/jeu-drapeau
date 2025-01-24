import { render, screen } from '@testing-library/react'
import { BodyText } from '../BodyText'

describe('BodyText', () => {
  it('renders children correctly', () => {
    render(<BodyText>Sample text</BodyText>)
    expect(screen.getByText('Sample text')).toBeInTheDocument()
  })

  it('applies correct size classes', () => {
    const { rerender } = render(<BodyText size="sm">Small text</BodyText>)
    expect(screen.getByText('Small text')).toHaveClass('text-sm')

    rerender(<BodyText size="lg">Large text</BodyText>)
    expect(screen.getByText('Large text')).toHaveClass('text-lg')
  })

  it('applies custom className', () => {
    render(<BodyText className="custom-class">Text</BodyText>)
    expect(screen.getByText('Text')).toHaveClass('custom-class')
  })
})
