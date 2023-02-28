import "./styles/index.css";

const ErrorFallback = ({ error }) => {
  return (
    <div role={"alert"} className="errorfallback__container">
      <p>Something went wrong!</p>
      <pre>{error.message}</pre>
      <p>
        There might be network issue so please reload or try again after
        sometime.
      </p>
      <button onClick={() => window.location.reload()}>reload</button>
    </div>
  );
};

export default ErrorFallback;
