import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (<Wrapper>
  <div>
    <Image src={avatar}
                alt="User avatar"
                width="150px"/>
    <Name>{username}</Name>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <Stats>
    <StatsItem>
                <span>Followers</span>
                <br />
      <span>{stats.followers}</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <br />
      <span>{stats.views}</span>
    </StatsItem>
    <StatsItem>
                <span>Likes</span>
                <br />
      <span>{stats.likes}</span>
    </StatsItem>
  </Stats>
</Wrapper>)
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats:PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
}

const Wrapper = styled.div`
    background-color: #231E39;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
	color: #B3B8CD;
	padding-top: 30px;
	position: relative;
	width: 350px;
	max-width: 100%;
	text-align: center;
    margin: 0 auto;
    margin-top:20px;

`;

const Image = styled.img`
    border: 1px solid #03BFCB;
	border-radius: 50%;
	padding: 7px;
`;

const Stats = styled.ul`
background-color: #1F1A36;
	padding: 15px;
    display:flex;
    justify-content:space-evenly;
	margin-top: 30px;
    list-style:none;
`;

const StatsItem = styled.li`
border: 1px solid #2D2747;
	border-radius: 2px;
	display: inline-block;
	font-size: 12px;
	padding: 7px;
`;

const Name = styled.p`
font-weight:700;
font-size:20px;
`;

