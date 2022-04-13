import React, {FC} from 'react';

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {toggleCreateModal} from "../../store/slices/blog-slice";

import {CardList} from "../card-list/card-list";
import {CreatePostWindow} from "../modal-windows/create-post-window";

export const MainPage: FC = () => {
    const dispatch = useTypedDispatch();

    return (
        <>
            <AppTitle>Blog App</AppTitle>
            <CardList/>
            <AddButton onClick={() => dispatch(toggleCreateModal())}>
                + add
            </AddButton>
            <CreatePostWindow/>
        </>
    );
};


const AppTitle = styled.h1`
  font-family: Roboto, serif;
  font-size: 48px;
  text-align: center;
  margin-top: 3rem;
`;

const AddButton = styled.button`
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  width: 150px;
  height: 50px;
  font-family: Roboto, serif;
  font-size: 20px;
  color: white;
  background-color: dodgerblue;
  border: 1px solid steelblue;
  cursor: pointer;
`;
