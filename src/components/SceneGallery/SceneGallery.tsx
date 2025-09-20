import { ImageDetails } from "@/type/SceneType";
import Image from "next/image";

interface SceneGalleryProps {
  sceneImages: ImageDetails[];
  handleImageClick: (filePath: string) => void;
  mediaType: "movie" | "tv";
}
const SceneGallery: React.FC<SceneGalleryProps> = ({
  sceneImages,
  handleImageClick,
  mediaType,
}) => {
  return (
    <>
      <div>
        <h2 className="text-yellow-500 text-2xl font-bold ml-20 my-8">
          {mediaType == "movie" ? "Movie Scenes" : "TV Show Scene"}
        </h2>
        <div className="flex flex-wrap justify-center gap-8 lg:mx-1 m-8">
          {sceneImages && sceneImages.length > 0 ? (
            sceneImages.map((scene, index) => (
              <div
                key={index}
                className="relative w-full max-w-sm cursor-pointer sm:hover:scale-[1.04] transition-transform duration-200 ease-in-out"
                onClick={() => handleImageClick(scene.file_path)}
              >
                <Image
                  className="object-cover rounded-2xl"
                  src={`https://image.tmdb.org/t/p/original/${scene.file_path}`}
                  alt={`Scene ${index + 1}`}
                  width={500}
                  height={281}
                />
              </div>
            ))
          ) : (
            <p>No scene images available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SceneGallery;
