"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { contactSchema, ContactFormData } from "@/lib/validations";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Direccion",
    content: "Jujuy 2106,  Rosario, Santa Fe",
    link: "https://maps.app.goo.gl/mh3CkZGKmJLVyebQ8",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Telefono",
    content: "(0341) 201-0044",
    link: "tel:+5493412010044",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "matafuegosdarsoda@gmail.com",
    link: "mailto:matafuegosdarsoda@gmail.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Horarios",
    content: "Lun-Vie: 9:30-18:30 | Sab: 8:30-13:00",
    link: null,
  },
];

const subjects = [
  "Consulta general",
  "Presupuesto de matafuegos",
  "Recarga y mantenimiento",
  "Senaletica de seguridad",
  "Asesoramiento tecnico",
  "Otro",
];

export default function Contact() {
  const phoneNumber = "5493412100044";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    const message = `
*Nuevo mensaje desde la web*

*Nombre:* ${data.name}
*Email:* ${data.email}
*Telefono:* ${data.phone}
*Asunto:* ${data.subject}

*Mensaje:*
${data.message}
    `.trim();

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    reset();
  };

  const whatsappMessage = encodeURIComponent(
    "Hola, me comunico desde la web de Matafuegos Dar Soda. Quisiera mas informacion."
  );

  return (
    <section id="contacto" className="py-16 md:py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="Contactanos"
          subtitle="Estamos para ayudarte. Escribinos o visitanos en nuestro local."
        />

        {/* Contenedor centrado */}
        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 md:p-8 mb-8">
              <h3 className="text-xl font-bold text-secondary mb-2 text-center">
                Enviar mensaje
              </h3>
              <p className="text-gray-500 text-sm mb-6 text-center">
                Completa el formulario y te contactamos por WhatsApp
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email y Phone en fila */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Telefono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="341 555 1234"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Asunto *
                  </label>
                  <select
                    id="subject"
                    {...register("subject")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white ${
                      errors.subject ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Selecciona un asunto</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Escribi tu consulta..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="whatsapp" size="lg" fullWidth>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-4 text-center" hover={false}>
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  {info.icon}
                </div>
                <h4 className="font-semibold text-secondary text-sm mb-1">
                  {info.title}
                </h4>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-gray-600 text-xs hover:text-primary transition-colors block truncate max-w-full"
                    title={info.content}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-xs">{info.content}</p>
                )}
              </Card>
            ))}
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-0 overflow-hidden" hover={false}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.3041655489584!2d-60.64184492440682!3d-32.95119997351456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1d4f2b4e8d%3A0x1234567890abcdef!2sBalcarce%20%26%20Jujuy%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1702000000000!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion Matafuegos Dar Soda"
                className="w-full"
              ></iframe>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
