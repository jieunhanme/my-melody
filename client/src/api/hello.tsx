import axios from "axios";

export const Hello = () => {
  return async () =>
    await axios.get("/api/hello").then((res) => res.data.message);
};
