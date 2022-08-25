import { useState } from "react";

export default function Button() {
  const [clicked, setClicked] = useState(0);

  return (
    <div>
      <a
        style={{ margin: "1em" }}
        href="#"
        role="button"
        onClick={() => setClicked(clicked + 1)}
      >
        Test! {clicked}
      </a>
      <a href="#" role="button" onClick={() => setClicked(0)}>
        Reset
      </a>
    </div>
  );
}
