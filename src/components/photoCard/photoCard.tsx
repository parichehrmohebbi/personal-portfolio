import Link from "next/link";
import Image from "next/image";

interface IProps {
  id: number;
  title: string;
  imageSrc: string;
}

export default function PhotoCard({ id, title, imageSrc }: IProps) {
  return (
    <div className=" bg-primary-300 ">
      <Link href={`/photos/${id}`}>
        <Image alt={title} src={imageSrc} width={350} height={300}></Image>
      </Link>
    </div>
  );
}
