import { useCallback } from "react";
import { ItemProps } from "../../../consts";
import "./style.scss";

interface ItemBoxProps {
  item: ItemProps;
  idx: number;
  onClick?: (item: ItemProps, idx: number) => void;
}

const ItemBox = ({ item, idx, onClick }: ItemBoxProps) => {
  const _onClick = useCallback(() => {
    if (!onClick) return;
    onClick && onClick(item, idx);
  }, [idx, item, onClick]);

  return (
    <div className="item-box" onClick={_onClick}>
      <img src={item.track.album.images[1].url} alt="" />
      <div className="item-name">{item.track.name}</div>
      <div className="item-artist">{item.track.artists[0].name}</div>
    </div>
  );
};

export default ItemBox;
