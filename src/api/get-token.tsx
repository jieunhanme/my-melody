import axios from "axios";
import { CLIENT_ID, CLIENT_SECRET, TokenProps } from "../consts";

export const getToken = () => {
  return async () =>
    await axios
      .post<TokenProps>(
        "https://accounts.spotify.com/api/token",
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        const access_token = res.data.access_token;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${access_token}`;

        return res.data;
      });
};
