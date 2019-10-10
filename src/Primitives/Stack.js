
import styled from 'styled-components/macro'
import styledMap from 'styled-map'
import Box from './Box'




const fd = styledMap`
  horizontal: row;
  vertical: column;
  default: row;
`

const ai = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  stretch: stretch;
  default: flex-start;
`

const aii = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  stretch: stretch;
  default: flex-start;
`

const jc = styledMap`
  left: flex-start;
  right: flex-end;
  center: center;
  split: space-between;
  around: space-around;
  
  default: flex-start;
`
const jci = styledMap`
  top: flex-start;
  bottom: flex-end;
  mid: center;
  split: space-between;
  around: space-around;
  
  default: flex-start;
`

function juscon(props) {
  // eslint-disable-next-line
  if (props.horizontal == true && props.vertical == null) {
    return jc
  };
// eslint-disable-next-line
  if (props.horizontal == null && props.vertical == true) {
    return jci
  }
}

function aliitm(props) {
  // eslint-disable-next-line
  if ((props.horizontal == true) && (props.vertical == null)) {
    return ai
    // eslint-disable-next-line
  } else if (props.horizontal == null && props.vertical == true) {
    return aii
  }
}

const Stack = styled(Box)`

display: flex;
flex-direction: ${fd};
flex-wrap:${props => (props.wrapit ? 'wrap' : 'nowrap')};
justify-content: ${props => juscon(props)};
align-items:  ${props => aliitm(props)};
flex-shrink: ${props =>props.shrink ? props.shrink : "1" };

`
Stack.displayName = 'Stack'

export default Stack
