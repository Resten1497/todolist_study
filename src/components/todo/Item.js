import styled, { css } from "styled-components";
import { useState, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

export default function Item({ todoList, deleteTodo }) {
  const todoLabel = useRef([]);
  const checkbox = useRef([]);

  // todo 삭제하기
  const handleDeleteClick = (index) => {
    const value = todoLabel.current[index].innerText;
    deleteTodo(value);
  };

  const handleBoxClick = (index) => {
    const { style } = todoLabel.current[index]; // 클릭한 todo의 style
    const { checked } = checkbox.current[index];
    // 체크하면 todo에 중간 줄 긋기 (toggle)
    style.textDecoration = checked ? "line-through" : null;
    style.color = checked ? "gray" : null;
  };

  return (
    <TodoLists>
      {todoList.map((todo, index) => (
        <TodoList key={todo.id}>
          <Checkbox
            ref={(box) => (checkbox.current[index] = box)}
            type="checkbox"
            id={index}
            onClick={() => handleBoxClick(index)}
          />
          <StyledLabel
            ref={(label) => (todoLabel.current[index] = label)}
            htmlFor={index}
          >
            {todo.value}
          </StyledLabel>
          <IoCloseOutline
            size="2rem"
            onClick={() => handleDeleteClick(index)}
          />
        </TodoList>
      ))}
    </TodoLists>
  );
}

const TodoLists = styled.div`
  margin-left: 0.5rem;
`;
const TodoList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
const Checkbox = styled.input`
  transform: scale(1.5);
  margin: 0 1rem;
`;
const StyledLabel = styled.label`
  margin-right: 0.5rem;
`;
