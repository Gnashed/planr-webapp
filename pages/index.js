import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>

      <Link href="/classroom/new" passHref>
        <Button variant="success">Create Classroom</Button>
      </Link>
      <Link href="/Classrooms" passHref>
        <Button variant="primary" className="mt-1">Classrooms</Button>
      </Link>
    </div>
  );
}
