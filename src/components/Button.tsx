import { useState } from "react";

export default function Button() {
  const [clicked, setClicked] = useState(0);

  return (
    <div>
      <button onClick={() => setClicked(clicked + 1)}>Test! {clicked}</button>
      <button onClick={() => setClicked(0)}>reset</button>
    </div>
  );
}
