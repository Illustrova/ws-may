/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, Navigation, Avatar, Card, Title, colors, ProductContainer, ProductNav } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");


const Home = () => {
  return (
    <div>
      <PageWrapper>
     <Navigation
      firstAction={<Avatar src={data.user.avatar} />}
      lastAction={<Button isOutline><Icon name ="menu" /></Button>}
    />
        <Title>Store</Title>
        <Container>
          <h4>All Product</h4>
          <ProductNav/>
        </Container>
        <ProductContainer>
          {Object.entries(data.products).map(([id, item]) => {
            return (
              <StyledLink key={id} to={`/details/${id}`}>
            <Card size="medium" key={id} name={item.name} price={item.price} image={item.image}/>
              </StyledLink>
            );
          })}
        </ProductContainer>
      </PageWrapper>
    </div>
  );
};



const PageWrapper = styled.div`
  padding: 64px 40px;
`;




const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;


const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.primaryBlack10};
  margin: 0 8px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;



const StyledP = styled.p`
  color: ${colors.primaryOrange100};
  font-weight: 700;
  margin-top: 8px;
`;

export default Home;
