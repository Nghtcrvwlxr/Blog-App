import React, { FC } from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {selectPost} from "../../store/slices/blog-slice";

interface CardListItemProps {
    id: number;
    title: string;
    content: string;
}

export const CardListItem: FC<CardListItemProps> = ({id, title, content}) => {
    const dispatch = useTypedDispatch();

    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardBody>
                <span>{content}</span>
            </CardBody>
            <SelectButton to="/post" onClick={() => dispatch(selectPost(id))}>
                view post
            </SelectButton>
        </Card>
    );
};

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  list-style-type: none;
`;

const CardTitle = styled.h3`
  text-align: center;
  margin: 0;
  font-family: Roboto, serif;
  font-size: 16px;
  font-weight: 700;
`;

const CardBody = styled.div`
  box-sizing: border-box;
  width: 300px;
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