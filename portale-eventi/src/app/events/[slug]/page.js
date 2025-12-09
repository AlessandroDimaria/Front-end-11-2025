import { getEventBySlug, getSession } from "../../../lib/events";
import Link from "next/link";

export default async function EventPage({ params }) {
    const {slug} = await params;
  const event = getEventBySlug(slug);
  return (
    <main>
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>Prima lezione : {event.program[0].time}</p>
      </div>
      <section>
       {event.program.map((s) => (
          <div key={s.sessionId}>
            <h3>{s.title}</h3>
            <Link href={`/events/${slug}/${s.sessionId}`}>Dettagli Evento</Link>
          </div>
        ))}
      </section>
    </main>
  );
}
