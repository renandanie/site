import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Award,
  BookOpen,
  Check,
  TrendingUp,
  Target,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20a%20gest%C3%A3o%20de%20tr%C3%A1fego%20pago";

type Plan = {
  name: string;
  price: string;
  priceSuffix?: string;
  highlight?: boolean;
  accent: string;
  tagline: string;
  features: { label: string; included: boolean }[];
};

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

const PLANS: Plan[] = [
  {
    name: "Bronze",
    price: "R$ 698",
    accent: "bronze",
    tagline: "Para começar com performance",
    features: FEATURES.map((label, i) => ({ label, included: i < 2 })),
  },
  {
    name: "Prata",
    price: "R$ 998",
    accent: "silver",
    highlight: true,
    tagline: "O mais escolhido pelos clientes",
    features: FEATURES.map((label, i) => ({ label, included: i < 4 })),
  },
  {
    name: "Ouro",
    price: "R$ 1.618",
    accent: "gold",
    tagline: "Estratégia completa de presença",
    features: FEATURES.map((label, i) => ({ label, included: i < 8 })),
  },
  {
    name: "Diamante Consultoria",
    price: "R$ 2.998",
    priceSuffix: "a partir de",
    accent: "diamond",
    tagline: "Imersão total no seu negócio",
    features: FEATURES.map((label) => ({ label, included: true })),
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Especialista em Tráfego Pago
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Transforme Investimento em{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Lucro
            </span>{" "}
            com Gestão Estratégica
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            <strong className="text-foreground">9 anos de experiência comercial</strong> e{" "}
            <strong className="text-foreground">5 anos em Marketing Digital</strong> ao
            serviço do seu faturamento.
          </p>

          {/* Formação */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 md:grid-cols-3">
            {[
              { icon: GraduationCap, title: "Formado em Marketing" },
              { icon: BookOpen, title: "Pós-graduado", sub: "Estratégia de Mídias Digitais — PUC" },
              { icon: Award, title: "MBA", sub: "Gestão Estratégica de Negócios — USP" },
            ].map(({ icon: Icon, title, sub }) => (
              <div
                key={title}
                className="rounded-2xl border border-border/60 bg-card/50 p-4 text-left backdrop-blur"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-semibold">{title}</p>
                {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
              </div>
            ))}
          </div>

          {/* Frase de impacto */}
          <blockquote className="mx-auto mt-12 max-w-3xl border-l-2 border-primary pl-6 text-left text-base italic text-foreground/90 md:text-lg">
            “Marketing e Vendas precisam estar em sintonia para gerar resultados reais.
            Eu não entrego apenas cliques, entrego{" "}
            <span className="not-italic font-semibold text-primary">
              estratégia de negócio
            </span>{" "}
            para o seu faturamento escalar.”
          </blockquote>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02]"
              style={{
                background: "var(--gradient-primary)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Falar comigo no WhatsApp
            </a>
            <a
              href="#planos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-card"
            >
              Ver planos
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, n: "+5", l: "anos em mídia paga" },
              { icon: Target, n: "+9", l: "anos comerciais" },
              { icon: Award, n: "USP", l: "MBA Estratégia" },
            ].map(({ icon: Icon, n, l }) => (
              <div key={l} className="rounded-2xl border border-border/60 bg-card/40 p-4">
                <Icon className="mx-auto h-4 w-4 text-primary" />
                <p className="mt-2 text-2xl font-bold">{n}</p>
                <p className="text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Escolha o plano ideal para escalar
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Planos transparentes, sem letras miúdas. Você sabe exatamente o que está
              incluso em cada nível de gestão.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PLANS.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 px-6 py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Especialista em Tráfego Pago. Todos os direitos reservados.
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-transform hover:scale-110"
        style={{
          background: "var(--gradient-primary)",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        <MessageCircle className="h-7 w-7 text-primary-foreground" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
      </a>
    </main>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const accentVar = `var(--${plan.accent})`;
  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-card p-6 transition-all ${
        plan.highlight
          ? "border-primary/60 lg:-translate-y-4 lg:scale-[1.03]"
          : "border-border/60 hover:border-border"
      }`}
      style={
        plan.highlight
          ? { boxShadow: "var(--shadow-glow)" }
          : { boxShadow: "var(--shadow-card)" }
      }
    >
      {plan.highlight && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          Mais Vendido
        </span>
      )}

      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: accentVar }}
        />
        <h3 className="text-lg font-bold">{plan.name}</h3>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>

      <div className="mt-5">
        {plan.priceSuffix && (
          <p className="text-xs text-muted-foreground">{plan.priceSuffix}</p>
        )}
        <p className="text-4xl font-bold tracking-tight">
          {plan.price}
          <span className="text-sm font-medium text-muted-foreground">/mês</span>
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-start gap-3">
            {f.included ? (
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "color-mix(in oklab, var(--primary) 20%, transparent)" }}
              >
                <Check className="h-3 w-3 text-primary" />
              </span>
            ) : (
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted/60 text-muted-foreground">
                ×
              </span>
            )}
            {f.included ? (
              <span className="text-foreground/90">{f.label}</span>
            ) : (
              <s className="text-muted-foreground/60">{f.label}</s>
            )}
          </li>
        ))}
      </ul>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:scale-[1.02] ${
          plan.highlight
            ? "text-primary-foreground"
            : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/70"
        }`}
        style={
          plan.highlight
            ? { background: "var(--gradient-primary)" }
            : undefined
        }
      >
        <MessageCircle className="h-4 w-4" />
        Falar comigo no WhatsApp
      </a>
    </div>
  );
}
