import axios from "axios";
import { PlaylistItemProps } from "../consts/interfaces";
import { getCookie } from "../utils";

interface getPlaylistItemsProps {
  playlistId: string;
}

export const getPlaylistItems = ({ playlistId }: getPlaylistItemsProps) => {
  return async () =>
    await axios
      .get<PlaylistItemProps>(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("access_token")}`,
          },
        }
      )
      .then((res) => res.data);
};
