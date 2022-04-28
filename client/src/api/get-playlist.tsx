import axios from "axios";
import { PlaylistProps } from "../consts";
import { getCookie } from "../utils";

export const getPlaylist = () => {
  return async () =>
    await axios
      .get<PlaylistProps>("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
      .then((res) => res.data);
};
