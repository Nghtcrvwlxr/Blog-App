import React, {FC} from "react";

import styled from "styled-components";

interface ModalWindowProps {
    className?: string;
    children: React.ReactNode;
}

export const ModalWindow: FC<ModalWindowProps> = ({className, children}) => {
    return (
        <Window className={className}>
            {children}
        </Window>
    );
};

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
