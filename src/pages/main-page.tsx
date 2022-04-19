import React, { FC } from "react";

import styled from "styled-components";

import { CardList } from "../components/card-list/card-list";
import { CreatePostWindow } from "../components/modal-windows/create-post-window/create-post-window";
import { toggleModal } from "../store/slices/blog-slice";
import { useTypedDispatch } from "../store/utils";

export const MainPage: FC = () => {
  const dispatch = useTypedDispatch();
  return (
    <>
      <AppTitle>Blog App</AppTitle>
      <CardList />
      <AddButton onClick={() => dispatch(toggleModal("createWindowVisible"))}>
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
  }
`;

const AddButton = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 100px;
  height: 50px;
  font-family: Roboto, serif;
  font-size: 20px;
  color: white;
  background-color: dodgerblue;
  border: 1px solid steelblue;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  @media (min-width: 1800px) {
    right: 2rem;
    bottom: 2rem;
    width: 150px;
    height: 75px;
    font-size: 32px;
  }
  @media (max-width: 768px) {
    right: 1rem;
    bottom: 1rem;
    width: 70px;
    height: 70px;
    border-radius: 100%;
  }
`;
