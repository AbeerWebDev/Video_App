import {
  PlaylistAdd, 
  Reply, 
  ThumbDownOffAlt, 
  ThumbUpOffAlt,
} from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex: 5;

`
const VideoWrapper = styled.div`
`
 
const Title = styled.h1`
 font-size: 18px;
 font-weight: 400;
 margin-top: 20px;
 margin-bottom: 10px;
 color: ${({theme}) =>theme.text}
`

const Details = styled.div`
  display: flex;
  align-item: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({theme}) =>theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) =>theme.textSoft};
`

const Button = styled.div`
  display: flex;
  align-item: center;
  cursor: pointer;
  gap: 5px;
`

const Hr = styled.hr`
  border: 0.5 solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  gap: 24px;
`
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const ChannelDetail = styled.div`
 display: flex;
 flex-direction: column;
 color: ${({theme}) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;

`
const ChannelCounter = styled.span`
  margin-top: 5px 20px;
  color: ${({theme}) => theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: red;
  font-weight: 500;
  color: white;
  border-radius: 3px;
  border: none;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`


const Recommendation = styled.div`
  flex: 2;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe 
            width = "100%"
            height = "720px"
            title="React Js Tutorial"
            src="https://www.youtube.com/watch?v=Ke90Tje7VS0"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>ReactJs Tutorial</Title>
        <Details>
          <Info>545 views . 2 hours</Info>
          <Buttons>
            <Button>
              <ThumbUpOffAlt/> 123
            </Button>
            <Button>
              <ThumbDownOffAlt/> Dislike
            </Button>
            <Button>
              <Reply/> Share
            </Button>
            <Button>
              <PlaylistAdd/> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104704281/original/5325bb31370401a4f07f7d7a59d9c860a208707a/web-developer-wordpress-front-end-developer.png' />
            <ChannelDetail>
              <ChannelName>WebDeveloper</ChannelName>
              <ChannelCounter>300k</ChannelCounter>
              <Description> This is a ReactJs tutorial for beginners. Enjoy!</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation>
    </Container>
  )
}

export default Video