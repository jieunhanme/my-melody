import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import SpotifyPlayer from "react-spotify-web-playback";

import { getPlaylist, getPlaylistItems } from "../../api";

import { ButtonText } from "../../components/atoms/buttons";
import ItemBox from "../../components/molecules/item-box";

import "./style.scss";

const MusicPage = () => {
  const [selectedCategoryId, changeSelectedCategoryId] = useState<
    string | null
  >(null);
  const [selectedItem, changeSelectedItem] = useState<Array<number> | null>(
    null
  );

  const { isLoading, isError, data } = useQuery(["playlist"], getPlaylist());

  const {
    isLoading: isItemsLoading,
    isError: isItemsError,
    data: itemData,
  } = useQuery(
    ["items", selectedCategoryId],
    getPlaylistItems({ playlistId: selectedCategoryId as string }),
    { enabled: selectedCategoryId !== null }
  );

  const onClickCategory = useCallback((category: any) => {
    changeSelectedCategoryId(category.id);
  }, []);

  const onClickItem = useCallback(
    (item: any, idx: number) => {
      if (!itemData) return;

      const uriIds = [] as number[];
      if (idx === 0) {
        uriIds.push(idx, idx + 1);
      } else if (idx === itemData.total - 1) {
        uriIds.push(idx - 1, idx);
      } else {
        uriIds.push(idx - 1, idx, idx + 1);
      }
      changeSelectedItem(uriIds);
    },
    [itemData]
  );

  useEffect(() => {
    if (!itemData || !selectedItem) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = selectedItem.map((idx) => {
      return itemData.items[idx].track.uri;
    });
  }, [itemData, selectedItem]);

  if (isLoading) return <div>Loading playlist</div>;
  if (isError) return <div>Error playlist</div>;

  return (
    <div className="music-page-wrapper">
      {data.items.length ? (
        <div className="playlist-titles">
          {data.items.map((category, idx) => (
            <ButtonText
              key={idx}
              title={category.name}
              isActive={category.id === selectedCategoryId}
              onClick={() => onClickCategory(category)}
            />
          ))}
        </div>
      ) : (
        <div className="alert-box">Make Playlist First</div>
      )}
      {/* NOTE center body */}
      {!selectedCategoryId ? (
        <div className="alert-box">Please Select Playlist</div>
      ) : isItemsLoading ? (
        <div className="alert-box">Loading Songs</div>
      ) : isItemsError ? (
        <div className="alert-box">ERROR Songs</div>
      ) : !itemData?.items.length ? (
        <div className="alert-box">NO Songs</div>
      ) : (
        <div className="palylist-item-wrapper">
          {itemData?.items.map((item, idx) => (
            <ItemBox key={idx} item={item} idx={idx} onClick={onClickItem} />
          ))}
          item
        </div>
      )}
      {/* NOTE bottom widget */}
      {data && (
        <div className="bottom-embedded">
          <SpotifyPlayer
            autoPlay={true}
            token="BQAzGkr8n21--BI7y_8MZwp4bkXIcOlxGrIhTjzC_AIZv5sMdgOBd6K6b468vDmdIkvox1ecL9vYeS4KoJjq_7DtdV66-0ll7yKSw4TkKrLoTHwmhSHfKa0CsyZaxb8fmWGLV7g39SsZtwafVuZx_x7ncfJxxLpdrAq1csWX0ym2XCLNCzZIUP4VUk1AOGWMLRyb51YscaH5D3 -yPcyPBtDX"
            uris={[data.items[0].uri]}
          />
        </div>
      )}
    </div>
  );
};
export default MusicPage;
