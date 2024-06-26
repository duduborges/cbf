import Link from "next/link";
export default function Historia() {
    return (
        <main>
            <h1>Página de História</h1>
            <p>Bem-vindo à página de história! Aqui você encontrará informações detalhadas sobre nossa jornada.</p>
            <Link href="./">
                Voltar para a página inicial
            </Link>
        </main >
    );
}
