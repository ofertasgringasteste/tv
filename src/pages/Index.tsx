import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StreamingLogo } from "@/components/StreamingLogo";
import { CountdownTimer } from "@/components/CountdownTimer";
import { useState } from "react";
import { 
  Play, 
  Shield, 
  Smartphone, 
  Globe, 
  DollarSign, 
  Clock, 
  Star, 
  Check,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">StreamLATAM</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
              <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
              <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90">
                Obtener Acceso Ahora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <nav className="flex flex-col gap-4">
                <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
                <a href="#planes" className="hover:text-primary transition-colors">Planes</a>
                <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
                <Button className="bg-primary hover:bg-primary/90 w-full mt-2">
                  Obtener Acceso Ahora
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

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
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Accede a <span className="text-primary">TODOS</span> los Streamings por Solo{" "}
                <span className="text-accent">$8.99</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Netflix, HBO Max, Disney+, Prime Video y +50 plataformas más en una sola app
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  COMENZAR AHORA - $8.99
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Demo
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
                  <p className="text-sm text-muted-foreground mb-2">+50 plataformas más incluidas</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Por Qué Elegir StreamLATAM?</h2>
            <p className="text-xl text-muted-foreground">La solución más inteligente para el entretenimiento</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AHORRA MÁS DE $200/MES</h3>
                <p className="text-muted-foreground">Todas las plataformas por menos que una sola suscripción</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">ACCESO INSTANTÁNEO</h3>
                <p className="text-muted-foreground">Activa tu cuenta en menos de 2 minutos</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">CONTENIDO GLOBAL</h3>
                <p className="text-muted-foreground">+50,000 títulos de todo el mundo sin restricciones</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
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

      {/* Plataformas Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Todas Estas Plataformas en <span className="text-primary">UNA SOLA APP</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            <StreamingLogo name="Netflix" className="h-20" />
            <StreamingLogo name="HBO MAX" className="h-20" />
            <StreamingLogo name="Disney+" className="h-20" />
            <StreamingLogo name="Prime Video" className="h-20" />
            <StreamingLogo name="Apple TV+" className="h-20" />
            <StreamingLogo name="Paramount" className="h-20" />
            <StreamingLogo name="Star+" className="h-20" />
            <StreamingLogo name="Crunchyroll" className="h-20" />
            <StreamingLogo name="Globoplay" className="h-20" />
            <div className="bg-card border border-dashed border-primary/50 rounded-lg h-20 flex items-center justify-center">
              <span className="text-primary font-semibold">+40 MÁS</span>
            </div>
          </div>

          <div className="text-center">
            <Badge className="bg-accent text-accent-foreground text-lg px-6 py-2">
              Y MUCHAS MÁS... +50 plataformas incluidas
            </Badge>
          </div>
        </div>
      </section>

      {/* Comparación Section */}
      <section id="planes" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">COMPARACIÓN DE AHORRO</h2>
            <p className="text-xl text-muted-foreground">Ve cuánto puedes ahorrar con StreamLATAM</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center">Servicios Individuales</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Netflix Estándar</span>
                    <span className="font-semibold">$12.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>HBO Max</span>
                    <span className="font-semibold">$9.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Disney+</span>
                    <span className="font-semibold">$8.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prime Video</span>
                    <span className="font-semibold">$6.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Apple TV+</span>
                    <span className="font-semibold">$6.99</span>
                  </div>
                  <div className="border-t border-border pt-4 mt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>TOTAL MENSUAL</span>
                      <span className="text-destructive">$45.95</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/10 border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
                MEJOR OPCIÓN
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">StreamLATAM</h3>
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold text-primary mb-2">$8.99</div>
                  <div className="text-lg text-muted-foreground">Una sola vez</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Todas las plataformas incluidas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Sin mensualidades</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Activación inmediata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
                <div className="border-t border-primary/30 pt-4 mt-6">
                  <div className="text-center">
                    <span className="text-lg font-bold text-success">AHORRO ANUAL: +$443 USD</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo Que Dicen Nuestros Usuarios</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground">+10,000 usuarios satisfechos • 98% de satisfacción</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground">
                  "¡Increíble! Antes pagaba más de $40 al mes en suscripciones. 
                  Ahora tengo todo por menos de $9. ¡Recomendado 100%!"
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
                  "La app funciona perfectamente. Puedo ver Netflix, HBO y 
                  Disney+ sin problemas. Vale cada centavo."
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
                  "Mi familia está encantada. Tenemos acceso a todo el 
                  contenido que queremos por una fracción del precio."
                </p>
                <div className="font-semibold">Ana Silva - Argentina</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Urgencia Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-destructive">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
              ⚠️ OFERTA POR TIEMPO LIMITADO
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Solo los primeros 1,000 usuarios obtendrán acceso por $8.99<br />
              Después el precio será $19.99
            </p>
            
            <div className="mb-8">
              <CountdownTimer />
            </div>

            <Badge className="bg-accent text-accent-foreground text-lg px-6 py-2 mb-8">
              Quedan 247 lugares disponibles
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¡No Pierdas Esta Oportunidad!
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Únete a miles de latinoamericanos que ya están ahorrando
            </p>

            <Card className="bg-card border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg py-4"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-4"
                >
                  OBTENER ACCESO COMPLETO - $8.99
                </Button>

                <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                  <span>✓ Activación inmediata</span>
                  <span>✓ Sin renovación automática</span>
                  <span>✓ Soporte en español</span>
                </div>
              </form>
            </Card>

            <div className="mt-8">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">🛡️ GARANTÍA DE 7 DÍAS</h3>
              <p className="text-muted-foreground">
                Si no funciona como prometemos, te devolvemos tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Realmente incluye todas las plataformas?</h3>
                <p className="text-muted-foreground">Sí, incluimos +50 plataformas de streaming premium como Netflix, HBO Max, Disney+, Prime Video y muchas más.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Es legal y seguro?</h3>
                <p className="text-muted-foreground">Completamente legal y seguro. Garantizamos el funcionamiento de todas las plataformas incluidas.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Funciona en mi país?</h3>
                <p className="text-muted-foreground">Sí, funciona en toda América Latina sin restricciones geográficas.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Hay costos adicionales?</h3>
                <p className="text-muted-foreground">No, solo pagas $8.99 una vez. Sin mensualidades ocultas ni renovaciones automáticas.</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">¿Qué pasa si no funciona?</h3>
                <p className="text-muted-foreground">Ofrecemos garantía de 7 días. Si no funciona como prometemos, te devolvemos tu dinero sin preguntas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">StreamLATAM</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
              <a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a>
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary transition-colors">Contacto</a>
              <a href="#" className="hover:text-primary transition-colors">Soporte</a>
            </div>
            
            <p className="text-muted-foreground">
              © 2025 StreamLATAM. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Hecho con ❤️ para América Latina
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
