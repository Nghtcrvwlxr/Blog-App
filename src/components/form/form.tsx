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

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };
  const onContentChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setContent(event.target.value);
  };
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title.trim().length && content.trim().length) {
      onSubmitFn(title, content);
      setTitle("");
      setContent("");
    }
  };

  return (
    <AppForm className={className} id={id} onSubmit={onFormSubmit}>
      <TitleInput
        required
        value={title}
        maxLength={300}
        onChange={onInputChange}
      />
      <PostContent required value={content} onChange={onContentChange} />
    </AppForm>
  );
};

const AppForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleInput = styled.input`
  box-sizing: border-box;
  font-size: 20px;
  padding: 5px;
  width: 100%;
`;

const PostContent = styled.textarea`
  box-sizing: border-box;
  margin-top: 1rem;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 1rem;
  resize: none;
`;
