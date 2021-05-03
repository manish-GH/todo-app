import "./App.css";
import { useState, useEffect } from "react";
import { Todo } from "./Todo";
import db from "./firebase";
import firebase from "firebase";
import uuid from "react-uuid";

function App() {
  const [data, setData] = useState([]);
  // const [id,setId] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
        // setId(snapshot.docs.map((doc)=>doc.data().id))
      });
  }, [input]);

  useEffect(() => {
    console.log("data: ", data);
  }, [data]);

  const submitHandeler = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      id: uuid(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" disabled={!input} onClick={submitHandeler}>
          Todo
        </button>
      </form>
      <ul>
        {data.map((data) => (
          <Todo todo={data} />
        ))}
      </ul>
    </div>
  );
}

export default App;
