import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {toggleModal, updatePost} from "../../store/slices/blog-slice";

import {ConfirmWindow} from "../modal-windows/confirm-window/confirm-window";
import {Button} from "../buttons/button";
import {Form} from "../form/form";

import {BlogItem} from "../../utils/types";

interface PostDetailsProps {
    post: BlogItem;
}

export const PostDetails: FC<PostDetailsProps> = ({post}) => {
    const dispatch = useTypedDispatch();
    let navigate = useNavigate();

    const onFormSubmit = (title: string, content: string) => {
        dispatch(updatePost({id: post.id, title: title, content: content}));
        navigate("/");
    };
    const onDelete = () => {
        dispatch(toggleModal("confirm"));
    };

    return (
        <>
            <PostTitle>Post: {post.title}</PostTitle>
            <PostEditForm id={"change-form"} initialTitle={post.title} initialContent={post.content} onSubmitFn={onFormSubmit} />
            <ButtonsWrapper>
                <RemoveButton onClick={() => onDelete()}>Remove</RemoveButton>
                <SaveButton form="change-form">Save</SaveButton>
            </ButtonsWrapper>
            <ConfirmWindow post={post} />
        </>
    );
};

const PostTitle = styled.h3`
  margin-top: 3rem;
  font-family: Roboto, serif;
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 768px) {
    margin-top: 1rem;
  };
`;

const PostEditForm = styled(Form)`
  flex: 1 0 auto;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FormButton = styled(Button)`
  width: 250px;
  height: 50px;
  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
  };
  @media (max-width: 425px) {
    width: 100px;
    height: 40px;
  };
`;

const RemoveButton = styled(FormButton)`
  background-color: palevioletred;
  border: 1px solid red;
`;

const SaveButton = styled(FormButton)`
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;
