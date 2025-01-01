import React from 'react';
import styled from 'styled-components';

export const ExperienceLine = () => {
    return (
        <Timeline>
             <TimelinePoint>
        <TimelineDate>2017</TimelineDate>
        <TimelineText>Начало проекта</TimelineText>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2019</TimelineDate>
        <TimelineText>Начало проекта</TimelineText>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2021</TimelineDate>
        <TimelineText>Начало проекта</TimelineText>
    </TimelinePoint>
    <TimelinePoint>
        <TimelineDate>2023</TimelineDate>
        <TimelineText>Начало проекта</TimelineText>
    </TimelinePoint>
        </Timeline>
    );
};

const Timeline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    position: relative;
   background-color:#ffff;
   max-height:8px;
   background: linear-gradient(to right, #945dd6, #6978d1, #13adc7);        
    
`
const TimelinePoint = styled.div`
     position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    background-color:#ffff;
    max-width:25px;
    max-height:25px;
    border-radius:50%
`
const TimelineDate = styled.div`
    font-weight: bold;
    
    text-align: center; 
    color:#ffff;
    position: absolute;
    top:-90%
    `
const TimelineText = styled.div`
    font-size: 14px;
    color: #ffff;
    margin-top: 30px; /* Отступ между точкой и текстом */
    text-align: center;
    

`