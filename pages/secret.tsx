import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const Secret: NextPage = () => {
  const { data: session, status } = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/secret");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);


  if (!session) {
    return <div><h1>Your arent signed in</h1></div>;
  }
  return (
    <main><div>
        <h1>Protected Page</h1>
        <p>{content}</p>
        </div></main>
  )
};

export default Secret;
