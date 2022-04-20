import { useQuery } from "react-query";
import { getRecommendation } from "../../api";
import RecordPlayer from "../../components/organism/record-player";

const HomePage = () => {
  const { isLoading, isError, data } = useQuery(
    ["recommend"],
    getRecommendation(),
    {
      staleTime: 24 * 60 * 60 * 1000,
    }
  );

  if (isLoading) return <div>LOADING...Song</div>;
  if (isError) return <div>ERROR :( Song</div>;

  return (
    <div>
      {data.seeds.map((seed, idx) => (
        <div key={idx}> {seed.id}</div>
      ))}
      {data.tracks.map((track, idx) => (
        <div key={idx}>
          <img src={track.album.images[1].url} alt="" />
          <div>{track.artists[0].name}</div>
          <div>{track.album.name}</div>
          <RecordPlayer uri={track.uri} />
        </div>
      ))}
    </div>
  );
};
export default HomePage;
