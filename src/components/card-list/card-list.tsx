import React from "react";

import styled from "styled-components";

import {CardListItem} from "../card-list-item/card-list-item";

import {useTypedSelector} from "../../store/utils";

export const CardList = () => {
    const data = useTypedSelector(state => state.blogReducer.data);

    const elements = data.map((item) => {
        const {id, title, content} = item;
        return (
            <CardListItem key={id} id={id} title={title} content={content}/>
        );
    });

    return (
        <CardsWrapper>
            {elements}
        </CardsWrapper>
    );
};

const CardsWrapper = styled.ul`
  display: grid;
  grid-template: repeat(3, auto) / repeat(3, auto);
  grid-auto-flow: row;
  justify-content: space-between;
  row-gap: 3rem;
  padding: 0;
`;