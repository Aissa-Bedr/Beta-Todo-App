import React, { FC, useEffect, useState } from "react";
import Div from "../../../build/Div";
import Flex from "../../../build/Flex";
import { MdOutlineDone } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { nanoid } from "nanoid";
import Description from "../../private/Description";

interface Todos {
  id: string;
  text: string;
  finished: boolean;
}

interface TodosEffects extends Todos, MainProps {
  finishTodo: (id: string) => void;
  reloadTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

interface MainProps {
  rounded: boolean;
  showAnimation: boolean;
}

const Todo: FC<TodosEffects> = ({
  id,
  text,
  finished,
  finishTodo,
  reloadTodo,
  removeTodo,
  rounded,
  showAnimation,
}) => {
  const [finishTodoDesc, setFnishTodoDesc] = useState(false);
  const [reloadTodoDesc, setReloadTodoDesc] = useState(false);
  const [removeTodoDesc, setRemoveTodoDesc] = useState(false);

  return (
    <Flex
      key={id}
      className={`w-full items-center justify-between dark:bg-light dark:text-secondary shadow-sm shadow-grey dark:shadow-none
      px-4 py-1 ${rounded && "rounded"}`}
      direction="row"
    >
      <Div className={`text-secondary ${finished && "line-through text-grey"}`}>
        {text}
      </Div>
      <Flex className="gap-2" direction="row">
        <Div
          className="relative"
          onMouseEnter={() => setRemoveTodoDesc(true)}
          onMouseLeave={() => setRemoveTodoDesc(false)}
        >
          <FiTrash2
            className="hover:text-red-700 duration-500 cursor-pointer"
            onClick={() => removeTodo(id)}
          />
          {showAnimation && (
            <Description
              text="remove Task"
              action={removeTodoDesc}
              useTop={false}
              rounded={rounded}
            />
          )}
        </Div>
        {finished && (
          <Div
            className="relative"
            onMouseEnter={() => setReloadTodoDesc(true)}
            onMouseLeave={() => setReloadTodoDesc(false)}
          >
            <TfiReload
              className="hover:text-green-500 duration-500 cursor-pointer"
              onClick={() => reloadTodo(id)}
            />
            {showAnimation && (
              <Description
                text="reload Task"
                action={reloadTodoDesc}
                useTop={false}
                rounded={rounded}
              />
            )}
          </Div>
        )}
        {!finished && (
          <Div
            className="relative"
            onMouseEnter={() => setFnishTodoDesc(true)}
            onMouseLeave={() => setFnishTodoDesc(false)}
          >
            <MdOutlineDone
              className="hover:text-blue-500 duration-500 cursor-pointer"
              onClick={() => finishTodo(id)}
            />
            {showAnimation && (
              <Description
                text="finish Task"
                action={finishTodoDesc}
                useTop={false}
                rounded={rounded}
              />
            )}
          </Div>
        )}
      </Flex>
    </Flex>
  );
};

const Main: FC<MainProps> = ({ rounded, showAnimation }) => {
  const [todos, setTodos] = useState<Todos[]>(
    JSON.parse(`${localStorage.getItem("todos")}`) || []
  );
  const [text, setText] = useState("");
  const [addBtnDesc, setaddBtnDesc] = useState(false);

  function addTodo(): void {
    if (!text) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: nanoid(), text: text, finished: false },
    ]);
    setText("");
    document.querySelector("input")!.value = "";
  }

  function finishTodo(id: string): void {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        id === todo.id ? { ...todo, finished: true } : todo
      )
    );
  }

  function reloadTodo(id: string): void {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        id === todo.id ? { ...todo, finished: false } : todo
      )
    );
  }

  function removeTodo(id: string): void {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => (id === todo.id ? !todo : todo))
    );
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const tasks = todos.map((todo) => {
    if (!todo.text) return;

    return (
      <Todo
        key={todo.id}
        {...todo}
        finishTodo={() => finishTodo(todo.id)}
        reloadTodo={() => reloadTodo(todo.id)}
        removeTodo={() => removeTodo(todo.id)}
        rounded={rounded}
        showAnimation={showAnimation}
      />
    );
  });

  if (todos.length < 1) {
    return (
      <Div>
        <Flex className="gap-2 mt-2">
          <input
            className={`w-full border-none outline-none py-1 px-4 dark:bg-light dark:text-secondary shadow-sm shadow-grey dark:shadow-none ${
              rounded && "rounded"
            }`}
            type="text"
            placeholder="Enter Todo"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => addTodo()}
            className={`relative w-24 bg-purple-300 dark:bg-blue-300 text-secondary dark:text-light ${
              rounded && "rounded"
            }`}
            onMouseEnter={() => setaddBtnDesc(true)}
            onMouseLeave={() => setaddBtnDesc(false)}
          >
            <p>Add</p>
            {showAnimation && (
              <Description
                text="Add Task"
                action={addBtnDesc}
                useTop={true}
                rounded={rounded}
              />
            )}
          </button>
        </Flex>
        <Div
          className={`mt-2 p-0.5 text-center dark:bg-light dark:text-secondary shadow-sm shadow-grey dark:shadow-none ${
            rounded && "rounded"
          }`}
        >
          <p className="font-bold text-sm">No Todos To Show !</p>
        </Div>
      </Div>
    );
  }

  return (
    <Div>
      <Flex className="gap-2 mt-2">
        <input
          className={`w-full border-none outline-none py-1 px-4 dark:bg-light dark:text-secondary shadow-sm shadow-grey dark:shadow-none ${
            rounded && "rounded"
          }`}
          type="text"
          placeholder="Enter Todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => addTodo()}
          className={`relative w-24 bg-purple-300 dark:bg-blue-300 text-secondary dark:text-light ${
            rounded && "rounded"
          }`}
          onMouseEnter={() => setaddBtnDesc(true)}
          onMouseLeave={() => setaddBtnDesc(false)}
        >
          <p>Add</p>
          {showAnimation && (
            <Description
              text="Add Task"
              action={addBtnDesc}
              useTop={true}
              rounded={rounded}
            />
          )}
        </button>
      </Flex>
      {tasks.length > 0 && (
        <Div>
          <Div className="flex flex-col gap-2 mt-2">{tasks}</Div>
          <Div
            className={`bg-darkBlue text-light dark:bg-light dark:text-secondary w-fit p-0.5 mt-2 font-bold text-sm ${
              rounded && "rounded"
            }`}
          >
            Todos: {todos.length}
          </Div>
        </Div>
      )}
    </Div>
  );
};

export default Main;
