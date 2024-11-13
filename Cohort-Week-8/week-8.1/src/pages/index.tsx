import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/AppBar";
import { LeftBar } from "@/components/LeftBar";

export default function Home() {
  return (
    <main>
      <Appbar/>
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  )
}
