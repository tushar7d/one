import styled from 'styled-components/macro'
import { layout, space } from 'styled-system'

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  ${layout}
  ${space}
`

Image.displayName = 'Image'

export default Image
