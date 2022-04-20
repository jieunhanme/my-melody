import axios from "axios";

export const playMusic = (uri: string) => {
  // const data = {
  //   grant_type: "client_credentials",
  //   scope: "playlist-modify-private user-library-read",
  //   context_uri: uri,
  // };

  return async () =>
    await axios
      .put(
        " https://api.spotify.com/v1/me/player/play",
        "context_uri=spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"
      )
      .then(({ data }) => data);
};
