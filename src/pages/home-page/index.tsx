import { useQuery } from "react-query";

const HomePage = () => {
  const { status, error, data } = useQuery(
    ["home"],
    async () =>
      await fetch("https://swapi.dev/api/people/").then((res) => res.json())
  );

  if (status === "loading") return <div>LOADING...</div>;
  if (status === "error") return <div>ERROR :(</div>;

  return (
    <div>
      {data.results.map((person: any) => {
        const personUrlParts = person.url.split("/").filter(Boolean);
        const personId = personUrlParts[personUrlParts.length - 1];
        return (
          <article key={personId} style={{ margin: "16px 0 0" }}>
            {person.name}
          </article>
        );
      })}
    </div>
  );
};
export default HomePage;
