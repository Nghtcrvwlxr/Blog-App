import React, {FC} from 'react';
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import {MainPage} from "../pages/main-page";
import {PostPage} from "../pages/post-page";

export const App: FC = () => {
    return (
        <AppContainer>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/posts/:id" element={<PostPage />} />
                <Route
                    path="*"
                    element={<h3>This page does not exist</h3>}
                />
            </Routes>
        </AppContainer>
    );
};

const AppContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 768px) {
    padding: 0 50px;
  };
  @media (max-width: 425px) {
    padding: 0;
  };
`;

