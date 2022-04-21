import { useQuery } from "react-query";
import { Hello } from "../../api";

const ConfigPage = () => {
  const { isLoading, isError, data } = useQuery(["test"], Hello(), {
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>LOADING...Hello</div>;
  if (isError) return <div>ERROR :( Hello</div>;

  return (
    <div>
      <div>CONFIGPAGE</div>
      <div>{data}</div>
    </div>
  );
};
export default ConfigPage;
