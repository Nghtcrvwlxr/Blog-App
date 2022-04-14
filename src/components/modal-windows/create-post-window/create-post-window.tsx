import React, { FC } from "react";

import styled from "styled-components";

import { addPost, toggleModal } from "../../../store/slices/blog-slice";
import { useTypedDispatch, useTypedSelector } from "../../../store/utils";
import { Button } from "../../buttons/button";
import { Form } from "../../form/form";
import { Overlay } from "../../overlay/overlay";
import { ModalWindow } from "../modal-window";

export const CreatePostWindow: FC = () => {
  const dispatch = useTypedDispatch();
  const isShown = useTypedSelector(
    (state) => state.blogReducer.createWindowOpen
  );

  const onFormSubmit = (title: string, content: string) => {
    dispatch(addPost({ title, content }));
    dispatch(toggleModal("create"));
  };
  const onDelete = () => {
    dispatch(toggleModal("create"));
  };

  if (isShown) {
    return (
      <>
        <Overlay onClickFn={toggleModal} modalType="create" />
        <CreatePostModalWindow>
          <ModalWindowTitle>Create new post</ModalWindowTitle>
          <PostAddForm
            id="add-form"
            initialTitle=""
            initialContent=""
            onSubmitFn={onFormSubmit}
          />
          <ButtonsWrapper>
            <CloseButton onClickFn={() => onDelete()}>Close</CloseButton>
            <AddButton form="add-form">Add</AddButton>
          </ButtonsWrapper>
        </CreatePostModalWindow>
      </>
    );
  }
  return null;
};

const CreatePostModalWindow = styled(ModalWindow)`
  width: 500px;
  height: 400px;
  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  }
  @media (max-width: 425px) {
    width: 250px;
    height: 250px;
  }
`;

const ModalWindowTitle = styled.h4`
  font-family: Roboto, serif;
  margin: 0.5rem;
  text-align: center;
`;

const PostAddForm = styled(Form)`
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 425px) {
    justify-content: space-between;
  }
`;

const ModalButton = styled(Button)`
  @media (max-width: 768px) {
    width: 100px;
    height: 25px;
    font-size: 16px;
  }
`;

const CloseButton = styled(ModalButton)`
  background-color: palevioletred;
  border: 1px solid red;
`;

const AddButton = styled(ModalButton)`
  margin-left: 1rem;
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;
