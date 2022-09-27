import { createStyles, Grid } from "@mantine/core";
import BlogCard from "components/blog/BlogCard";
import VerticalNav from "components/vertical-nav/VerticalNav";
import React from "react";

const styles = createStyles((theme) => ({
  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));
const data = {
  image:
    "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  category: "decorations",
  title: "Top 50 underrated plants for house decoration",
  footer: "733 people liked this",
  author: {
    name: "Elsa Gardenowl",
    description: "posted 34 minutes ago",
    image:
      "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
};

export const BlogLayout = () => {
  const { classes } = styles();
  return (
    <Grid>
      <Grid.Col className={classes.hiddenMobile} md={3}>
        <VerticalNav />
      </Grid.Col>
      <Grid.Col sm={12} md={6}>
        <BlogCard {...data} />
        <BlogCard {...data} />
        <BlogCard {...data} />
        <BlogCard {...data} />
      </Grid.Col>
      <Grid.Col className={classes.hiddenMobile} md={3}>
        3
      </Grid.Col>
    </Grid>
  );
};

export default BlogLayout;
