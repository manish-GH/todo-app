import db from "./firebase";

export const Todo = (props) => {
  return (
    <div>
      {props.todo.todo}
      <button
        onClick={() => db.collection("todos").doc(props.todo.id).delete()}
      >
        Delete
      </button>
    </div>
  );
};
