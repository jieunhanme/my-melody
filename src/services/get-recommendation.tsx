import axios from "axios";

interface getRecommendationProps {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}
// TODO client-id, secret 공통 컴포넌트 생성, token가져오는 방법 고민 + seed_generes값 가져와서 랜덤으로 재생정보 생성?
export const getRecommendation = ({
  CLIENT_ID,
  CLIENT_SECRET,
}: getRecommendationProps) => {
  return async () =>
    await axios
      .get(
        "https://api.spotify.com/v1/recommendations?limit=1&seed_genres=pop",
        {
          headers: {
            Authorization:
              "Bearer " +
              "BQDjKHW-EtkmWtIyp5zGD5DJ6R04upw3La7swUdRrnmihX4fpzf4jug_GtFNpYn5MTatWqYq4cv5SHp67j2TsTD_fS00qG6zc36Gnset5ldBQyR1gfPGxc1SV9O7QKeqsP-Sn3bPVIC0VucqfrocNJj6lz5OV_UVups",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => res.data);
};
