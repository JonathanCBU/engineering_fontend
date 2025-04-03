import NavBar from '@/components/NavBar.tsx/NavBar';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';

export function HomePage() {
  return (
    <>
      <NavBar />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
