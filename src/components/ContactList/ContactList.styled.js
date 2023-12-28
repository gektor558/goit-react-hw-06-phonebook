import styled from 'styled-components';

export const PeopleList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
`;

export const Text = styled.p`
  margin-right: 20px;
`;

export const Button = styled.button`
  background-color: #d85e79;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #a22943;
  }
`;

export const TextNote = styled.p`
  color: navy;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  text-shadow: #fc0 1px 0 10px;
`;
