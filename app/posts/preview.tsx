"use client";

import Image from "next/image";
import { Meta } from "./page";
import ReactPlayer from "react-player";
import { useState } from "react";

interface PreviewAgs {
  title: String,
  meta: Meta[]
}

export function Preview({ title, meta }: PreviewAgs) {
  const [hover, setHover] = useState(false);
  const previewMeta = meta[0];
  const previewEle = previewMeta.type == "youtube" ? (
    <ReactPlayer url={previewMeta.url} controls={false} muted={true} playing={hover} width="454px" height="340px" playIcon={<div></div>}/> 
  ) : (previewMeta.type == "mp4") ? (
    <ReactPlayer url={previewMeta.url} controls={false} muted={true} playing={hover} width="454px" height="340px" playIcon={<div></div>}/> 
  ) : (
    <Image src={previewMeta.url} height={454} width={454} alt="preview image" className="group-hover:scale-110 transition"/>
  );
  
  return (
    <div
      className="h-full flex flex-col group"
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="overflow-hidden relative">
        {previewEle}
        <div className="z-10 absolute top-0 left-0 h-full w-full bg-[#00000060] flex items-end p-4 text-white">
          <p className="border-t border-t-white pt-2 text-xl text-ellipsis truncate overflow-hidden w-full">{title}</p>
        </div>
      </div>
    </div>
  );
}
