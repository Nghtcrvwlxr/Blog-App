import React, { FC } from "react";

import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import styled from "styled-components";

import { useTypedDispatch } from "../../store/utils";

interface AppOverlayProps {
  onClickFn: ActionCreatorWithPayload<string>;
  modalType: string;
}

export const Overlay: FC<AppOverlayProps> = ({ onClickFn, modalType }) => {
  const dispatch = useTypedDispatch();

  return <AppOverlay onClick={() => dispatch(onClickFn(modalType))} />;
};

const AppOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.75;
`;
