export const metadata = {
  title: "Quem ganha enquanto todos brigam?",
  description:
    "Uma reflexão sobre polarização, disputa pública e os interesses que se beneficiam quando a sociedade se mantém dividida.",
};







export default function QuemGanhaPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/camisetas/quem-ganha/camiseta.png"
            alt="Camiseta Quem ganha enquanto todos brigam?"
            className="w-full max-w-xl mx-auto mb-12"
          />

          <h1 className="text-4xl md:text-5xl leading-tight font-semibold text-zinc-900 mb-6">
            Quem ganha
            <br />
            enquanto todos brigam?
          </h1>

          <p className="text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
            Uma reflexão sobre polarização, atenção pública e os assuntos que
            desaparecem do debate.
          </p>

          <a
            href="LINK_DA_MONTINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
          >
            Adquirir camiseta
          </a>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <article className="space-y-8 text-lg leading-relaxed text-zinc-700">
            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Quem ganha enquanto todos brigam?
            </p>

            <p>
              Nos últimos anos, milhões de pessoas passaram a discutir política
              diariamente.
            </p>

            <p>
              Famílias se dividiram. Amizades foram rompidas. Grupos passaram a
              enxergar uns aos outros como adversários.
            </p>

            <p>
              Ao mesmo tempo, diversos temas que afetam a vida das pessoas
              continuaram recebendo pouca atenção.
            </p>

            <p className="text-center font-medium text-zinc-900">
              Orçamento.
              <br />
              Juros.
              <br />
              Dívida pública.
              <br />
              Distribuição de recursos.
              <br />
              Concentração econômica.
            </p>

            <p>
              Enquanto a atenção pública se concentra no conflito imediato,
              assuntos estruturais seguem moldando o cotidiano de milhões de
              brasileiros.
            </p>

            <p>
              Então surge uma pergunta simples:
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900 text-center py-4">
              Quem ganha enquanto todos brigam?
            </p>

            <p>
              Quando duas torcidas brigam, toda a atenção vai para o confronto.
            </p>

            <p>
              Pouca gente observa quem está organizando o jogo, definindo as
              regras ou recolhendo a bilheteria.
            </p>

            <p>
              A política também pode funcionar assim: enquanto a sociedade se
              divide entre lados, personagens e disputas, outras decisões seguem
              sendo tomadas.
            </p>

            <p>
              O problema não é discordar.
            </p>

            <p>
              Discordar faz parte da democracia.
            </p>

            <p>
              O problema é quando a disputa ocupa todo o campo de visão e impede
              que a sociedade observe o que continua acontecendo fora do foco.
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Estamos discutindo os problemas?
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Ou apenas discutindo uns com os outros?
            </p>

            <div className="pt-10 text-center">
              <a
                href="https://montink.com/terceiro-nivel/ganha-aveou"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
              >
                Adquirir camiseta
              </a>

              <a
                  href="/editorial/por-que-terceiro-nivel"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  Entender o projeto
                </a>

              <div className="mt-10 flex flex-col items-center gap-4 text-sm uppercase tracking-[0.2em]">
                <a
                  href="/participar"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  Participar
                </a>

                <a
                  href="/fora-da-pauta"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
                >
                  Fora da Pauta
                </a>

                <a
                  href="/"
                  className="text-zinc-400 hover:text-zinc-900 transition-colors duration-300"
                >
                  Início
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}