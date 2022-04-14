import React, {FC} from "react";

import styled from "styled-components";

interface AppButtonProps {
    form?: string;
    className?: string;
    onClick?: any;
    children: string;
}

export const Button: FC<AppButtonProps> = ({form, className, onClick, children}) => {
    return (
        <AppButton form={form} className={className} onClick={onClick}>
            {children}
        </AppButton>
    );
};

const AppButton = styled.button`
  margin-top: 1rem;
  width: 150px;
  height: 35px;
  font-family: Roboto, serif;
  font-size: 20px;
  color: white;
  background-color: darkgrey;
  border: 1px solid black;
  cursor: pointer;
`;
