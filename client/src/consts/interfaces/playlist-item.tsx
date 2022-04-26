import { TrackProps } from "./common";

export interface ItemProps {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: "string";
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color?: string;
  track: TrackProps;
  video_thumbnail: {
    url?: string;
  };
}

export interface PlaylistItemProps {
  href: string;
  items: ItemProps[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}
