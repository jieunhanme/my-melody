import axios from "axios";
import { PlaylistProps } from "../consts";

export const getPlaylist = () => {
  return async () =>
    await axios
      .get<PlaylistProps>("https://api.spotify.com/v1/me/playlists")
      .then((res) => res.data);
};
