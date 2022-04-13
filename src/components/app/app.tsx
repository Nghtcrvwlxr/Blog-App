import React, {FC} from 'react';
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import {MainPage} from "../pages/main-page";
import {PostPage} from "../pages/post-page";

export const App: FC = () => {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/post" element={<PostPage />} />
                <Route
                    path="*"
                    element={<h3 className="center-align">This page does not exist</h3>}
                />
            </Routes>
        </Container>
    );
};

const Container = styled.div`
    padding: 0 100px;
`;

