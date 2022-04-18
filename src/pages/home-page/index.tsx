import axios from "axios";
import { useQuery } from "react-query";

var client_id = "902606c57949490ca529400ea84dabc4";
var client_secret = "66543bf6d8ac4faf869d1fc3a7f8de50";

const HomePage = () => {
  const { status: authStatus, data: tokenData } = useQuery(
    ["authorization"],
    async () => {
      const { data } = await axios.post(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: "Basic " + btoa(client_id + ":" + client_secret),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      return data;
    }
  );

  const { status: userStatus, data: UserData } = useQuery(
    ["access"],
    async () => {
      const { data } = await axios.get(
        "https://api.spotify.com/v1/users/jmperezperez",
        {
          headers: {
            Authorization: "Bearer " + tokenData?.access_token,
          },
        }
      );
      return data;
    }
  );

  if (authStatus === "loading") return <div>LOADING...AUTH</div>;
  if (authStatus === "error") return <div>ERROR :( AUTH</div>;

  if (userStatus === "loading") return <div>LOADING...User</div>;
  if (userStatus === "error") return <div>ERROR :( User</div>;

  return (
    <div>
      <div>
        <a href={UserData.external_urls.spotify} target="example">
          <img src={UserData.images[0].url} alt="" />
        </a>
      </div>
      <div>Name {UserData.display_name}</div>
      <div>ID {UserData.id}</div>
      <div>Followers {UserData.followers.total}</div>
    </div>
  );
};
export default HomePage;
