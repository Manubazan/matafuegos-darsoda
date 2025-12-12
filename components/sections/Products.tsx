"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, MessageCircle, Filter } from "lucide-react";
import { products, categories, Product } from "@/lib/products";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const getWhatsAppLink = (product: Product) => {
    const phoneNumber = "5493412010044";
    const message = encodeURIComponent(
      `Hola, me comunico desde la web de Matafuegos Dar Soda. Quisiera consultar por: ${product.name}`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="Nuestros Productos"
          subtitle="Equipos de primera calidad con certificacion y garantia"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-secondary hover:bg-gray-100 shadow"
              }`}
            >
              {category === "Todos" && (
                <Filter className="w-4 h-4 inline mr-1" />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-secondary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 grow">
                    {product.shortDesc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Ver mas
                    </Button>

                    <a
                      href={getWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="whatsapp" size="sm" fullWidth>
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Consultar
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Image */}
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-500" />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {selectedProduct.category}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-secondary mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedProduct.fullDesc}
                  </p>

                  <h4 className="font-semibold text-secondary mb-3">
                    Caracteristicas:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={getWhatsAppLink(selectedProduct)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="whatsapp" fullWidth>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Consultar por {selectedProduct.name}
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
