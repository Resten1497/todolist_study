import styled from "styled-components";
import { useRef } from "react";

export default function Form({ pushTodo }) {
  const todoInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    let { value } = todoInput.current;
    console.log(value);
    pushTodo(value); // todo 배열에 input 값 추가
    todoInput.current.value = "";
  };

  return (
    <TodoForm onSubmit={handleSubmit}>
      <TodoInput ref={todoInput} type="text" placeholder="할 일을 입력하세요" />
      <AddButton>추가</AddButton>
    </TodoForm>
  );
}

const TodoForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 4rem 0;
`;

const AddButton = styled.button`
  border: 0.8rem solid #00462a;
  font-weight: 600;
  border-left: none;
  width: 8rem;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 5rem;
  border: 0.8rem solid #00462a;
  padding-left: 1rem;
`;
