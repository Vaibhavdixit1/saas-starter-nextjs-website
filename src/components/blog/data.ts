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
  {
    id: 4,
    imgUrl: "",
    tag: "Design",
    title: "How to build clean UI components",
    description: "Best practices for creating reusable and scalable UI components.",
  },
  {
    id: 5,
    imgUrl: "",
    tag: "Startup",
    title: "From idea to MVP in 30 days",
    description: "A practical guide to launching your product quickly.",
  },
  {
    id: 6,
    imgUrl: "",
    tag: "Development",
    title: "Mastering modern JavaScript patterns",
    description: "Learn essential patterns every frontend developer should know.",
  },
  {
    id: 7,
    imgUrl: "",
    tag: "Career",
    title: "How to prepare for frontend interviews",
    description: "Tips and strategies to crack your next tech interview.",
  },
  {
    id: 8,
    imgUrl: "",
    tag: "AI",
    title: "Integrating AI into web applications",
    description: "Explore ways to enhance your apps using AI tools and APIs.",
  },
];