import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1 className="h-[100vh] bg-yellow-300 text-xl font-semibold text-amber-700 text-center pt-[300px]  ">
        Oops.. Something has went wrong.
      </h1>
    </div>
  );
};

export default Error;
