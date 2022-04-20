import axios from "axios";

export const getPlaylist = () => {
  return async () =>
    await axios({
      method: "GET",
      baseURL: "https://api.spotify.com/v1/me/playlists",
      data: { scope: "playlist-read-private" },
    }).then((res) => res.data);
};
