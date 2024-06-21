import { useParams } from 'next/navigation';

export default function ViewGenre() {
  const params = useParams<{ pk: string }>();

  return (
    <main>
      <h1>View Genre Page</h1>
      <p>search genre from {params.pk} in database and show this title</p>
      <p>fetch all animes related this genre with cursor (Limit Record)</p>
    </main>
  );
}
