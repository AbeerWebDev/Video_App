import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text}
`
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`

const Text = styled.p`
font-size: 14px;
`




const Comment = () => {
  return (
    <Container>
      <Avatar src='https://cdn.dribbble.com/users/5534/screenshots/14230133/media/e2f853f8232acad78bf143c32f2f3a04.jpg?compress=1&resize=1600x1200&vertical=top' />
      <Details>
        <Name> Jose Murino <Date> 3 days ago</Date>
        </Name>
        <Text>Fantastic! Looking forward to part 2 for connecting to a DB and making it dynamic! Subscribed.</Text>
      </Details>
    </Container>
  )
}

export default Comment