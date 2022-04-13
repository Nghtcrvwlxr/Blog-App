import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {clearSelectedPost, toggleConfirmModal, updatePost} from "../../store/slices/blog-slice";

import {ConfirmWindow} from "../modal-windows/confirm-window";

import {BlogItem} from "../../utils/types";

export const PostPage: FC = () => {
    const dispatch = useTypedDispatch();
    const selectedPost = useTypedSelector(state => state.blogReducer.selectedPost);

    const [title, setTitle] = useState(selectedPost!.title);
    const [content, setContent] = useState(selectedPost!.content);

    let navigate = useNavigate();

    useEffect(() => {
        return () => {
            dispatch(clearSelectedPost())
        }
    }, [dispatch]);

    const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value);
    };
    const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setContent(event.target.value);
    };
    const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(updatePost({id: selectedPost!.id, title: title, content: content}));
        navigate("/");
    };

    const onDelete = () => {
        dispatch(toggleConfirmModal());
    };

    const renderPostData = (post: BlogItem | null) => {
        if(post) {
            return (
                <>
                    <PostTitle>Post: {post.title}</PostTitle>
                    <form id="change-form" onSubmit={onFormSubmit}>
                        <TitleInput required value={title} onChange={onInputChange}/>
                        <PostContent required value={content} onChange={onContentChange}/>
                    </form>
                </>
            );
        } else {
            return (
                <h3>Post not found</h3>
            );
        }
    };

    return (
        <>
            <ConfirmWindow/>
            <Link to="/">
                <ReturnButton>
                    go back
                </ReturnButton>
            </Link>
            {renderPostData(selectedPost)}
            <ButtonsWrapper>
                <RemoveButton onClick={() => onDelete()}>Remove</RemoveButton>
                <SaveButton form="change-form">Save</SaveButton>
            </ButtonsWrapper>
        </>
    );
};

const ReturnButton = styled.button`
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

const RemoveButton = styled(ReturnButton)`
  width: 150px;
  background-color: palevioletred;
  border: 1px solid red;
`;

const SaveButton = styled(ReturnButton)`
  width: 150px;
  background-color: dodgerblue;
  border: 1px solid steelblue;
`;

const PostTitle = styled.h3`
  margin-top: 3rem;
  font-family: Roboto, serif;
  font-size: 24px;
  font-weight: 700;
`;

const TitleInput = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  padding: 5px;
  width: 100%;
`;

const PostContent = styled.textarea`
  box-sizing: border-box;
  margin-top: 3rem;
  min-height: 400px;
  width: 100%;
  font-size: 16px;
  padding: 1rem;
  resize: none;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
