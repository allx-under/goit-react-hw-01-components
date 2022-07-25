import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


export const FriendsList = ({friends}) => {
    return (
        <StyledList>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem key={id } avatar={avatar} name={name} isOnline={isOnline} ></FriendListItem>)
            })}
        </StyledList>
    )
}

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <StyledItem>
            <IsOnlineColor isOnline={isOnline}/>
            <img src={avatar} alt="User avatar" width="48"/>
            <p style={{ marginLeft: "5px" }}>{name}</p>
        </StyledItem>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline:PropTypes.bool,
  }))
}


const StyledItem = styled.li`
display:flex;
margin-bottom: 10px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
width: 300px;
padding:5px;
`

const IsOnlineColor = styled.span`
width:10px;
height:10px;
background-color:${({isOnline}) => isOnline ? "green" : "red"};
border-radius:50%;
align-self:center;  
margin-right:7px;
`

const StyledList = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`