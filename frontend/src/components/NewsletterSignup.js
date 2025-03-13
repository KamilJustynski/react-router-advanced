import { useEffect, useRef } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  const inputRef = useRef();

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      inputRef.current.value = "";
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method="post"
      className={classes.newsletter}
      action="/newsletter"
    >
      <input
        ref={inputRef}
        name="email"
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
