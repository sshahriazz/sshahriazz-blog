import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import prisma from "../lib/prisma";
import { useSession, signOut } from "next-auth/react";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";

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
  feed: PostProps[]
}

const Home: NextPage<Props> = (props) => {
const {status, data: session} = useSession()

  return  <Layout>
  <div className="page">
    <h1>Public Feed</h1>
    <main>
      {props.feed.map((post) => (
        <div key={post.id} className="post">
          <Post post={post} />
        </div>
      ))}
    </main>
  </div>
  <style jsx>{`
    .post {
      background: white;
      transition: box-shadow 0.1s ease-in;
    }

    .post:hover {
      box-shadow: 1px 1px 3px #aaa;
    }

    .post + .post {
      margin-top: 2rem;
    }
  `}</style>
</Layout>
};

export default Home;
