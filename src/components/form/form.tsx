import React, { FC, useState } from "react";

import styled from "styled-components";

type SubmitFunction = (a: string, b: string) => void;

interface FormProps {
  className?: string;
  id: string;
  initialTitle: string;
  initialContent: string;
  onSubmitFn: SubmitFunction;
}

export const Form: FC<FormProps> = ({
  className,
  id,
  initialTitle,
  initialContent,
  onSubmitFn,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [titleValid, setTitleValid] = useState(true);
  const [contentValid, setContentValid] = useState(true);

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
    if (event.target.value.trim()) {
      setTitleValid(true);
    }
  };
  const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContent(event.target.value);
    if (event.target.value.trim()) {
      setContentValid(true);
    }
  };
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title.trim() && content.trim()) {
      onSubmitFn(title, content);
      setTitle("");
      setContent("");
    }
    if (!title.trim().length) {
      setTitleValid(false);
    }
    if (!content.trim().length) {
      setContentValid(false);
    }
  };

  return (
    <AppForm className={className} id={id} onSubmit={onFormSubmit}>
      <TitleInput
        value={title}
        maxLength={300}
        isValid={titleValid}
        onChange={onInputChange}
      />
      <PostContent
        value={content}
        isValid={contentValid}
        onChange={onContentChange}
      />
    </AppForm>
  );
};

const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface TitleInputProps {
  isValid: boolean;
}

const TitleInput = styled.input<TitleInputProps>`
  box-sizing: border-box;
  font-size: 20px;
  padding: 5px;
  width: 100%;
  ${(props) => !props.isValid && `border-color: red`};
`;

interface PostContentProps {
  isValid: boolean;
}

const PostContent = styled.textarea<PostContentProps>`
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 1rem;
  resize: none;
  ${(props) => !props.isValid && `border-color: red`};
`;
