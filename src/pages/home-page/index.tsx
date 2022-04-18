import { useQuery } from "react-query";
import { getRecommendation } from "../../services";

import { CLIENT_ID, CLIENT_SECRET } from "../../consts";

const HomePage = () => {
  const { status, data } = useQuery(
    ["recommend"],
    getRecommendation({ CLIENT_ID, CLIENT_SECRET }),
    { staleTime: 24 * 60 * 60 * 1000 }
  );

  if (status === "loading") return <div>LOADING...Song</div>;
  if (status === "error") return <div>ERROR :( Song</div>;

  const { tracks } = data;
  console.log("🚀 ~ file: index.tsx ~ line 22 ~ HomePage ~ tracks", tracks);

  return (
    <div>
      <div>
        <img src={tracks[0].album.images[1].url} alt="" />
      </div>
      <div>{tracks[0].artists[0].name}</div>
      <div>{tracks[0].name}</div>
    </div>
  );
};
export default HomePage;
