import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Especialista em Tráfego Pago | Gestão Estratégica Marketing" },
      { name: "description", content: "Transforme investimento em lucro com gestão estratégica de tráfego pago. Especialista em escala de negócios com visão multicanal." },
      { property: "og:title", content: "Especialista em Tráfego Pago | Gestão Estratégica Marketing" },
      { property: "og:description", content: "Transforme investimento em lucro com gestão estratégica de tráfego pago. Especialista em escala de negócios com visão multicanal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Especialista em Tráfego Pago | Gestão Estratégica Marketing" },
      { name: "twitter:description", content: "Transforme investimento em lucro com gestão estratégica de tráfego pago. Especialista em escala de negócios com visão multicanal." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0fb31825-c02a-4f15-ad6a-22f163dd89be/id-preview-b3574ec9--d48b8bc1-6369-4909-ac3e-fd1020197b3b.lovable.app-1778533093971.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0fb31825-c02a-4f15-ad6a-22f163dd89be/id-preview-b3574ec9--d48b8bc1-6369-4909-ac3e-fd1020197b3b.lovable.app-1778533093971.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
