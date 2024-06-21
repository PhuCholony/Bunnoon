import { useParams } from 'next/navigation';

export default function ViewAnime() {
  const params = useParams<{ uuid: string }>();

  return (
    <main>
      <h1>View Anime Page</h1>
      <p>search anime from {params.uuid} in database and load yet.</p>
    </main>
  );
}
