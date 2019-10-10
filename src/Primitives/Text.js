import styled from "styled-components/macro";
import { typography, color, space } from "styled-system";

import styledMap from "styled-map";

const size = styledMap`
  type100: 10px;
  type200: 12px;
  type300: 14px;
  type400: 16px;
  type500: 18px;
  type600: 22px;
  type700: 28px;
  type800: 36px;
  type900: 56px;
  default: 14px;
`;
const height = styledMap`
  type100: 12px;
  type200: 16px;
  type300: 18px;
  type400: 20px;
  type500: 22px;
  type600: 26px;
  type700: 32px;
  type800: 38px;
  type900: 56px;
  default: 18px;
`;
const weight = styledMap`
  normal: normal;
  medium: 500;
  bold: bold;
  default: normal
 
`;

const Text = styled.div`

${typography}
${color}
${space}  
font-size: ${size};
line-height: ${height};
font-weight: ${weight};
`;

Text.displayName = "Text";

Text.h1 = Text.withComponent("h1");
Text.h2 = Text.withComponent("h2");
Text.h3 = Text.withComponent("h3");
Text.span = Text.withComponent("span");
Text.p = Text.withComponent("p");
Text.s = Text.withComponent("s");

export default Text;
