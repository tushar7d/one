import styled from 'styled-components/macro'
import {
  position,
  space,
  color,
  layout,
  borderRadius,
  border,
  boxShadow,
  size,typography,background, compose } from 'styled-system'

 const Box = styled('div')(
    compose(
      position,
      space,
     layout,
      color,
      borderRadius,
      border,
      boxShadow,
      background,
      size,
      typography,
      

    )
  )



Box.displayName = 'Box'

export default Box
