"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Phone, Mail, MapPin, Menu, ArrowRight, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/20 transition-all duration-500 ${scrollY > 50 ? "bg-background/95 backdrop-blur-lg" : "bg-background/80 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <img
                src="/images/kilha-logotipo.svg"
                alt="Kilha"
                className="h-8 w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 font-light hover:scale-105"
                >
                  Início
                </a>
                <a
                  href="#about"
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 font-light hover:scale-105"
                >
                  Quem Somos
                </a>
                <a
                  href="#services"
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 font-light hover:scale-105"
                >
                  Serviços
                </a>
                <a
                  href="#footer"
                  className="text-foreground/70 hover:text-foreground transition-all duration-300 font-light hover:scale-105"
                >
                  Contato
                </a>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-foreground" />
            </div>
          </div>
        </div>
      </nav>

      <motion.section
        id="home"
        className="relative min-h-screen flex items-start opacity-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/boat.png"
            alt="Luxury yacht on calm waters"
            className="w-full h-full object-cover object-center"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background/95 via-background/70 to-background/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-28 lg:pt-32">
          <div className="w-full flex flex-col items-end justify-start">
            <div className="space-y-6 text-right max-w-3xl animate-slide-in-right">
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-foreground leading-snug">
                Inteligência financeira e soluções independentes
                <br />
                para um plano de vida completo
              </h2>

              <div className="flex items-center justify-end space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <span className="text-lg font-light text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  Fale com um especialista
                </span>
                <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
          <button
            onClick={scrollToNextSection}
            className="p-3 rounded-full bg-background/20 backdrop-blur-sm border border-white/20 hover:bg-background/30 transition-all duration-300 group hover:scale-110"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="h-6 w-6 text-foreground group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </motion.section>

      <section id="about" className="py-32 fluid-wave opacity-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-foreground mb-8">Quem Somos</h2>
            <p className="text-xl font-light text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A Kilha é um ecossistema de especialistas focados em impulsionar seus resultados no mercado financeiro,
              seja nos negócios ou no patrimônio pessoal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 animate-fade-in-left">
              <h3 className="text-2xl font-serif font-light text-foreground">Nossos Serviços</h3>
              <div className="space-y-4 text-muted-foreground font-light">
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Gestão de investimentos</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Crédito e câmbio</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Seguros personalizados</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Operações offshore</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Investimentos alternativos</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Planejamento sucessório</span>
                </div>
                <div className="flex items-center space-x-4 hover:translate-x-2 transition-transform duration-300 cursor-default">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Planejamento financeiro e patrimonial</span>
                </div>
              </div>
            </div>

            <div className="space-y-8 animate-fade-in-right">
              <h3 className="text-2xl font-serif font-light text-foreground">Nossas Localizações</h3>
              <div className="grid grid-cols-2 gap-6 text-muted-foreground font-light">
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">Goiânia</div>
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">São Paulo</div>
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">
                  Rio de Janeiro
                </div>
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">Montevideo</div>
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">Miami</div>
                <div className="hover:text-foreground transition-colors duration-300 cursor-default">Londres</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 bg-secondary/10 opacity-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-foreground">Serviços</h2>
          </div>

          <div className="space-y-20">
            <div className="grid lg:grid-cols-3 gap-16">
              <div className="space-y-6 animate-fade-in-up hover:scale-105 transition-transform duration-500 cursor-default p-6 bg-background rounded-xl shadow-lg border border-border/10">
                <h3 className="text-2xl font-serif font-light text-foreground">Investimentos</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Navegamos pelo mercado conforme seu direcionamento, buscando desde soluções mais conservadoras à
                  alternativas que desafiam o convencional, assegurando que seu patrimônio cresça de forma sustentável e
                  de acordo com seu apetite a risco.
                </p>
              </div>

              <div
                className="space-y-6 animate-fade-in-up hover:scale-105 transition-transform duration-500 cursor-default p-6 bg-background rounded-xl shadow-lg border border-border/10"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-serif font-light text-foreground">Seguros</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Soluções para proteger você, sua família e seus ativos contra imprevistos, garantindo tranquilidade
                  financeira e proteção sob medida. Para empresas oferecemos um serviço personalizado e consultivo
                  visando a redução de custos com seguros na operação ou a estruturação de apólices mais complexas.
                </p>
              </div>

              <div
                className="space-y-6 animate-fade-in-up hover:scale-105 transition-transform duration-500 cursor-default p-6 bg-background rounded-xl shadow-lg border border-border/10"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-serif font-light text-foreground">Crédito & Câmbio</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Levantamento de recursos para investimentos e custeio voltados para o seu negócio, estratégias
                  integradas e inovadoras que otimizam suas transações financeiras e gerenciam riscos cambiais,
                  múltiplas ofertas em um único canal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 fluid-wave opacity-0 animate-fade-in-up">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-foreground mb-12 leading-tight">
            Descubra Como Protegemos Seu Patrimônio e Maximizamos Seus Investimentos
          </h2>
          <div className="flex items-center justify-center space-x-4 group cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="text-xl font-light text-primary group-hover:text-primary/80 transition-colors duration-300">
              Agende uma reunião gratuita
            </span>
            <ArrowRight className="h-6 w-6 text-primary group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </section>

      <section id="faq" className="py-32 bg-secondary/10 opacity-0">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-foreground">Perguntas Frequentes</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem
              value="item-1"
              className="border-b border-border/30 pb-6 hover:bg-background/50 transition-colors duration-300 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-light text-lg text-foreground hover:no-underline">
                Quais são os riscos envolvidos nos investimentos que vocês oferecem?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-4">
                Trabalhamos em parceria com as maiores e mais premiadas instituições do mercado financeiro, oferecendo
                uma ampla diversificação de ativos para mitigar riscos e maximizar oportunidades. Nossa equipe prioriza
                a segurança e a solidez dos investimentos, com um foco estratégico em gestão de risco e alocação
                eficiente para proteger o patrimônio de nossos clientes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-border/30 pb-6 hover:bg-background/50 transition-colors duration-300 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-light text-lg text-foreground hover:no-underline">
                Como vocês garantem a segurança dos meus ativos?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-4">
                A segurança dos seus ativos é nossa prioridade. Trabalhamos apenas com instituições financeiras de alta
                credibilidade e contamos com processos rigorosos de auditoria e monitoramento. Além disso, utilizamos
                tecnologia de ponta para proteger suas informações e garantir a integridade dos investimentos,
                oferecendo transparência total em todas as operações.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-border/30 pb-6 hover:bg-background/50 transition-colors duration-300 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-light text-lg text-foreground hover:no-underline">
                Qual o valor mínimo para começar?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-4">
                Trabalhamos com opções de investimento acessíveis para diferentes perfis de clientes. O valor mínimo
                varia conforme o produto e a estratégia escolhida, permitindo que você comece a investir com segurança e
                de acordo com seus objetivos financeiros.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-border/30 pb-6 hover:bg-background/50 transition-colors duration-300 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-light text-lg text-foreground hover:no-underline">
                Como é feito o processo de escolha e recomendação dos investimentos?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-4">
                Nosso processo de escolha e recomendação de investimentos é baseado em uma análise detalhada do perfil e
                dos objetivos financeiros de cada cliente. Em parceria com as principais instituições do mercado,
                oferecemos soluções personalizadas e diversificadas que buscam maximizar o retorno com um controle
                rigoroso de riscos. Todo o processo é revisado periodicamente para ajustar a estratégia conforme as
                condições de mercado e mudanças nas metas dos nossos clientes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-border/30 pb-6 hover:bg-background/50 transition-colors duration-300 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-light text-lg text-foreground hover:no-underline">
                Quais são os diferenciais da consultoria em relação a outras opções de investimento?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-light leading-relaxed pt-4">
                Nosso diferencial é oferecer uma experiência personalizada e exclusiva, ajustada aos seus objetivos e
                perfil de risco. Ao contrário das opções tradicionais, nossa consultoria cria estratégias sob medida,
                com acesso a produtos variados e oportunidades exclusivas, graças às parcerias com as maiores
                instituições do mercado financeiro. Nossa equipe acompanha de perto o desempenho dos investimentos e faz
                ajustes estratégicos conforme necessário, garantindo que suas metas sejam atingidas com segurança e
                transparência. Com a nossa consultoria, você não apenas investe; constrói um patrimônio com o suporte de
                especialistas dedicados ao seu sucesso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>



      <footer id="footer" className="bg-foreground/5 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <img
              src="/images/kilha-logotipo.svg"
              alt="Kilha"
              className="h-16 w-auto mx-auto mb-12 hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Contato */}
            <div className="space-y-6">
              <h3 className="font-light text-foreground text-lg mb-4">Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground font-light text-sm">contato@ogrupok.com.br</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground font-light text-sm">+55 62 99193-0345</p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground font-light text-xs">
                    Av. Portugal, 1148, Orion Business & Health Complex, Sala C3208 - St. Marista, Goiânia - GO, 74150-030
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa do Site */}
            <div className="space-y-6">
              <h3 className="font-light text-foreground text-lg mb-4">Navegação</h3>
              <div className="space-y-3">
                <a href="#home" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Início
                </a>
                <a href="#about" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Quem Somos
                </a>
                <a href="#services" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Serviços
                </a>
                <a href="#footer" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Contato
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div className="space-y-6">
              <h3 className="font-light text-foreground text-lg mb-4">Serviços</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground font-light text-sm">
                  Consultoria Financeira
                </p>
                <p className="text-muted-foreground font-light text-sm">
                  Planejamento Patrimonial
                </p>
                <p className="text-muted-foreground font-light text-sm">
                  Gestão de Investimentos
                </p>
                <p className="text-muted-foreground font-light text-sm">
                  Análise de Riscos
                </p>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="font-light text-foreground text-lg mb-4">Legal</h3>
              <div className="space-y-3">
                <a href="#" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Termos de Uso
                </a>
                <a href="#" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  Política de Cookies
                </a>
                <a href="#" className="block text-muted-foreground font-light text-sm hover:text-primary transition-colors duration-300">
                  LGPD
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 pt-8">
            <div className="text-center space-y-2">
              <p className="text-xs font-light text-muted-foreground">
                © 2024 Kilha. Todos os direitos reservados. Inteligência financeira e soluções independentes.
              </p>
              <p className="text-xs font-light text-muted-foreground/60">
                Tecnologia por{" "}
                <a
                  href="https://slift.io/kilha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300 underline"
                >
                  Sliftio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
