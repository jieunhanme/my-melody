import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { getPlaylist, getPlaylistItems } from "../../api";
import { ButtonText } from "../../components/atoms/buttons";

import "./style.scss";

const MusicPage = () => {
  const [selectedId, changeSelectedId] = useState<string | null>(null);

  const { isLoading, isError, data } = useQuery(["playlist"], getPlaylist(), {
    staleTime: 24 * 60 * 60 * 1000,
  });

  const {
    isLoading: itemLoading,
    isError: itemError,
    data: itemData,
  } = useQuery(
    ["items", selectedId],
    getPlaylistItems({ playlistId: selectedId as string }),
    { enabled: selectedId !== null, staleTime: 24 * 60 * 1000 }
  );

  const onClickCategory = useCallback((item: any) => {
    changeSelectedId(item.id);
  }, []);

  if (isLoading) return <div>Loading playlist</div>;
  if (isError) return <div>Error playlist</div>;

  return (
    <div className="music-page-wrapper">
      <div className="playlist-titles">
        {data.items.map((item, idx) => (
          <ButtonText
            key={idx}
            title={item.name}
            onClick={() => onClickCategory(item)}
          />
        ))}
      </div>
      {!selectedId ? (
        <div>null</div>
      ) : (
        <div>
          {itemData?.items.map((item, idx) => (
            <div key={idx}>
              <img src={item.track.album.images[1].url} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default MusicPage;
