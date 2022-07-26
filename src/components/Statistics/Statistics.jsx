import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span>{stat.label}</span>
              <StatText>{stat.percentage}%</StatText>
            </StatItem>
          );
        })}
      </StatList>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

const StatWrapper = styled.section`
  margin: 0 auto;
`;

const StatTitle = styled.h2`
  text-align: center;
`;

const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StatItem = styled.li`
  width: 50px;
  background-color: ${randomColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StatText = styled.span`
  margin-top: 7px;
  font-size: 20px;
  font-weight: 700;
`;
