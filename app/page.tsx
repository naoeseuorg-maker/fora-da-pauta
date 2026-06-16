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
              Terceiro Nível ✓
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-8">
              Nem sempre o que ocupa mais espaço no debate público é o que mais
              influencia a vida das pessoas.
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-zinc-600 max-w-xl">
              Um convite à observação de temas que afetam milhões de brasileiros,
              mas raramente recebem atenção proporcional à sua importância.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-16">
            <p>
              O Terceiro Nível reúne perguntas sobre assuntos que atravessam o
              cotidiano, os recursos públicos, a economia, a política e a forma
              como nossa atenção é disputada.
            </p>

            <p>
              Não pretende dizer às pessoas o que pensar.
            </p>

            <p>
              Pretende apenas convidá-las a observar o que está fora do foco.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <a
              href="/fora-da-pauta"
              className="block bg-zinc-900 text-white rounded-[28px] p-7 hover:bg-zinc-800 transition-all duration-300"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
                Fora da pauta
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Ver perguntas
              </h2>

              <p className="text-zinc-300 leading-relaxed">
                Acesse a coleção de perguntas, camisetas e páginas de
                aprofundamento do projeto.
              </p>
            </a>

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
              href="/participar"
              className="block bg-white border border-zinc-200 rounded-[28px] p-7 hover:border-zinc-400 transition-all duration-300"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
                Participar
              </div>

              <h2 className="text-2xl font-semibold mb-3">
                Ajude a ampliar a conversa.
              </h2>

              <p className="text-zinc-500 leading-relaxed">
                Sugira temas, acompanhe conteúdos e participe da construção do
                projeto.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}