import type { NextPage } from "next";
import { Box } from "../primitive/Box";

const Home: NextPage = (props) => {
  return (
    <Box>
      <div className="page">
        <h1>Welcome</h1>
        <main></main>
      </div>
    </Box>
  );
};

export default Home;
