export default function Home() {
  return (
    <main className="bg-[#f5f5f3] text-zinc-900 min-h-screen">
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <img
              src="/logo-nova.png"
              alt="Logo Terceiro Nível"
              className="w-14 h-14 object-contain mb-6"
            />

            <div className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
              Terceiro Nível
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
              Entender o que está por trás.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-zinc-600 max-w-xl">
              Um espaço de leitura e reflexão sobre temas que afetam a vida das
              pessoas, mas raramente recebem atenção proporcional à sua
              importância.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-16">
            <p>
              O Terceiro Nível nasce para aproximar temas complexos das pessoas
              diretamente afetadas por eles.
            </p>

            <p>
              A proposta é observar estruturas, incentivos e mecanismos que
              influenciam o cotidiano, mas que nem sempre aparecem nas conversas
              públicas.
            </p>

            <p>
              A participação acontece por meio de perguntas, reflexões,
              acompanhamento e circulação dos temas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="/editorial/por-que-terceiro-nivel"
              className="block bg-white border border-zinc-200 rounded-[28px] p-7 hover:border-zinc-400 transition-all duration-300"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
                Institucional
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Por que Terceiro Nível?
              </h2>

              <p className="text-zinc-500 leading-relaxed">
                Entenda a origem do nome e a proposta do projeto.
              </p>
            </a>

            <a
              href="/fora-da-pauta"
              className="block bg-zinc-900 text-white rounded-[28px] p-7 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
                Capilaridade
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Fora da pauta
              </h2>

              <p className="text-zinc-300 leading-relaxed">
                Perguntas que circulam por camisetas, QR Codes e páginas de
                aprofundamento.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}