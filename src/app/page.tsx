import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Página Principal</h1>
      <Link href="/historia">
        Ir para a página História
      </Link>
    </main>
  );
}
