import styled from 'styled-components';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }



export const StatisticsWripper = styled.section`
    width: 335px;
    margin: auto;
    border: solid 1px #2f5f2f;
`;

export const Title = styled.h2`
    font-size: 16p;
    color: #333333;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 25px;
    `
	


    export const StatList = styled.ul`
    height: 60px;
    display: flex;
    list-style: none;
    padding: 0;
    `
    

    export const StatListItem = styled.li`
    width: 70px;
    background-color: ${getRandomHexColor};
    `
    


    export const Label = styled.span`
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-evenly;
    `
    


    export const Percentage = styled.span`
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
    `
    
