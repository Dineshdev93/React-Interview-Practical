import { useState } from "react";
import { Inputchild } from "./Inputchild";
import { Displaychild } from "./Displaychild";

/*
   ❓ Question:

What is state lifting in React?

💬 Comment:

State lifting is the process of moving state from a child component to the nearest common parent so multiple child components can share and stay synchronized with the same data.

❓ Question:

Why can’t sibling components share state directly?

💬 Comment:

React follows a unidirectional data flow, so siblings cannot communicate directly. The shared state must live in a common parent and be passed down via props.

❓ Question:

How did you implement state lifting in your example?

💬 Comment:

I stored the input value in the parent component using useState, passed the value and setter function to the input child, and passed the value to the display child so both stay in sync.
*/

export const Parent = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="d-flex flex-column column-gap-2">
      <h1>state lifting from child to parent</h1>
      <Inputchild text={text} setText={setText} />
      <Displaychild display={text} />
    </div>
  );
};
