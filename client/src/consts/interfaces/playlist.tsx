import { AlbumImgProps } from "./common";

interface ItemProps {
  collaborative: boolean;
  description: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  id: string;
  images: AlbumImgProps[];
  name: string;
  owner: {
    display_name: string;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  primary_color?: string;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    total: number;
  };
  type: string;
  uri: string;
}

export interface PlaylistProps {
  href: string;
  items: ItemProps[];
  limit: number;
  next?: string;
  offset: number;
  previous?: string;
  total: number;
}
