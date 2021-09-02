import "./styles.css";

import CompDialog from "./components/Dialog";

const user = [
  {
    id: 1,
    name: "Jhon",
    age: 22,
    eye: "blue"
  },
  {
    id: 2,
    name: "Albert",
    age: 18,
    eye: "black"
  },
  {
    id: 3,
    name: "Clark",
    age: 42,
    eye: "gray"
  },
  {
    id: 4,
    name: "Simpson",
    age: 12,
    eye: "dark"
  }
];

export default function App() {
  return (
    <div className="App">
      {user.map((user) => (
        <CompDialog user={user} />
      ))}
    </div>
  );
}
