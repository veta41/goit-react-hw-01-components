import styled from 'styled-components';

export const InfoProfile = styled.div`
margin: 20px auto;
padding: 20px;
width: 300px;
border-radius: 5px;
border: 1px solid #2f5f2f;
  
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const Avatar = styled.img`
width: 250px;
height: 250px;

border-radius: 50%;
background-color: #fff;

`;

export const Username = styled.p`
font-size: 25px;
`;

export const Tag = styled.p`
text-decoration: none;
font-size: 18px;
`;

export const Location = styled.p`
font-size: 20px;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 80px;
  border-radius: 5px;
  // background-color: rgba(123, 137, 143, 0.719);
`;

export const Label = styled.span`
  display: block;
  margin: 5px;
  font-size: 13px;
`;

export const Quantity = styled.span`
  display: block;
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
`;