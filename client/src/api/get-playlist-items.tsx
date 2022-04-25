import axios from "axios";
import { PlaylistItemProps } from "../consts/interfaces/playlist-item";

interface getPlaylistItemsProps {
  playlistId: string;
}

export const getPlaylistItems = ({ playlistId }: getPlaylistItemsProps) => {
  return async () =>
    await axios
      .get<PlaylistItemProps>(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
      )
      .then((res) => res.data);
};
