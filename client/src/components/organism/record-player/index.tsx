interface Props {
  uri: string;
}

const RecordPlayer = ({ uri }: Props) => {
  // const { isLoading, isError, data } = useQuery(["play"], playMusic(uri), {
  //   staleTime: 24 * 60 * 60 * 1000,
  // });

  return <div>🎵🎵🎵</div>;
};

export default RecordPlayer;
