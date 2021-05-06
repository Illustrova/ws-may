
import { string } from "prop-types";
import React from "react";
import styled from "styled-components";

/* 
 * Title
 */
const Title = (props) => {
  return <StyledTitle {...props} />;
};

Title.propTypes = {
  children: string,
}

export const StyledTitle = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

export default Title;
