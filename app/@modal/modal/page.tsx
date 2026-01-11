import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/photos/5');
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}
