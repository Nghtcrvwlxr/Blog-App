import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BlogItem, BlogState } from "../../utils/types";

const initialState: BlogState = {
  data: [
    {
      id: 1,
      title: "Sample Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
    {
      id: 2,
      title: "Sample Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
    {
      id: 3,
      title: "Sample Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
    {
      id: 4,
      title: "Sample Title 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
    {
      id: 5,
      title: "Sample Title 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
    {
      id: 6,
      title: "Sample Title 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid doloribus labore perspiciatis repudiandae voluptates. Accusamus aperiam, asperiores aut, dolore, dolorem ducimus eligendi excepturi labore laudantium nulla placeat quibusdam quod voluptas.",
    },
  ],
  createWindowVisible: false,
  confirmWindowVisible: false,
};

const blogSlice = createSlice({
  name: "blogReducer",
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<{ title: string; content: string }>) {
      let newId: number;
      if (!state.data.length) {
        newId = 1;
      } else {
        newId = state.data[state.data.length - 1].id + 1;
      }
      const newItem: BlogItem = {
        id: newId,
        title: action.payload.title.trim(),
        content: action.payload.content.trim(),
      };
      state.data.push(newItem);
    },
    updatePost(
      state,
      action: PayloadAction<{ id: number; title: string; content: string }>
    ) {
      const index = state.data.findIndex(
        (element) => element.id === action.payload.id
      );
      state.data[index].title = action.payload.title.trim();
      state.data[index].content = action.payload.content.trim();
    },
    deletePost(state, action: PayloadAction<number>) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    toggleModal(state, action: PayloadAction<string>) {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { reducer: blogReducer } = blogSlice;

export const { addPost, updatePost, deletePost, toggleModal } =
  blogSlice.actions;
