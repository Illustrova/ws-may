
import React from "react";
import styled from "styled-components";

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

/* ProductContainer
 *
 * TODO: add component description
 */
const ProductContainer = ({ children }) => {
  return <StyledDiv5>{children}</StyledDiv5>;
};

export default ProductContainer;
