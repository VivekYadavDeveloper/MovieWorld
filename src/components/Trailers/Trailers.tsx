/* eslint-disable @typescript-eslint/no-explicit-any */

import { VideoData } from "@/type/YoutubeType";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

interface TrailersProps {
  youtubeData: any;
}

const Trailers = ({ youtubeData }: TrailersProps) => {
  return (
    <>
      <h2 className="text-2xl text-yellow-500 font-bold ml-20 my-8">Trailer</h2>
      <div className="flex flex-wrap gap-4 lg:mx-14 m-8 justify-center">
        {youtubeData && youtubeData.length > 0 ? (
          youtubeData.map((video: VideoData, index: number) => (
            <VideoPlayer key={index} video={video} />
          ))
        ) : (
          <p>No trailer videos available</p>
        )}
      </div>
    </>
  );
};

export default Trailers;
