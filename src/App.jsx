import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  // const toggle = () => {
  //   setDark(!dark);
  // };
  return (
    <div
      className="min-h-screen flex flex-col gp-3"
      data-theme={dark ? "dark" : "light"}
    >
      <h1 className="text-3xl font-bold underline text-pink-600">
        Hello world!
      </h1>
      <input
        type="checkbox"
        className="toggle"
        // onClick={toggle}
        checked={dark}
        onChange={(e) => {
          setDark(e.target.checked);
        }}
      />
      <hr />
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
    </div>
  );
}

export default App;