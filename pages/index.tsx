import type { GetStaticProps, NextPage } from "next";
import prisma from "../lib/prisma";
import { useSession, signOut, signIn } from "next-auth/react";
import Post, { PostProps } from "../components/Post";
import { Button, Spacer } from "@nextui-org/react";
import { Box } from "../primitive/Box";
import { FormEventHandler, useState } from "react";
import CredentialModal from "../components/CredentialModal";
import CredentialForm from "../components/CredentialForm";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany();

  return {
    props: { feed },
    revalidate: 10,
  };
};
type Props = {
  feed: PostProps[];
};

const Home: NextPage<Props> = (props) => {
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
