"use client";

import { useEffect, useRef } from "react";
import SupermemoryLogo from "../../components/ui/SuperMemoryLogo"


export default function HeroGradient() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 0.5; // Half speed
    }

    if (video2Ref.current) {
      video2Ref.current.playbackRate = 0.2;
    }
  }, []);

  return (
    <div
      className="relative mt-10 h-[330px] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #0852C7 0%, #06183F 25.5%, #000000 52.2%, #06183F 78.9%, #0852C7 100%)",
      }}
    >
      {/* Video 1 */}
      <video
        ref={video1Ref}
        src="/ascii-art (2).mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Video 2 */}
      <video
        ref={video2Ref}
        src="/ascii-art.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen"
      />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-24 text-white">
          <SupermemoryLogo/>
        </div>
      </div>
    </div>
  );
}