import styled from 'styled-components';

export const FriendWripper = styled.ul`
  width: 425px;
	margin: auto;
	border: solid 1px #2f5f2f;
  padding: 0;
`;


export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 1em #2f5f2f;
  padding-left: 10px;
  border-radius: 3px;
`;

 
export const StatusOnline = styled.div`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: green;
margin: 0 15px 0 15px;

`;

export const  StatusOffline = styled.div`
background-color: red;
`;
   



export const Avatar = styled.img`
border-radius: 10px;
margin: 10px;
`;
   


export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
    
