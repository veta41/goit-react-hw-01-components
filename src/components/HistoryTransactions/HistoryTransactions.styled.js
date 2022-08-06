import styled from 'styled-components';


export const Table = styled.table`
margin: auto; 
width: 425px;
border: 1px solid #7bacd1;
`;

export const Thead = styled.thead`
background-color: #7bacd1;
color: #fff;
`;

export const Tbody = styled.tbody`
text-align: center;
background-color: #c9cfd4;
`;
export const Row = styled.tr`
background-color: #c9cfd4;
text-transform: uppercase;

:nth-child(even){
  background-color: #b0c0cf;
}

`
