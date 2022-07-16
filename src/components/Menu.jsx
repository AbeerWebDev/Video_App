import React from "react";
import styled from "styled-components";
import Play from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  height: 100vh;
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
  align-items: center;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({theme}) => theme.soft}
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;
const Login = styled.div``;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #aaaaaa;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color:"inherit" }}>
          <Logo>
            <Img src={Play} />
            Youtube
          </Logo>
          <Item>
            <HomeIcon />
            Home
          </Item>
          <Item>
            <ExploreOutlinedIcon />
            Explore
          </Item>
          <Item>
            <SubscriptionsOutlinedIcon />
            Subscriptions
          </Item>
          <Hr />
          <Item>
            <VideoLibraryOutlinedIcon />
            Library
          </Item>
          <Item>
            <HistoryOutlinedIcon />
            History
          </Item>
          <Hr />
          <Login>
            Sign in to like videos, comment, and subscribe.
            <Link to="signin" style={{textDecoration: "none"}}>
            <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
            </Button>
            </Link>
          </Login>
          <Hr />
          <Title>Best of the day</Title>
          <Item>
            <LibraryMusicOutlinedIcon />
            Music
          </Item>
          <Item>
            <SportsBasketballOutlinedIcon />
            sports
          </Item>
          <Item>
            <SportsEsportsOutlinedIcon />
            Gaming
          </Item>
          <Item>
            <MovieCreationOutlinedIcon />
            Movies
          </Item>
          <Item>
            <ArticleOutlinedIcon />
            News
          </Item>
          <Item>
            <LiveTvOutlinedIcon />
            Live
          </Item>
          <Hr />
          <Item>
            <SettingsOutlinedIcon />
            Settings
          </Item>
          <Item>
            <OutlinedFlagIcon />
            Report
          </Item>
          <Item>
            <HelpCenterOutlinedIcon />
            Help
          </Item>
          <Item onClick={() => setDarkMode(!darkMode)}>
            <SettingsBrightnessOutlinedIcon/>
            { darkMode ? "Light" : "Dark "} Mode
          </Item>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Menu;
