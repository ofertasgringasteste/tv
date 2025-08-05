import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StreamingLogo } from "@/components/StreamingLogo";
import { useState } from "react";
import {
  Shield,
  Globe,
  DollarSign,
  Clock,
  Star,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">


      {/* Hero Section */}
      <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23dc2626\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"3\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                Oferta Limitada
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Accede a <span className="text-primary">+2000 CANALES</span> y <span className="text-primary">+50,000 TÍTULOS</span> por Solo{" "}
                <span className="text-accent">$8.99</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
                Canales Premium, Deportes, UFC, Adultos + Estrenos de Cine como Wicked, Gladiator II, Moana 2
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-primary text-lg px-8 py-4"
                  onClick={() => window.open('https://pay.speedsellx.com/688FFED19B52C', '_blank')}
                >
                  COMENZAR AHORA - $8.99
                </Button>
              </div>

              <div className="text-sm text-muted-foreground space-y-1">
                <p>✓ Activación inmediata</p>
                <p>✓ Sin mensualidades</p>
                <p>✓ Sin contratos</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <StreamingLogo name="Netflix" />
                  <StreamingLogo name="HBO MAX" />
                  <StreamingLogo name="Disney+" />
                  <StreamingLogo name="Prime Video" />
                  <StreamingLogo name="Apple TV+" />
                  <StreamingLogo name="Star+" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">+2000 canales premium incluidos</p>
                  <div className="flex justify-center">
                    <Badge className="bg-accent text-accent-foreground">
                      TODO POR $8.99
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">¿Por Qué Elegir StreamLATAM?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">La solución más inteligente para el entretenimiento</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">+2000 CANALES PREMIUM</h3>
                <p className="text-muted-foreground">Deportes, UFC, Adultos, Noticias y Entretenimiento en vivo</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">ACCESO INSTANTÁNEO</h3>
                <p className="text-muted-foreground">Activa tu cuenta en menos de 2 minutos</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">+50,000 PELÍCULAS Y SERIES</h3>
                <p className="text-muted-foreground">Incluyendo estrenos de cine como Wicked, Gladiator II, Moana 2</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">100% SEGURO</h3>
                <p className="text-muted-foreground">Garantía de funcionamiento o tu dinero de vuelta</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* APP Funcionando Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              ✅ PLATAFORMA 100% FUNCIONAL
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">
              ¡VE CÓMO FUNCIONA EN TIEMPO REAL!
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nuestra aplicación ya está <span className="text-primary font-semibold">completamente operativa</span> con
              más de 2,000 canales en vivo y 50,000 películas disponibles las 24 horas
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card border border-border">
              <img
                src="/tv_edite.png?v=1"
                alt="StreamLATAM App - Interface Real Funcionando"
                className="w-full h-auto block"
                style={{ maxWidth: '100%' }}
                onError={(e) => {
                  // Fallback caso a imagem não carregue
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="bg-card p-12 text-center text-foreground rounded-3xl border border-border">
                        <h3 class="text-2xl font-bold mb-4">📱 PLATAFORMA ACTIVA</h3>
                        <p class="text-muted-foreground">Aplicación completamente funcional y operativa</p>
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>


          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-4 sm:p-8 border border-primary/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">
                ¿Listo para tener acceso completo?
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto px-2">
                Únete a más de 10,000 usuarios que ya disfrutan de todo el contenido premium
                por solo <span className="text-primary font-bold">$8.99</span>
              </p>
              <Button
                size="lg"
                className="bg-primary text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto max-w-md mx-auto"
                onClick={() => window.open('https://pay.speedsellx.com/688FFED19B52C', '_blank')}
              >
                🚀 OBTENER ACCESO AHORA - $8.99
              </Button>
              <p className="text-xs sm:text-sm text-muted-foreground mt-4 px-2">
                ⚡ Activación inmediata • 🛡️ Garantía 7 días • 🔒 Pago 100% seguro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
              Todo el <span className="text-primary">ENTRETENIMIENTO MUNDIAL</span> en Una Sola App
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">La biblioteca más completa de contenido premium</p>
          </div>



          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mb-12">
            <StreamingLogo name="Netflix" className="h-16 sm:h-20" />
            <StreamingLogo name="HBO MAX" className="h-16 sm:h-20" />
            <StreamingLogo name="Disney+" className="h-16 sm:h-20" />
            <StreamingLogo name="Prime Video" className="h-16 sm:h-20" />
            <StreamingLogo name="Apple TV+" className="h-16 sm:h-20" />
            <StreamingLogo name="Paramount" className="h-16 sm:h-20" />
            <StreamingLogo name="Star+" className="h-16 sm:h-20" />
            <StreamingLogo name="Crunchyroll" className="h-16 sm:h-20" />
          </div>


        </div>
      </section>

      {/* Comparación Section */}
      <section id="planes" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              💸 COMPARACIÓN REAL DE PRECIOS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ¿CUÁNTO PAGARÍAS NORMALMENTE?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ve el precio real de obtener TODO el contenido que incluye StreamLATAM por separado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-12">
            {/* Card Servicios Individuales */}
            <div>
              <div className="bg-black rounded-3xl shadow-2xl border border-red-500/30 overflow-hidden transform hover:scale-105 transition-all duration-300 h-full">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 sm:p-6 text-center">
                  <div className="text-xl sm:text-2xl font-bold mb-2">😰 MÉTODO TRADICIONAL</div>
                  <div className="text-sm sm:text-lg opacity-90">Servicios por Separado</div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { name: "Netflix Premium", price: "$15.99", icon: "🎬" },
                      { name: "HBO Max", price: "$14.99", icon: "🎭" },
                      { name: "Disney+ Premium", price: "$13.99", icon: "🏰" },
                      { name: "Prime Video", price: "$8.99", icon: "📦" },
                      { name: "Apple TV+", price: "$6.99", icon: "🍎" },
                      { name: "Paramount+", price: "$9.99", icon: "⭐" },
                      { name: "ESPN+ Deportes", price: "$9.99", icon: "⚽" },
                      { name: "UFC Fight Pass", price: "$9.99", icon: "🥊" },
                      { name: "Canales +18", price: "$19.99", icon: "🔞" },
                      { name: "TV Cable Premium", price: "$89.99", icon: "📺" },
                      { name: "Cine (2 películas)", price: "$24.00", icon: "🎫" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-red-900/20 rounded-xl border border-red-500/20">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-lg sm:text-xl">{service.icon}</span>
                          <span className="font-medium text-gray-200 text-xs sm:text-sm">{service.name}</span>
                        </div>
                        <span className="font-bold text-red-400 text-sm sm:text-base">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-red-900/40 to-pink-900/40 rounded-2xl border-2 border-red-500/30">
                    <div className="text-center">
                      <div className="text-xs sm:text-sm text-gray-300 mb-1">TOTAL MENSUAL</div>
                      <div className="text-2xl sm:text-3xl font-black text-red-400 mb-2">$232.89</div>
                      <div className="text-xs sm:text-sm text-gray-300">TOTAL ANUAL</div>
                      <div className="text-xl sm:text-2xl font-bold text-red-300">$2,794.68</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card StreamLATAM */}
            <div className="relative mt-4 mr-4">
              <div className="bg-black rounded-3xl shadow-2xl border-2 border-blue-400/50 overflow-visible relative transform hover:scale-105 transition-allall duration-300 h-full">
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 rounded-full font-bold text-xs shadow-lg transform rotate-12 z-10">
                  🏆 MEJOR OPCIÓN
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold mb-2">🚀 STREAMLATAM</div>
                  <div className="text-sm sm:text-lg opacity-90">Todo en Una Sola Plataforma</div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-2">$8.99</div>
                    </div>
                    <div className="text-sm sm:text-lg font-bold text-blue-400 bg-blue-900/30 px-3 sm:px-4 py-1 sm:py-2 rounded-full inline-block">
                      PAGO ÚNICO - SIN MENSUALIDADES
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {[
                      { text: "+2000 Canales Premium en Vivo", icon: "📺" },
                      { text: "+50,000 Películas y Series", icon: "🎬" },
                      { text: "Todos los Deportes + UFC", icon: "🥊" },
                      { text: "Canales para Adultos (+18)", icon: "🔞" },
                      { text: "Estrenos de Cine (Mismo día)", icon: "🎫" },
                      { text: "Netflix, HBO, Disney+, Prime...", icon: "🎭" },
                      { text: "Compatible con Smart TV", icon: "📱" },
                      { text: "Actualización Automática 24/7", icon: "🔄" },
                      { text: "Soporte Técnico Incluido", icon: "🛠️" },
                      { text: "Sin Contratos ni Renovaciones", icon: "✅" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-green-900/20 rounded-xl border border-green-500/20">
                        <span className="text-lg sm:text-xl">{feature.icon}</span>
                        <span className="font-medium text-gray-200 text-xs sm:text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 rounded-2xl p-3 sm:p-4 border-2 border-green-500/30 mb-4 sm:mb-6">
                    <div className="text-center">
                      <div className="text-lg sm:text-2xl font-bold text-green-400 mb-2">💰 AHORRO TOTAL</div>
                      <div className="text-3xl sm:text-4xl font-black text-green-300 mb-2">$2,785.69</div>
                      <div className="text-sm sm:text-lg text-green-400 font-semibold">¡Pagas menos del 1% del precio real!</div>
                    </div>
                  </div>

                  {/* Botão CTA */}
                  <div className="text-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 border-0 w-full"
                      onClick={() => window.open('https://pay.speedsellx.com/688FFED19B52C', '_blank')}
                    >
                      🚀 OBTENER ACCESO AHORA - $8.99
                    </Button>
                    <p className="text-gray-400 text-xs mt-2 px-2">
                      ⚡ Activación inmediata • 🛡️ Garantía 7 días • 🔒 Pago seguro
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Banner Final Mejorado */}
          <div className="relative">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center text-white">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl sm:text-3xl font-black mb-6">¡AHORRO ABSOLUTAMENTE INCREÍBLE!</h3>

                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-6">
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Valor Real del Contenido</div>
                    <div className="text-2xl sm:text-3xl font-black">$2,794.68</div>
                    <div className="text-xs sm:text-sm opacity-90">por año</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Tu Pagas con StreamLATAM</div>
                    <div className="text-2xl sm:text-3xl font-black">$8.99</div>
                    <div className="text-xs sm:text-sm opacity-90">una sola vez</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm opacity-90 mb-1">Porcentaje de Ahorro</div>
                    <div className="text-2xl sm:text-3xl font-black">99.7%</div>
                    <div className="text-xs sm:text-sm opacity-90">del precio real</div>
                  </div>
                </div>

                <div className="text-lg sm:text-2xl font-bold mb-6">
                  ¡Es como obtener TODO GRATIS y pagar solo los impuestos!
                </div>

                {/* Segundo CTA no Banner */}
                <Button
                  size="lg"
                  className="bg-white text-orange-600 font-bold text-lg sm:text-xl px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-xl transform hover:scale-110 transition-all duration-300 border-0 w-full sm:w-auto"
                  onClick={() => window.open('https://pay.speedsellx.com/688FFED19B52C', '_blank')}
                >
                  💎 APROVECHAR OFERTA AHORA
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Lo Que Dicen Nuestros Usuarios</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">+10,000 usuarios satisfechos • 98% de satisfacción</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "¡Increíble! Tengo acceso a todos los canales de deportes, UFC,
                  y hasta vi Wicked el mismo día que salió en cines. ¡Vale cada centavo!"
                </p>
                <div className="font-semibold">María González - México</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Más de 2000 canales en vivo y 50,000 películas. Veo todos los
                  partidos de fútbol y las peleas de UFC sin cortes."
                </p>
                <div className="font-semibold">Carlos Rodríguez - Colombia</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "Mi familia está encantada. Los niños ven Disney+, yo veo deportes
                  y mi esposa las series de Netflix. Todo en una sola app."
                </p>
                <div className="font-semibold">Ana Silva - Argentina</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Realmente incluye +2000 canales y +50,000 títulos?</h3>
                <p className="text-muted-foreground">Sí, incluimos más de 2000 canales en vivo (deportes, UFC, adultos, noticias) y más de 50,000 películas y series, incluyendo estrenos de cine.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Incluye canales para adultos y UFC?</h3>
                <p className="text-muted-foreground">Sí, incluimos canales premium para adultos (+18) y todos los eventos de UFC y deportes de combate en vivo.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Puedo ver estrenos de cine?</h3>
                <p className="text-muted-foreground">Sí, tenemos los últimos estrenos como Wicked, Gladiator II, Moana 2 y muchos más el mismo día que salen en cines.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Funciona en Smart TV?</h3>
                <p className="text-muted-foreground">Sí, es compatible con Smart TV, Android, iOS, PC y todos los dispositivos. Instalación fácil en 2 minutos.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Qué deportes puedo ver?</h3>
                <p className="text-muted-foreground">Todos: Fútbol, UFC, NBA, NFL, Tenis, Fórmula 1, y más. Canales como ESPN, Fox Sports, TNT Sports incluidos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Index;
