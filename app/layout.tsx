export const metadata: Metadata = {
  metadataBase: new URL("https://www.terceironivel.org"),

  title: {
    default: "Terceiro Nível",
    template: "%s | Terceiro Nível",
  },

  description:
    "Conscientização e reflexão pública sobre temas que afetam a vida das pessoas, mas raramente recebem atenção proporcional à sua importância.",

  keywords: [
    "terceiro nível",
    "conscientização",
    "reflexão pública",
    "cidadania",
    "dívida pública",
    "orçamento público",
    "economia",
    "política",
    "temas fora da pauta",
  ],

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Terceiro Nível",
    description:
      "Perguntas que ajudam a observar o que está por trás dos temas que afetam o cotidiano das pessoas.",
    url: "https://www.terceironivel.org",
    siteName: "Terceiro Nível",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terceiro Nível — Conscientização e reflexão pública",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terceiro Nível",
    description:
      "Perguntas que ajudam a observar o que está por trás dos temas que afetam o cotidiano das pessoas.",
    images: ["/og-image.png"],
  },
};