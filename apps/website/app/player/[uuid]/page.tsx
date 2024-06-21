import { useParams } from 'next/navigation';

export default function Player() {
  const params = useParams<{ uuid: string }>();

  return (
    <main>
      <h1>Player Page</h1>
      <p>search media from {params.uuid} in database and load yet.</p>
    </main>
  );
}
