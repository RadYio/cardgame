'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  
  function goToLogin() {
    push('/login');
  }
  
  return (
    <main className="text-6xl">
      grosse fesse
      <div className="flex items-center justify-center mt-5"><button onClick={goToLogin} className="flex text-black hover:bg-red-950 rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 leading-tight tracking-tight">Gotelog </button></div>
    </main>
  );
}
