"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export interface Post {
  title: String,
  content: String,
  meta: Meta[]
}

interface Meta {
  type: String,
  url: String
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get<Post[]>("/posts.json");
      setPosts(response.data);
    })();
  }, []);

  return (
    <div className="">
      {posts.map(post => post.title)}
    </div>
  );
}
