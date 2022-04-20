interface SeedProps {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href?: string;
  id: string;
  initialPoolSize: number;
  type: string;
}

interface ArtistProps {
  external_urls: { spotify: "string" };
  href: string;
  id: string;
  name: string;
  tpe: string;
  uri: string;
}

interface AlbumImgProps {
  height: number;
  url: string;
  width: number;
}

interface AlbumProps {
  album_type: string;
  artists: ArtistProps[];
  available_markets: string[];
  external_urls: {
    spotify: "string";
  };
  href: string;
  id: string;
  images: AlbumImgProps[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

interface TrackProps {
  album: AlbumProps;
  artists: ArtistProps[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: { isrc: string };
  external_urls: { spotify: "string" };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url?: string;
  track_number: number;
  type: string;
  uri: string;
}
export interface RecommendationTracksProps {
  seeds: SeedProps[];
  tracks: TrackProps[];
}
