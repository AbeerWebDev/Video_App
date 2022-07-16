import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 12px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "120px" : "202px"};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  display: ${(props) => props.type === "sm" && "none"}
`;
const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
<Link to="/video/test" style={{textDecoration:"none"}}>
      <Container type={type}>
        <Image type={type} src="https://www.cintap.com/wp-content/uploads/2022/05/ReactJS.png" />
        <Details type={type} >
          <ChannelImage type={type} src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104704281/original/5325bb31370401a4f07f7d7a59d9c860a208707a/web-developer-wordpress-front-end-developer.png" />
          <Texts>
            <Title> ReactJS Tutorial</Title>
            <ChannelName>WebDeveloper</ChannelName>
            <Info>632,8743k views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
