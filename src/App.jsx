import { Header } from "./components/Header";

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/eadafonso.png",
      name: "Edvaldo Afonso",
      role: "Developer  | ReactJS",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no github, não deixe de conferir. Foi utilizado ReactJS no frontend e Ruby on Rails no backend.",
      },
      { type: "link", content: "github.com/eadafonso" },
    ],
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
