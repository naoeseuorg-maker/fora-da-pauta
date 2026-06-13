const perguntas = [
  {
    titulo: "Se o Brasil arrecada trilhões, por que falta dinheiro?",
    imagem: "/camisetas/trilhoes/camiseta.png",
    href: "/trilhoes",
    status: "publicado",
  },
  {
    titulo: "A vitória é sua, o empate é nosso e a derrota é minha?",
    imagem: "/camisetas/vitoria-e-sua/camiseta.png",
    href: "/vitoria-e-sua",
    status: "publicado",
  },
  {
    titulo: "Como funciona a dívida pública?",
    status: "embreve",
  },
  {
    titulo: "Como o orçamento é dividido?",
    status: "embreve",
  },
  {
    titulo: "Por que os juros são tão altos?",
    status: "embreve",
  },
];

export default function ForaDaPautaPage() {
  return (
    <main className="bg-[#f5f5f3] text-zinc-900 min-h-screen">
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <img
              src="/logo-nova.png"
              alt="Logo Terceiro Nível"
              className="w-14 h-14 object-contain mb-6"
            />

            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              Fora da pauta
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Perguntas que merecem observação pública.
            </h1>

            <p className="text-lg text-zinc-600 max-w-xl">
              Temas que afetam milhões de pessoas, mas raramente recebem atenção
              proporcional à sua importância.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perguntas.map((pergunta) =>
              pergunta.status === "publicado" ? (
                <a
                  key={pergunta.titulo}
                  href={pergunta.href}
                  className="group bg-white border border-zinc-200 rounded-[32px] p-6 hover:border-zinc-400 transition-all duration-300"
                >
                  {pergunta.imagem ? (
                    <div className="aspect-square flex items-center justify-center mb-6 overflow-hidden">
                      <img
                        src={pergunta.imagem}
                        alt={pergunta.titulo}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="aspect-square flex items-center justify-center mb-6 rounded-[24px] bg-zinc-900 text-white p-8 text-center">
                      <div className="text-2xl md:text-3xl font-semibold leading-tight">
                        {pergunta.titulo}
                      </div>
                    </div>
                  )}

                  <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                    {pergunta.titulo}
                  </h2>
                </a>
              ) : (
                <div
                  key={pergunta.titulo}
                  className="bg-white border border-zinc-200 rounded-[32px] p-6 opacity-70"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
                    Em desenvolvimento
                  </div>

                  <h2 className="text-xl md:text-2xl font-semibold leading-tight">
                    {pergunta.titulo}
                  </h2>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}