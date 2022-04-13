import React, {FC, useState} from 'react';

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {addPost, toggleCreateModal} from "../../store/slices/blog-slice";

export const CreatePostWindow: FC = () => {
    const dispatch = useTypedDispatch();
    const isShown = useTypedSelector(state => state.blogReducer.createWindowOpen);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    };
    const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setContent(event.target.value);
    };
    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(addPost({title, content}));
        dispatch(toggleCreateModal());
    };

    if(isShown) {
        return (
            <>
                <Overlay onClick={() => dispatch(toggleCreateModal())}/>
                <Window>
                    <ModalWindowTitle>Create new post</ModalWindowTitle>
                    <ItemAddForm id="add-form" onSubmit={onFormSubmit}>
                        <TitleInput required value={title} onChange={onInputChange}/>
                        <PostContent required value={content} onChange={onContentChange}/>
                    </ItemAddForm>
                    <ButtonsWrapper>
                        <FormButton onClick={() => dispatch(toggleCreateModal())}>Close</FormButton>
                        <FormButton form="add-form">Add</FormButton>
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
  width: 500px;
  height: 400px;
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

const ItemAddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TitleInput = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  padding: 5px;
  width: 100%;
`;

const PostContent = styled.textarea`
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 1rem;
  resize: none;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormButton = styled.button`
  margin: 1rem 0 0 3rem;
  width: 100px;
  height: 40px;
  font-family: Roboto, serif;
  font-size: 14px;
  color: white;
  cursor: pointer;
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;
