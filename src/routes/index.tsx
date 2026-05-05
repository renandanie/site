import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, MessageCircle, Award, Target, BarChart3, Sparkles, TrendingUp, Zap, Briefcase } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5511913352181?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago";

const FEATURES = [
  "Gestão de anúncios no Meta ou Google",
  "Relatório semanal de resultados de campanha",
  "Reunião mensal de alinhamento e estratégia",
  "Suporte via WhatsApp (Seg à Sex)",
  "Criação das artes para os anúncios",
  "Gestão Google My Business",
  "Criação de Landing Page",
  "Consultoria de Vendas e Landing Page",
  "Criação de Criativos (Artes/Vídeos)",
];

type Plan = {
  name: string;
  tagline: string;
  price: string;
  prefix?: string;
  highlight?: boolean;
  includedCount: number;
};

const PLANS: Plan[] = [
  { name: "Bronze", tagline: "COMEÇAR COM MÉTODO", price: "R$ 698", includedCount: 2 },
  { name: "Prata", tagline: "ESCALAR COM PREVISIBILIDADE", price: "R$ 998", includedCount: 4, highlight: true },
  { name: "Ouro", tagline: "OPERAÇÃO COMPLETA", price: "R$ 1.618", includedCount: 8 },
  { name: "Diamante", tagline: "CONSULTORIA PREMIUM", prefix: "a partir de", price: "R$ 2.998", includedCount: 9 },
];

