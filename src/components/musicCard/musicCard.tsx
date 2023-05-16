import Link from "next/link";
import Image from "next/image";
interface IProps {
  title: string;
  url: string;
  imageSrc: string;
  writer: string;
  lyrics: string;
  singer: string;
}

export default function MusicCard({
  title,
  url,
  imageSrc,
  writer,
  lyrics,
  singer,
}: IProps) {
  return (
    <div className="w-full flex justify-center items-center drop-shadow-4xl ">
      <Link target="_blank" href={url}>
        <div>
          <Image alt="Sharab" src={imageSrc} width={300} height={300}></Image>
        </div>
        <div className="w-full flex flex-col justify-center pl-7 py-7 text-secondary-300 font-bold bg-secondary-900">
          <p className="flex font-serif">{title}</p>
          <br></br>
          <p className="flex font-thin">Song writer:{" " + writer}</p>
          <p className="flex font-thin">Lyrics:{" " + lyrics}</p>
        </div>
      </Link>
    </div>
  );
}
