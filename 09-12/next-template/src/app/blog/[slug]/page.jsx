import { notFound } from "next/navigation";

const articoli = {
  "primo-post": { titolo: "Il mio primo post", contenuto: "..." }
};

export default function Article({ params }) {
  const articolo = articoli[params.slug];

  if (!articolo) notFound();

  return (
    <>
	    <h1>{articolo.titolo}</h1>
      <p>{articolo.contenuto}</p>
    </>
  );
}