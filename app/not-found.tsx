import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-bold text-secondary mt-4 mb-2">
          Pagina no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          La pagina que buscas no existe o fue movida.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Volver al Inicio
          </Button>
        </Link>
      </div>
    </div>
  );
}
