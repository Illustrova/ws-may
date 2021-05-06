
import React from "react";
import styled from "styled-components";
import {Icon, Button, colors} from "../.."
/* ProductNav
 *
 * Filters and sorting
 */
const ProductNav = (props) => {
  return <StyledProductNav>
    <StyledButton color="transparent">
      <Icon name="viewItem" width={24} height={16} />
    </StyledButton>
    <StyledButton color="transparent">
      <Icon name="viewGrid" width={24} height={16} />
    </StyledButton>
    <StyledBorder />
    <StyledButton color="transparent">
      <Icon name="filter" width={24} height={16} />
    </StyledButton>
    </StyledProductNav>;
};

export const StyledProductNav = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.shadowMd0Color};
  margin: 0 8px;
`;

export default ProductNav;
