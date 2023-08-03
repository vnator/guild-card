import { render } from '@testing-library/react';
import { Template } from '.';

describe('Template Component', () => {
  it('simple test render', () => {
    const wrap = render(<Template>filho</Template>)

    expect(wrap.container.textContent).toContain('carambolas')
  })
})
