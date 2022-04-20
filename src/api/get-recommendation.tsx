import axios from "axios";
import { GenreSeedsProps, RecommendationTracksProps } from "../consts";

// TODO client-id, secret 공통 컴포넌트 생성, token가져오는 방법 고민 + seed_generes값 가져와서 랜덤으로 재생정보 생성?
export const getRecommendation = () => {
  return async () =>
    await axios
      .get<GenreSeedsProps>(
        "https://api.spotify.com/v1/recommendations/available-genre-seeds"
      )
      .then(({ data }) => {
        const { genres } = data;
        const randomIdx = Math.floor(Math.random() * genres.length) - 1;
        return genres[randomIdx];
      })
      .then((genre) =>
        axios.get<RecommendationTracksProps>(
          `https://api.spotify.com/v1/recommendations?limit=1&seed_genres=${genre}`
        )
      )
      .then((res) => res.data);
};
