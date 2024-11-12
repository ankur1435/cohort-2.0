import Image from "next/image";
import localFont from "next/font/local";
import {VideoCard} from "@/components/VideoCard";

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Marcus King - Sucker (from Arcane Season 2) [Official Visualizer]"}
        image={"photo.jpg"}
        thumbImage={"thumb.jpg"}
        author={"Rohit Pithani"}
        views={"1.2M views"}
        timestamp={"4 days ago"}
      ></VideoCard>
    </div>
  );
}
