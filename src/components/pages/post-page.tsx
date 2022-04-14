import React, {FC} from 'react';
import {Link, useParams,} from "react-router-dom";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {PostDetails} from "../post-details/post-details";
import {Button} from "../buttons/button";

export const PostPage: FC = () => {
    const {id} = useParams<{id?: string}>();
    const postId = parseInt(id!);

    const selectedPost = useTypedSelector(state => state.blogReducer.data.find((item) => item.id === postId));

    if(!selectedPost) {
        return (
            <>
                <Link to="/">
                    <ReturnButton>
                        go back
                    </ReturnButton>
                </Link>
                <h2>Post not found</h2>
            </>
        );
    } else {
        return (
            <Wrapper>
                <Link to="/">
                    <ReturnButton>
                        go back
                    </ReturnButton>
                </Link>
                <PostDetails post={selectedPost} />
            </Wrapper>
        );
    }
};

const Wrapper = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReturnButton = styled(Button)`
  width: 200px;
  height: 50px;
  @media (max-width: 768px) {
    width: 150px;
    height: 40px;
  };
  @media (max-width: 425px) {
    width: 100px;
  };
`;
