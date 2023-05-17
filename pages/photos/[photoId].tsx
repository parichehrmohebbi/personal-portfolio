import Image from "next/image";
import { photos } from "@data/photos";

export default function PhotoGallery({ photo }) {
  return (
    <div className="w-full h-full bg-primary-200">
      <div className="flex justify-center items-center w-full px-36 overflow-auto">
        <Image
          alt={photo.title}
          src={photo.imageSrc}
          width={200}
          height={160}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "auto", width: "100%" }} //The point is right there!
          quality={100}
        ></Image>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { photoId: "1" } }],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const photo = photos.find((c) => c.id == params.photoId);
  return {
    props: {
      photo,
    },
  };
};
