import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components
// terminal command: yarn rw test

describe('Poster', () => {
  it('renders successfully', () => {
    const source = './images/hocuspocus2.png'
    const alt = 'Hocus Pocus 2'
    expect(() => {
      render(<Poster alt={alt} src={source} />)
    }).not.toThrow()
  })
})

it('show the image', () => {
  const source = './images/hocuspocus2.png'
  const alt = 'Hocus Pocus 2'
  render(<Poster alt={alt} src={source} />)

  expect(screen.getByRole('img')).toHaveAttribute('src', source)
})

it('loads the alt text', () => {
  const source = './images/hocuspocus2.png'
  const alt = 'Hocus Pocus 2'
  render(<Poster alt={alt} src={source} />)
  expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
})
