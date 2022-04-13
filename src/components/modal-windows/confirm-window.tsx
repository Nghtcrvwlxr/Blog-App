import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {deletePost, toggleConfirmModal} from "../../store/slices/blog-slice";

export const ConfirmWindow: FC = () => {
    const dispatch = useTypedDispatch();
    const isShown = useTypedSelector(state => state.blogReducer.confirmWindowOpen);
    const selectedPost = useTypedSelector(state => state.blogReducer.selectedPost);

    let navigate = useNavigate();

    const onDelete = () => {
        dispatch(deletePost(selectedPost!.id));
        navigate("/");
    };

    if(isShown) {
        return (
            <>
                <Overlay onClick={() => dispatch(toggleConfirmModal())}/>
                <Window>
                    <ModalWindowTitle>Are you sure you want to delete this post?</ModalWindowTitle>
                    <ButtonsWrapper>
                        <DeclineButton onClick={() => dispatch(toggleConfirmModal())}>No</DeclineButton>
                        <ConfirmButton onClick={() => onDelete()}>Yes</ConfirmButton>
                    </ButtonsWrapper>
                </Window>
            </>
        );
    }
    return null;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.75;
`;

const Window = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  padding: 1rem;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalWindowTitle = styled.h4`
  font-family: Roboto, serif;
  margin: 0.5rem;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalButton = styled.button`
  margin-top: 1rem;
  width: 200px;
  height: 50px;
  font-family: Roboto, serif;
  font-size: 20px;
  color: white;
  background-color: darkgrey;
  border: 1px solid black;
  cursor: pointer;
`;

const ConfirmButton = styled(ModalButton)`
  width: 150px;
  background-color: palevioletred;
  border: 1px solid red;
`;

const DeclineButton = styled(ModalButton)`
  width: 150px;
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;