function Header() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-[min(1200px,calc(100%-2rem))]">
      <div className="flex items-center justify-between rounded-full border border-border/70 bg-white/80 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.18_25)] to-[oklch(0.62_0.18_250)] text-white font-bold text-sm">tP</span>
          <span className="font-semibold text-ink">
            Tráfego<span className="text-primary"> Estratégico</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sobre" className="hover:text-ink transition-colors">Sobre</a>
          <a href="#planos" className="hover:text-ink transition-colors">Planos</a>
          <a href="#contato" className="hover:text-ink transition-colors">Contato</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          style={{ background: "var(--gradient-cta)" }}
        >
          Agendar <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      {/* Top banner */}
      <div className="bg-ink py-2.5 text-center text-xs font-medium text-white/90">
        Tráfego pago não basta — <span className="text-white font-semibold">funil de vendas + comercial alinhado = conversão real.</span>
      </div>

      <Header />

      {/* HERO */}
      <section className="px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/70 px-4 py-1.5 text-[11px] font-medium tracking-[0.18em] text-muted-foreground backdrop-blur">
            <span className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.2_25)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.15_85)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.18_250)]" />
            </span>
            TRÁFEGO · ESTRATÉGIA · RESULTADO
          </div>

          <h1 className="mt-8 font-serif text-5xl leading-[1.02] text-ink md:text-7xl lg:text-[5.5rem]">
            Transforme investimento em{" "}
            <span className="italic text-primary">lucro</span>,
            <br />
            com gestão <span className="italic text-[oklch(0.7_0.2_25)]">estratégica</span>.
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <strong className="text-ink">Marketing e Vendas precisam estar em sintonia para gerar resultados reais.</strong>{" "}
              Não entrego apenas cliques — entrego estratégia de negócio para o seu faturamento escalar de forma previsível.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
              >
                Falar comigo no WhatsApp <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
              >
                Ver planos
              </a>
            </div>
          </div>

          {/* Services grid */}
          <div className="mt-24 grid gap-8 md:grid-cols-2 md:items-end">
            <h2 className="font-serif text-4xl leading-[1.05] text-ink md:text-5xl lg:text-6xl">
              Tudo que sua operação de mídia precisa para{" "}
              <span className="italic text-primary">escalar</span>.
            </h2>
            <p className="text-muted-foreground md:text-base">
              Soluções integradas — da estratégia ao último ajuste no anúncio.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Target, title: "Meta Ads", desc: "Campanhas de aquisição e remarketing no Facebook e Instagram com criativos que convertem e estrutura de conta otimizada para escala.", tags: ["Advantage+", "Catálogo", "Lead Ads"] },
              { icon: BarChart3, title: "Google Ads", desc: "Search, Performance Max, YouTube e Display orquestrados para capturar demanda quente e gerar pipeline qualificado.", tags: ["Search", "PMax", "YouTube"] },
              { icon: Sparkles, title: "Social Media", desc: "Gestão estratégica de redes sociais com calendário editorial, posicionamento de marca e conteúdo planejado para gerar autoridade e conexão real com a audiência.", tags: ["Estratégia", "Conteúdo", "Engajamento"] },
              { icon: TrendingUp, title: "Estratégia de Escala", desc: "Diagnóstico, planejamento de mídia e roadmap de crescimento com metas claras de CAC, ROAS e LTV para os próximos 90 dias.", tags: ["CAC", "LTV", "Funil"] },
              { icon: Zap, title: "Criativos de Performance", desc: "Direção e produção de criativos baseados em dados, com testes contínuos para reduzir CPA e aumentar CTR consistentemente.", tags: ["UGC", "Hooks", "A/B"] },
              { icon: Briefcase, title: "Consultoria Comercial", desc: "Estratégias de vendas, estruturação de funil comercial e atuação como closer para transformar leads qualificados em receita previsível.", tags: ["Funil de Vendas", "Closer", "Comercial"] },
            ].map(({ icon: Icon, title, desc, tags }) => (
              <div
                key={title}
                className="rounded-3xl border border-border/70 bg-white/75 p-7 backdrop-blur transition-all hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-white">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((t) => (
                    <span key={t} className="rounded-full border border-border/70 bg-white/70 px-3 py-1 text-xs text-ink/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-primary">SOBRE</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
            Mídia paga feita com <span className="italic text-primary">método</span>,
            não com sorte.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Marketing e Vendas precisam estar em sintonia para gerar resultados reais.
            Trabalho lado a lado com founders e times de marketing para construir
            operações de mídia previsíveis, rentáveis e escaláveis. Cada real investido
            tem propósito — desde a estratégia de funil até a otimização diária.
          </p>

        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary">PLANOS</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">
              Escolha o nível de{" "}
              <span className="italic text-[oklch(0.7_0.2_25)]">parceria</span>{" "}
              ideal.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
              Quatro caminhos pensados para a sua maturidade — do primeiro real investido
              em mídia até a operação comercial completa.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/70 bg-white/70 p-10 text-center backdrop-blur md:p-14" style={{ boxShadow: "var(--shadow-card)" }}>
          <p className="text-xs font-semibold tracking-[0.25em] text-primary">PRÓXIMO PASSO</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Vamos desenhar sua{" "}
            <span className="italic text-primary">próxima escalada</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Agende uma conversa estratégica. Vou analisar seu cenário atual e mostrar
            onde está o maior potencial de crescimento.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
          >
            Falar comigo no WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-5 text-[11px] font-medium tracking-[0.2em] text-muted-foreground">
            SEM COMPROMISSO · RESPOSTA RÁPIDA · 100% ONLINE
          </p>
        </div>
      </section>

      <footer className="border-t border-border/70 px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Especialista em Tráfego Pago. Todos os direitos reservados.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full text-white transition-transform hover:scale-110"
        style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 15px 40px -10px rgba(37,211,102,0.5)" }}
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.78_0.17_145)]/40" />
      </a>
    </main>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const isHighlight = plan.highlight;
  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white/85 p-7 backdrop-blur transition-all ${
        isHighlight
          ? "border-ink/80 lg:-translate-y-3"
          : "border-border/70 hover:-translate-y-1"
      }`}
      style={{ boxShadow: isHighlight ? "var(--shadow-card)" : "var(--shadow-soft)" }}
    >
      {isHighlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
          Mais Vendido
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-full text-white"
          style={{
            background:
              plan.name === "Bronze"
                ? "linear-gradient(135deg, oklch(0.65 0.13 50), oklch(0.55 0.13 45))"
                : plan.name === "Prata"
                ? "linear-gradient(135deg, oklch(0.62 0.18 250), oklch(0.5 0.18 255))"
                : plan.name === "Ouro"
                ? "linear-gradient(135deg, oklch(0.82 0.15 85), oklch(0.7 0.16 70))"
                : "linear-gradient(135deg, oklch(0.7 0.2 25), oklch(0.6 0.2 20))",
          }}
        >
          <Award className="h-5 w-5" />
        </span>
        <div>
          <h3 className="font-serif text-2xl text-ink">{plan.name}</h3>
          <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground">
            {plan.tagline}
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-border/60 pt-5">
        {plan.prefix && (
          <p className="text-xs text-muted-foreground">{plan.prefix}</p>
        )}
        <p className="font-serif text-4xl text-ink">{plan.price}</p>
        <p className="text-xs text-muted-foreground">/mês</p>
      </div>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {FEATURES.map((feature, i) => {
          const included = i < plan.includedCount;
          return (
            <li key={feature} className="flex items-start gap-2.5">
              {included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
              ) : (
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center text-muted-foreground/50">×</span>
              )}
              {included ? (
                <span className="text-ink/85">{feature}</span>
              ) : (
                <s className="text-muted-foreground/55">{feature}</s>
              )}
            </li>
          );
        })}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          isHighlight
            ? "bg-ink text-white"
            : "border border-ink/15 bg-white text-ink hover:bg-ink hover:text-white"
        }`}
      >
        Falar comigo no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
