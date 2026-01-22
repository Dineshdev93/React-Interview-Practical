/*
1. Why do you use AbortController in React API calls?

Answer:
AbortController is used to cancel an in-flight API request when a component unmounts or when a new request is triggered. 
This prevents memory leaks and avoids React warnings such as “Can’t perform a React state update on an unmounted component.” 
It ensures that state updates only occur for active components.
*/

/*
   2. Where should AbortController be implemented in useEffect?

Answer:
It should be created inside useEffect and aborted inside the cleanup function that useEffect returns. 
The cleanup function runs when the component unmounts or before the effect re-runs.
*/

/*
  3. What happens if you don’t abort a fetch request?

Answer:
If a fetch resolves after the component unmounts, React may attempt to update state on an unmounted component.
 This can lead to memory leaks, unnecessary network usage, and React warnings in development mode.
*/

/*
4. Why do you check response.ok after fetch?

Answer:
fetch only rejects on network errors, not HTTP errors.
response.ok ensures that HTTP status codes like 404 or 500 are handled manually by throwing an error.

5. How do you detect an aborted request in the catch block?

Answer:
When a request is aborted, the error name is "AbortError". We check it before setting error state:
*/

/*
  Bonus: One-Line “Senior Developer” Answer

If you want to sound strong in interviews:

I use AbortController in the useEffect cleanup to cancel in-flight requests during unmounts or re-renders,
 preventing memory leaks, race conditions, and invalid state updates in React’s async rendering model.
*/

interface posts {
  id: number;
  title: string;
}
import { useState, useEffect } from "react";

export const Apifetcher = () => {
  const [posts, setPosts] = useState<posts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    const fetchdata = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal: controller.signal,
          },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok !");
        }
        setPosts(await response.json());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchdata();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h2>Api fetcher</h2>
      {loading ? (
        <h3>Loading</h3>
      ) : (
        posts.map((post) => {
          return (
            <>
              <h4 key={post.id}>{post.title}</h4>
            </>
          );
        })
      )}
    </>
  );
};
