import React from "react";
import styled from "styled-components";

const randomColor = () => { return "#" + Math.floor(Math.random() * 16777215).toString(16) };

export const Statistics = ({title, stats}) => {
    return (
        <StatWrapper >
            {title && <StatTitle>{title}</StatTitle>}
            <StatList>
                {stats.map(stat => {
                return (<StatItem>
                    <span style={{ "margin-bottom": "5px"}}>{stat.label}</span>
                    <span >{stat.percentage}%</span>
                </StatItem>)
    })}
             </StatList>
        </StatWrapper>
    )
}



const StatWrapper = styled.section`
margin: 0 auto;
`

const StatTitle = styled.h2`
text-align: center;
`

const StatList = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
justify-content:center;
align-items:center;
`
const StatItem = styled.li`
width:50px;
background-color: ${randomColor};
padding:20px;
display:flex;
flex-direction: column;
`

