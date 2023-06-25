import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
//    terminal command: yarn rw test

describe('Poster', () => {
    const source = './images/hocuspocus2.png'
    const alt = 'Hocus Pocus 2'

      it('renders successfully', () => {
          expect(() => {
            render(<Poster alt={alt} src={source} />)
          }).not.toThrow()
        }
      )

      it('show the image', () => {
        render(<Poster alt={alt} src={source} />)
        expect(screen.getByRole('img')).toHaveAttribute('src', source)
      }
    )

      it('loads the alt text', () => {
        const source = './images/hocuspocus2.png'
        const alt = 'Hocus Pocus 2'
        render(<Poster alt={alt} src={source} />)
        expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
      }
    )

      it('renders a small size', () => {
        render(<Poster alt={alt} src={source} size='small' />)
        const poster = screen.getByRole('img')
        expect(poster).toHaveClass('h-60', {exact: false})
        expect(poster).toHaveClass('w-40', {exact: false})
      }
    )

      it('renders a medium size', () => {
        render(<Poster alt={alt} src={source} size="medium" />)
        const poster = screen.getByRole('img')
        expect(poster).toHaveClass('h-[310px]', {exact: false})
        expect(poster).toHaveClass('w-[224px]', {exact: false})
      }
    )

      it('renders a large size', () => {
        render(<Poster alt={alt} src={source} size='large' />)
        const poster = screen.getByRole('img')
        expect(poster).toHaveClass('h-[460px]', {exact: false})
        expect(poster).toHaveClass('w-[300px]', {exact: false})
      }
    )

      it('renders a heading', () => {
          const heading = 'I am a heading'
          render(<Poster alt={alt} src={source} heading={heading} />)
          expect(screen.getByText(heading)).toBeInTheDocument()
      }
    )

      it('renders a subheading', () => {
          const subheading = 'I am a subheading'
          render(<Poster alt={alt} src={source} heading={subheading} />)
          expect(screen.getByText(subheading)).toBeInTheDocument()
      }
    )
  }
)
