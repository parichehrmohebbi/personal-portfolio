import MusicCard from "@components/musicCard/musicCard";
import useSWR from "swr";

//client side data fetching using SWR

const fetcher = async () => {
  const res = await fetch("/api/songs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export default function Music() {
  const { data, error } = useSWR("songs", fetcher);

  if (!data) return <p>loading...</p>;

  return (
    // <div className="bg-[url('/assets/images/music/parichehr-jami-bg.jpg')] bg-cover w-full h-full ">
    //   < className="w-full h-full backdrop-brightness-50 pt-24 ">
    <div className="w-full  md:pt-24 grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 justify-center items-center xlg:px-36 md:px-24 bg-secondary-200">
      {data.map((song) => {
        return (
          <div className="md:mb-16 lg:mb-32 sm:mb-0" key={song.id}>
            <MusicCard
              title={song.title}
              imageSrc={song.imageURL}
              singer={song.singer}
              writer={song.songWriter}
              lyrics={song.lyrics}
              url={song.url}
            ></MusicCard>
          </div>
        );
      })}
    </div>
  );
}
