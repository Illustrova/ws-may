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
          <ProductNav/>
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

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;




export default Home;
