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

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

export const Avatar = styled.div`

border-radius: 50%;
background-color: #fff;

`;

export const Username = styled.div`
font-size: 25px;
`;

export const Tag = styled.div`
text-decoration: none;
font-size: 18px;
`;

export const Location = styled.div`
font-size: 20px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 80px;
  border-radius: 5px;
  // background-color: rgba(123, 137, 143, 0.719);
`;

export const Label = styled.div`
  display: block;
  margin: 5px;
  font-size: 13px;
`;

export const Quantity = styled.div`
  display: block;
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
`;