import styled from 'styled-components/macro'
import Box from './Box'
import { grid } from 'styled-system'

const Grid = styled(Box)`
    display: grid;
    ${grid}
`
Grid.displayName = 'Grid'

export default Grid
