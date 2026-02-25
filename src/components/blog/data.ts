export const CARD_WIDTH = 350;
export const MARGIN = 20;
export const CARD_SIZE = CARD_WIDTH + MARGIN;

export const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

export type PostType = {
  id: number;
  imgUrl: string;
  tag: string;
  title: string;
  description: string;
};

export const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "",
    tag: "Productivity",
    title: "Your first blog post title",
    description: "A short description of what this post is about.",
  },
  {
    id: 2,
    imgUrl: "",
    tag: "Growth",
    title: "Your second blog post title",
    description: "A short description of what this post is about.",
  },
  {
    id: 3,
    imgUrl: "",
    tag: "Marketing",
    title: "Your third blog post title",
    description: "A short description of what this post is about.",
  },
];
