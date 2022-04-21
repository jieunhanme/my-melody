import axios from "axios";
import { CLIENT_ID } from "../consts";

const AUTH_URL = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = "http://localhost:3000";

export const Login = () => {
  return async () =>
    await axios({
      method: "GET",
      url: AUTH_URL,
      data: {
        grant_type: "client_credentials",
      },
      params: {
        client_id: CLIENT_ID,
        response_type: "code",
        redirect_uri: REDIRECT_URI,
        scope: "streaming",
        // "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state",
      },
    }).then((res) => console.log(res));
};
