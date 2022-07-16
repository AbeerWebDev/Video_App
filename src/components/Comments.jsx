import React from 'react';
import styled from 'styled-components';
import Comment from "../components/Comment"

const Container = styled.div``

const NewComment = styled.div`
  display: flex;
  align-item: center;
  gap: 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  border: none;
  border-bottom: solid 1px ${({theme}) => theme.soft};
  background-color: transparent;
  padding: 5px;
  outline: none;
  width: 100%;
`





const Comments = () => {
  return (
    <Container>
     <NewComment>
        <Avatar src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'/>
        <Input placeholder='Add a comment...'/>
     </NewComment>
     <Comment />
     <Comment />
     <Comment />
     <Comment />
     <Comment />
     <Comment />
     <Comment />
     <Comment />
    </Container>
  )
}

export default Comments