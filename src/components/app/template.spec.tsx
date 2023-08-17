import { render } from '@testing-library/react';
import { App } from '.';

describe('Template Component', () => {
  it('simple test render', () => {
    const wrap = render(<App messages={{ me: 'serodio' }}>filho</App>)

    expect(wrap.container.textContent).toContain('carambolas')
  })
})
