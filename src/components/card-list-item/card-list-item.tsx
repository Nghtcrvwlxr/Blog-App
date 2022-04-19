import React, { FC } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

interface CardListItemProps {
  id: number;
  title: string;
  content: string;
}

export const CardListItem: FC<CardListItemProps> = ({ id, title, content }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardBody>
        <p>{content}</p>
      </CardBody>
      <SelectButton to={`/posts/${id}`}>view post</SelectButton>
    </Card>
  );
};

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 350px;
  box-sizing: border-box;
  list-style-type: none;
  @media (min-width: 1441px) {
    width: 375px;
    height: 375px;
  }
  @media (max-width: 1440px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
  }
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
  font-family: Roboto, serif;
  height: 25px;
  font-size: 16px;
  line-height: 18px;
  font-weight: 700;
  overflow: hidden;
`;

const CardBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background-color: white;
  border: 1px solid black;
  height: 100%;
  overflow: hidden;
`;

const SelectButton = styled(Link)`
  box-sizing: border-box;
  margin-top: 1rem;
  padding: 5px;
  width: 100%;
  font-family: Roboto, serif;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  color: white;
  background-color: dodgerblue;
  border: 1px solid steelblue;
  cursor: pointer;
`;
