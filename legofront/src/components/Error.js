import { useRouteError, useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Something went wrong</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default Error;
