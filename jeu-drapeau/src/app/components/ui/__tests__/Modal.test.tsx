import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from '../Modal'

describe('Modal', () => {
  beforeEach(() => {
    // Setup a portal root
    const portalRoot = document.createElement('div')
    portalRoot.setAttribute('id', 'portal-root')
    document.body.appendChild(portalRoot)
  })

  afterEach(() => {
    // Cleanup portal root
    document.body.innerHTML = ''
  })

  it('renders when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>
    )
    expect(screen.getByText('Modal content')).toBeInTheDocument()
  })

  it('does not render when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Modal content
      </Modal>
    )
    expect(screen.queryByText('Modal content')).not.toBeInTheDocument()
  })

  it('calls onClose when clicking outside', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        Modal content
      </Modal>
    )

    const backdrop = screen.getByText('Modal content').parentElement?.parentElement
    fireEvent.mouseDown(backdrop as Element)
    expect(onClose).toHaveBeenCalled()
  })

  it('calls onClose when pressing Escape', () => {
    const onClose = jest.fn()
    render(
      <Modal isOpen={true} onClose={onClose}>
        Modal content
      </Modal>
    )

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('prevents body scroll when open', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>
    )
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body scroll when closed', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}}>
        Modal content
      </Modal>
    )

    rerender(
      <Modal isOpen={false} onClose={() => {}}>
        Modal content
      </Modal>
    )

    expect(document.body.style.overflow).toBe('unset')
  })
})
