import axios from "axios";

interface getTokenProps {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export const getToken = ({ CLIENT_ID, CLIENT_SECRET }: getTokenProps) => {
  return async () =>
    await axios
      .post(
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
        const token_exp = res.data.expires_in;
        const d = new Date();
        d.setTime(d.getTime() + token_exp * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = "token=" + access_token + ";" + expires + ";path=/";

        return res.data;
      });
};
