import React from 'react';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { SearchOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) =>theme.bgLighter};
    height: 56px;
  `

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: flex-end;
    padding: 0px 20px;
    position: relative;
  `

  const Search = styled.div`
    display: flex;
    position: absolute;
    margin: auto;
    right: 10px;
    left: 0px;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 5px;
  `

  const Input = styled.input`
    border: none;
    background-color: transparent;
  `

  const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    cursor: pointer;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  `

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlined/>
        </Search>
        <Link to="signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleOutlinedIcon/>
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar