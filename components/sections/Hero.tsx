"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield, Award, Users } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const targetYears = 25;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let start = 0;
    const duration = 2000;
    const increment = targetYears / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetYears) {
        setYearsCount(targetYears);
        clearInterval(timer);
      } else {
        setYearsCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [mounted]);

  const phoneNumber = "5493412010044";
  const message = encodeURIComponent(
    "Hola, me comunico desde la web de Matafuegos Dar Soda. Quisiera mas informacion."
  );

  if (!mounted) {
    return (
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-secondary-light to-secondary"
      >
        <div className="container-custom relative z-10 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tu Seguridad, Nuestro Compromiso
            </h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-secondary-light to-secondary overflow-hidden"
    >
      {/* Fondos difuminados */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-light px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Empresa Certificada</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Tu Seguridad,{" "}
            <span className="text-primary-light">Nuestro Compromiso</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Mas de{" "}
            <span className="text-primary-light font-bold text-3xl">
              {yearsCount}
            </span>{" "}
            años protegiendo vidas y patrimonios en Rosario y toda la región.
            Venta, recarga y mantenimiento de matafuegos con garantía.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+5493415551234">
              <Button variant="primary" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Llamar Ahora
              </Button>
            </a>

            <a
              href={`https://wa.me/${phoneNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Award className="w-8 h-8 text-primary-light" />
              </div>
              <p className="text-2xl font-bold text-white">+25</p>
              <p className="text-sm text-gray-400">Años de Experiencia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Users className="w-8 h-8 text-primary-light" />
              </div>
              <p className="text-2xl font-bold text-white">+5000</p>
              <p className="text-sm text-gray-400">Clientes Satisfechos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-primary-light" />
              </div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400">Garantizado</p>
            </motion.div>
          </div>

          {/* Círculo central */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">🧯</div>
                  <p className="text-xl font-bold">Protección Total</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
