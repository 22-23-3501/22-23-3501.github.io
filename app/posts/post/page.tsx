"use client";

import { useState, useEffect } from "react";
import { Post } from "../page";
import axios from "axios";
import ReactPlayer from "react-player";
import Image from "next/image";

export default function Page() {
  const [post, setPost] = useState<Post | null>(null);
  const title = decodeURI(typeof window === "undefined" ? "" : window.location.hash).slice(1);

  useEffect(() => {
    (async () => {
      const posts = (await axios.get<Post[]>("/posts.json")).data;

      setPost(posts.find(post => post.title.startsWith(title)) as Post);
    })();
  }, [title]);

  return (
    <div className="mx-auto mt-24 p-10 bg-white rounded-lg max-w-[1000px]">
      <h2 className="text-3xl font-bold text-gray-800">{post?.title}</h2>
      <p className="whitespace-pre-line text-gray-700 mt-6 text-lg">{post?.content}</p>
      {post?.meta.map(meta => (
        <div key={meta.url} className="mt-2 rounded-md overflow-hidden">
          {
            meta.type == "youtube" || meta.type == "mp4" ? <ReactPlayer url={meta.url} controls={true} volume={1} /> : <Image src={meta.url} height={730} width={547} alt="Image" className="w-4/5 mx-auto" />
          }
        </div>
      ))}
    </div>
  );
}
