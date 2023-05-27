"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Preview } from "./preview";

export interface Post {
  title: string,
  content: string,
  meta: Meta[]
}

export interface Meta {
  type: string,
  url: string
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
    <div className="h-full">
      <div className="flex flex-wrap md:mx-24 mt-24 justify-center">
        {posts.map(post => (
          <Link href={`/posts/${post.title}`} key={post.title} className="bg-white block m-2 rounded-md overflow-hidden">
            <Preview title={post.title} meta={post.meta}/>
          </Link>
        ))}
      </div>
    </div>
  );
}
