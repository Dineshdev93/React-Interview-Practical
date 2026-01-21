import React, { useState, useCallback, useEffect } from "react";

export const Debounce = () => {
  // ---------------------------
  // 1. State
  // ---------------------------

  //  What is debouncing in React? Why do we use it?
  // Ans . =>  Debouncing is a performance optimization technique
  //           where a function is executed only after a certain delay has passed since the last event trigger.
  //            It is commonly used in search inputs to prevent API calls or heavy computations on every keystroke.

  /*
      2. How did you implement debounce in React?

💬 Comment:

I used useEffect with setTimeout and clearTimeout to delay updating the debounced value. This ensures the function runs only when the user stops typing for a specified time.

❓ Question:

3. What problem does debounce solve?

💬 Comment:

It prevents unnecessary re-renders and excessive API calls, improving performance and user experience in input-driven components like search and filters.
   */

  // Holds what the user types immediately (controlled input)
  const [inputValue, setInputValue] = useState("");

  // Holds the filtered list AFTER debounce delay
  const [filtered, setFiltered] = useState<string[]>([]);

  // Static dataset (could be API results in real apps)
  const data = [
    "React",
    "Javascript",
    "TypeScript",
    "Vue",
    "Angular",
    "Svelte",
    "Nextjs",
  ];

  // ---------------------------
  // 2. Input Handler
  // ---------------------------

  // Runs on every keystroke
  // Updates inputValue, which triggers a re-render
  const handleInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // ---------------------------
  // 3. Debounced Function
  // ---------------------------

  // useCallback MEMOIZES this function
  // It will not be recreated on every render
  // unless `data` changes
  const debounce = useCallback((value: string) => {
    // Create a timer that delays execution
    const timer = setTimeout(() => {
      // This runs AFTER 500ms of no typing
      const result = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase()),
      );

      // Update state with filtered result
      // This triggers UI update
      setFiltered(result);
    }, 500);

    // Cleanup function
    // This cancels the previous timer if user types again
    return () => clearTimeout(timer);
  }, []);

  // ---------------------------
  // 4. Effect Hook
  // ---------------------------

  // Runs every time inputValue changes
  useEffect(() => {
    // Call debounced function
    const cleanup = debounce(inputValue);

    // React will run this cleanup BEFORE running the effect again
    // This is what "kills the old timer"
    return cleanup;
  }, [inputValue, debounce]);

  // ---------------------------
  // 5. UI
  // ---------------------------

  const [filteredData, setFilteredData] = useState<string[]>(data);
  const handleDelete = (e: string) => {
    const result = filteredData.filter((i) => i !== e);
    setFilteredData(result);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Debounce with Search</h1>

      {/* Controlled Input */}
      <input
        className="form-control w-50 mb-3"
        type="text"
        value={inputValue}
        onChange={handleInputchange}
        placeholder="Type to search..."
      />

      <h4>List</h4>

      {/* Render debounced result */}
      <ul className="list-group w-50">
        {filtered.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>

      <ul className="list-group w-50 mt-5">
        {filteredData.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={index}
          >
            {item}
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(item)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
