import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {deletePost, toggleModal} from "../../../store/slices/blog-slice";

import {ModalWindow} from "../modal-window";
import {Overlay} from "../../overlay/overlay";
import {Button} from "../../buttons/button";

import {BlogItem} from "../../../utils/types";

interface ConfirmWindowProps {
    post: BlogItem;
}

export const ConfirmWindow: FC<ConfirmWindowProps> = ({post}) => {
    const dispatch = useTypedDispatch();
    const isShown = useTypedSelector(state => state.blogReducer.confirmWindowOpen);

    let navigate = useNavigate();

    const onDelete = () => {
        dispatch(deletePost(post.id));
        dispatch(toggleModal("confirm"));
        navigate("/");
    };

    if(!isShown) {
        return null;
    }
    return (
        <>
            <Overlay modalType={"confirm"} onClickFn={toggleModal} />
            <ModalWindow>
                <ModalWindowTitle>Are you sure you want to delete this post?</ModalWindowTitle>
                <ButtonsWrapper>
                    <DeclineButton onClick={() => dispatch(toggleModal("confirm"))}>No</DeclineButton>
                    <ConfirmButton onClick={() => onDelete()}>Yes</ConfirmButton>
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
  };
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
