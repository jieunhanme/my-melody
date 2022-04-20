import { useQuery } from "react-query";
import { getPlaylist } from "../../api";

const MusicPage = () => {
  const { isLoading, isError, data } = useQuery(["playlist"], getPlaylist(), {
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (isLoading) return <div>Loading playlist</div>;
  if (isError) return <div>Error playlist</div>;

  console.log("??data", data);
  return <div>MUSICPAGE</div>;
};
export default MusicPage;
