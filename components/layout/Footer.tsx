"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Flame,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from "lucide-react";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  "Venta de Matafuegos",
  "Recarga y Mantenimiento",
  "Senaletica de Seguridad",
  "Asesoramiento Tecnico",
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Matafuegos
                </span>
                <span className="text-sm font-semibold text-primary-light leading-tight">
                  Dar Soda SRL
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Mas de 25 anos protegiendo vidas y patrimonios en Rosario y la
              region. Tu seguridad es nuestro compromiso.
            </p>
            <div className="flex gap-3">
              {" "}
              <a
                href="https://www.facebook.com/p/Matafuegos-Dar-Soda-SRL-100041555667185/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-light p-2 rounded-lg hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/matafuegosdarsoda?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-light p-2 rounded-lg hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rapidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Jujuy 2106 , Rosario, Santa Fe
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />

                <a
                  href="tel:+5493412010044"
                  className="text-gray-300 hover:text-primary-light transition-colors text-sm"
                >
                  (341) 201-0044
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />

                <a
                  href="mailto:Matafuegosdarsoda@gmail.com"
                  className="text-gray-300 hover:text-primary-light transition-colors text-sm"
                >
                  Matafuegosdarsoda@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-light shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>Lun - Vie: 9:30 - 18:30</p>
                  <p>Sab: 8:30 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-light">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
            <p>
              {currentYear ? `© ${currentYear}` : "©"} Matafuegos Dar Soda SRL.
              Todos los derechos reservados.
            </p>
            <p>Rosario, Santa Fe, Argentina</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
