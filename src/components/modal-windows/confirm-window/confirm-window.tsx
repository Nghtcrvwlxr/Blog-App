import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { deletePost, toggleModal } from "../../../store/slices/blog-slice";
import { useTypedDispatch, useTypedSelector } from "../../../store/utils";
import { BlogItem } from "../../../utils/types";
import { Button } from "../../buttons/button";
import { Overlay } from "../../overlay/overlay";
import { ModalWindow } from "../modal-window";

interface ConfirmWindowProps {
  post: BlogItem;
}

export const ConfirmWindow: FC<ConfirmWindowProps> = ({ post }) => {
  const dispatch = useTypedDispatch();
  const isShown = useTypedSelector(
    (state) => state.blogReducer.confirmWindowVisible
  );

  const navigate = useNavigate();

  const onDelete = () => {
    dispatch(deletePost(post.id));
    dispatch(toggleModal("confirmWindowVisible"));
    navigate("/");
  };

  if (!isShown) {
    return null;
  }
  return (
    <>
      <Overlay modalType="confirmWindowVisible" onClickFn={toggleModal} />
      <ModalWindow>
        <ModalWindowTitle>
          Are you sure you want to delete this post?
        </ModalWindowTitle>
        <ButtonsWrapper>
          <DeclineButton
            onClickFn={() => dispatch(toggleModal("confirmWindowVisible"))}
          >
            No
          </DeclineButton>
          <ConfirmButton onClickFn={onDelete}>Yes</ConfirmButton>
        </ButtonsWrapper>
      </ModalWindow>
    </>
  );
};

const ModalWindowTitle = styled.h4`
  font-family: Roboto, serif;
  margin: 0.5rem;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled(Button)`
  @media (max-width: 425px) {
    width: 100px;
  }
`;

const ConfirmButton = styled(ModalButton)`
  margin-left: 1rem;
  background-color: palevioletred;
  border: 1px solid red;
`;

const DeclineButton = styled(ModalButton)`
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;
