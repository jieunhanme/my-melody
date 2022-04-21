const scope = {
  images: { ugcImageUpload: "ugc-image-upload" },
  connect: {
    userModifyPlaybackState: "user-modify-playback-state",
    userReadPlaybackState: "user-read-playback-state",
    userReadCurrentlyPlaying: "user-read-currently-playing",
  },
  follow: {
    userFollowModify: "user-follow-modify",
    userFollowRead: "user-follow-read",
  },
  history: {
    userReadRecentlyPlayed: "user-read-recently-played",
    userReadPlaybackPosition: "user-read-playback-position",
    userTopRead: "user-top-read",
  },
  playlists: {
    playlistsReadCollaborative: "playlist-read-collaborative",
    playlistModifyPublic: "playlist-modify-public",
    playlistReadPrivate: "playlist-read-private",
    playListModifyPrivate: "playlist-modify-private",
  },
  playback: {
    appRemoteControl: "app-remote-control",
    streaming: "streaming",
  },
  users: {
    userReadEmail: "user-read-email",
    userReadPrivate: "user-read-private",
  },
  library: {
    userLibraryModify: "user-library-modify",
    userLibraryRead: "user-library-read",
  },
};

export default scope;
