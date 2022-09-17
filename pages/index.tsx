import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import { useSession, signOut } from "next-auth/react";
import Post, { PostProps } from "../components/Post";
import { Spacer } from "@nextui-org/react";
import { Box } from "../primitive/Box";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    // where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: { feed },
    revalidate: 10,
  };
};
type Props = {
  feed: PostProps[];
};

const Home: NextPage<Props> = (props) => {
  const { status, data: session } = useSession();

  return (
    <Box>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
              <Spacer y={1} />
            </div>
          ))}
        </main>
      </div>
    </Box>
  );
};

export default Home;
