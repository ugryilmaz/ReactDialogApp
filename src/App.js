import "./styles.css";

import CompDialog from "./components/Dialog";

const user = [
  {
    id: 1,
    name: "Jhon",
    age: 22,
    eye: "blue",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    name: "Albert",
    age: 18,
    eye: "black",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 3,
    name: "Clark",
    age: 42,
    eye: "gray",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 4,
    name: "Simpson",
    age: 12,
    eye: "dark",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
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
