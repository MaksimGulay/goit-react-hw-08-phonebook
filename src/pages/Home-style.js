import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  justify-content: center; 
  align-items: center; 
  width: 400px;
  padding: 20px;
  flex-direction: column;
  text-align: center; 
  
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;
