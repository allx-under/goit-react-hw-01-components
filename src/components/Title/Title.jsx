import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Title = ({ titleText }) => {
  return <StyledTitle>{titleText}</StyledTitle>;
};

Title.propTypes = {
  titleText: PropTypes.string,
};

const StyledTitle = styled.h2`
  text-align: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  padding-top: 10px;
  padding-bottom: 10px;
`;
