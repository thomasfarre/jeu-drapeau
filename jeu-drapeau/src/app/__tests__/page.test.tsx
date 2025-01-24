import { render, screen, cleanup } from '@testing-library/react'
import Home from '../page'

afterEach(() => {
  cleanup()
})

describe('Home Page', () => {
  it('affiche les modes de jeu', () => {
    render(<Home />)

    expect(screen.getByText('Mode Solo')).toBeInTheDocument()
    expect(screen.getByText('Mode Multijoueur')).toBeInTheDocument()
  })
})
