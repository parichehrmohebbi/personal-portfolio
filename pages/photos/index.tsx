import PhotoCard from "@components/photoCard/photoCard";
import { photos } from "@data/photos";

const PhotoGallery = () => {
  return (
    <div className="grid xlg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ">
      {photos.map((photo) => {
        return (
          <div key={photo.id} className="px-5 py-5 ple-5">
            <PhotoCard
              id={photo.id}
              title={photo.title}
              imageSrc={photo.imageSrc}
            ></PhotoCard>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
