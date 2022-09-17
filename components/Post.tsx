import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import { Card, Text } from "@nextui-org/react";

export type PostProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <Card>
      <Card.Body onClick={() => Router.push("/post/[id]", `/post/${post.id}`)}>
        <Text h1>{post.title}</Text>
        <small>By {authorName}</small>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </Card.Body>
    </Card>
  );
};

export default Post;
