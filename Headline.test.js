import { render } from '@redwoodjs/testing'

import Headline from './Headline'

describe('Headline', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Headline />)
    }).not.toThrow()
  })
})
