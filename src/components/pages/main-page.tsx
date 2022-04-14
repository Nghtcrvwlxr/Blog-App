import React, {FC} from 'react';

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {toggleModal} from "../../store/slices/blog-slice";

import {CardList} from "../card-list/card-list";
import {CreatePostWindow} from "../modal-windows/create-post-window/create-post-window";

export const MainPage: FC = () => {
    const dispatch = useTypedDispatch();

    return (
        <>
            <AppTitle>Blog App</AppTitle>
            <CardList />
            <AddButton onClick={() => dispatch(toggleModal("create"))}>
                + add
            </AddButton>
            <CreatePostWindow />
        </>
    );
};


const AppTitle = styled.h1`
  font-family: Roboto, serif;
  font-size: 48px;
  text-align: center;
  margin-top: 3rem;
  @media (max-width: 768px) {
    font-size: 36px;
  };
`;

const AddButton = styled.button`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  width: 150px;
  height: 50px;
  font-family: Roboto, serif;
  font-size: 20px;
  color: white;
  background-color: dodgerblue;
  border: 1px solid steelblue;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  @media (max-width: 768px) {
    right: 1rem;
    bottom: 1rem;
    width: 75px;
    height: 75px;
    border-radius: 100%;
  };
`;
