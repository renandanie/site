import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight, MessageCircle, Award, Target, BarChart3, Sparkles, TrendingUp, Zap, Briefcase, FileSignature, CreditCard, MessageSquare, Users, Presentation, Play, BarChart2 } from "lucide-react";
import logo from "@/assets/logo.png";
import renan from "@/assets/renan.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_BASE = "https://wa.me/5511970828504";
const WHATSAPP_URL = WHATSAPP_BASE;
const WHATSAPP_HERO = `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Estou no seu site e gostaria de entender como transformar meu investimento em lucro com gestão estratégica.")}`;
const WHATSAPP_CUSTOM = `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento para um Plano Customizado sob medida.")}`;
const WHATSAPP_FINAL = `${WHATSAPP_BASE}?text=${encodeURIComponent("Olá! Quero agendar uma conversa estratégica para desenhar a minha próxima escalada.")}`;
const planWhatsapp = (name: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(`Olá! Gostaria de saber mais informações sobre o Plano ${name}.`)}`;

const FEATURES = [
  "Gestão de anúncio no Meta e Google",
  "Relatório semanal de resultados de campanha",
  "Reunião mensal de alinhamento e estratégia",
  "Suporte via WhatsApp (Seg à Sex)",
  "Criação das artes para os anúncios",
  "Gestão Google My Business",
  "Consultoria Comercial e Funil de Vendas",
  "Consultoria Estratégica em Redes Sociais",
];

type Plan = {
  name: string;
  tagline: string;
  price: string;
  prefix?: string;
  highlight?: boolean;
  includedCount: number;
  featureOverrides?: Record<number, string>;
  highlightAds?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Bronze",
    tagline: "COMEÇAR COM MÉTODO",
    price: "R$ 698",
    includedCount: 4,
    featureOverrides: { 0: "Gestão de anúncio no Meta ou Google" },
  },
  {
    name: "Prata",
    tagline: "ESCALAR COM PREVISIBILIDADE",
    price: "R$ 998",
    includedCount: 5,
    highlight: true,
    featureOverrides: { 0: "Gestão de anúncio no Meta ou Google", 3: "Suporte via WhatsApp (Prioridade)" },
  },
  { name: "Ouro", tagline: "OPERAÇÃO COMPLETA", price: "R$ 1.618", includedCount: 6, highlightAds: true },
  { name: "Diamante", tagline: "CONSULTORIA PREMIUM", prefix: "a partir de", price: "R$ 2.998", includedCount: 8, highlightAds: true },
];

function Header() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-[min(1200px,calc(100%-2rem))]">
      <div className="flex items-center justify-between rounded-full border border-border/70 bg-white/80 px-5 py-3 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="UP Marketing" className="h-12 w-12 rounded-full object-contain" />
          <span className="font-semibold text-ink">
            Estratégia<span className="text-primary"> ADS</span>
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#sobre" className="hover:text-ink transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-ink transition-colors">Serviços</a>
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
      <div className="sticky top-0 z-50 bg-ink py-2.5 text-center text-xs font-medium text-white/90">
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
            com gestão <span className="italic text-[oklch(0.7_0.2_25)]">estratégica</span>.
          </h1>

          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <strong className="text-ink">Marketing e Vendas precisam estar em sintonia para gerar resultados reais.</strong>{" "}
              Não entrego apenas cliques — entrego estratégia de negócio para o seu faturamento escalar de forma previsível.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_HERO}
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
          <div id="servicos" className="mt-24 grid gap-8 md:grid-cols-2 md:items-end scroll-mt-32">
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
                className="group rounded-3xl border border-border/70 bg-white/75 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_25px_60px_-15px_oklch(0.62_0.18_250/0.35)]"
                style={{ boxShadow: "var(--shadow-soft)" }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-white transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50">
                  <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6" />
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 md:flex-row md:items-start">
          {/* Foto + nome */}
          <div className="flex flex-shrink-0 flex-col items-center">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-[2rem] opacity-60 blur-2xl"
                style={{ background: "linear-gradient(135deg, oklch(0.7 0.2 25 / 0.5), oklch(0.62 0.18 250 / 0.5))" }}
              />
              <div
                className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-white"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <img
                  src={renan}
                  alt="Renan Daniel — Estrategista Digital"
                  className="h-[420px] w-[280px] object-cover"
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="font-serif text-3xl text-ink">Renan Daniel</p>
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary">SOBRE</p>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-5xl lg:text-6xl">
              Mídia paga feita com <span className="italic text-primary">método</span>,
              não com sorte.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Marketing e Vendas precisam estar em sintonia para gerar resultados reais.
              Trabalho lado a lado com founders e times de marketing para construir
              operações de mídia previsíveis, rentáveis e escaláveis. Cada real investido
              tem propósito — desde a estratégia de funil até a otimização diária.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Formado em Marketing",
                "Pós-graduado em Mídias Digitais — PUC",
                "MBA em Gestão Estratégica de Negócios — USP",
                "Certificado Google e Meta Ads",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { n: "4 anos", l: "em gestão de anúncios" },
                { n: "+R$1M", l: "gerenciados em anúncios" },
                { n: "8 anos", l: "em marketing e redes sociais" },
                { n: "9 anos", l: "em planejamento comercial" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border/60 bg-white/60 px-3 py-2">
                  <p className="font-serif text-lg leading-tight text-primary">{s.n}</p>
                  <p className="text-xs leading-snug text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>

          </div>
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

          <p className="mt-12 text-center text-sm font-medium text-muted-foreground">
            Todos os planos incluem reunião estratégica gratuita na contratação.
          </p>
        </div>
      </section>

      {/* ETAPAS START */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.7 0.2 25 / 0.35), transparent)" }} />
          <div className="absolute right-0 bottom-0 h-[320px] w-[520px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(closest-side, oklch(0.62 0.18 250 / 0.4), transparent)" }} />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-primary">PROCESSO</p>
            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">
              Etapas para o{" "}
              <span className="italic text-[oklch(0.7_0.2_25)]">"Start"</span>{" "}
              do seu projeto
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground md:text-lg">
              Um caminho claro, do contrato à primeira veiculação — sem fricção, com método.
            </p>
          </div>

          <div className="relative mt-16">
            {/* timeline line (desktop) */}
            <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: FileSignature, title: "Assinatura do contrato", desc: "Formalizamos a parceria de forma simples e 100% digital." },
                { icon: CreditCard, title: "Pagamento confirmado", desc: "Liberação imediata para o início da operação." },
                { icon: MessageSquare, title: "Grupo no WhatsApp", desc: "Canal direto criado e reunião de boas-vindas agendada." },
                { icon: Users, title: "Boas-vindas & briefing", desc: "Captação completa das informações estratégicas do seu negócio." },
                { icon: Presentation, title: "Debriefing em 10 dias", desc: "Apresentação do plano de ação personalizado para sua marca." },
                { icon: Play, title: "Campanhas no ar", desc: "Primeiros anúncios ativos nas plataformas escolhidas." },
                { icon: BarChart2, title: "Acompanhamento contínuo", desc: "Comunicação semanal e relatório mensal de resultados." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="group relative flex flex-col rounded-3xl border border-border/70 bg-white/80 p-6 backdrop-blur transition-all hover:-translate-y-1.5 hover:border-ink/30"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-full font-serif text-base font-semibold text-white"
                      style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-glow)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-6 w-6 text-ink/40 transition-colors group-hover:text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}

              {/* CTA card occupying the 8th cell */}
              <div
                className="relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.32 0.08 270))", boxShadow: "var(--shadow-card)" }}
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur">
                    Vamos começar
                  </span>
                  <h3 className="mt-5 font-serif text-2xl leading-snug">
                    Pronto para dar o <span className="italic">start</span>?
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Em poucos dias sua operação estará rodando com método.
                  </p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
                >
                  <MessageCircle className="h-4 w-4" /> Iniciar meu projeto
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center lg:hidden">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 15px 40px -10px rgba(37,211,102,0.5)" }}
            >
              <MessageCircle className="h-4 w-4" /> Iniciar meu projeto
            </a>
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
        © 2025 Especialista em Tráfego Pago. Todos os direitos reservados.
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
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-4 py-1.5 text-center text-[10px] font-bold uppercase leading-none tracking-[0.18em] text-white">
          Mais Escolhido
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
          const label = plan.featureOverrides?.[i] ?? feature;
          const isAdsHighlight = i === 0 && included && plan.highlightAds;
          return (
            <li key={feature} className="flex items-start gap-2.5">
              {included ? (
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
              ) : (
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center text-muted-foreground/50">×</span>
              )}
              {included ? (
                <span className={isAdsHighlight ? "font-semibold text-ink" : "text-ink/85"}>{label}</span>
              ) : (
                <s className="text-muted-foreground/55">{label}</s>
              )}
            </li>
          );
        })}
      </ul>

      <a
        href={planWhatsapp(plan.name)}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
          isHighlight
            ? "bg-ink text-white"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        Falar comigo no WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
