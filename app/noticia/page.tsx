export const metadata = {
  title: "Quem decide o que vira notícia?",
  description:
    "Uma reflexão sobre notícia, atenção, interesses e aquilo que permanece fora da pauta.",
};

export default function NoticiaPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <section className="py-20 px-6 border-b border-zinc-200">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/camisetas/noticia/camiseta.png"
            alt="Camiseta Quem decide o que vira notícia?"
            className="w-full max-w-xl mx-auto mb-12"
          />

          <h1 className="text-4xl md:text-5xl leading-tight font-semibold text-zinc-900 mb-6">
            Fora da pauta:
            <br />
            quem decide
            <br />
            o que vira
            <br />
            notícia?
          </h1>

          <p className="text-lg text-zinc-600 mb-8 max-w-xl mx-auto">
            Uma pergunta sobre notícia, atenção, interesses e aquilo que
            permanece fora do debate público.
          </p>

          <a
            href="https://montink.com/terceiro-nivel/noticia-8suwl"
            target="_blank"
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
              Quem decide o que vira (ou não) notícia?
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              A notícia influencia a atenção.
              <br />
              A atenção influencia o debate.
              <br />
              E o debate influencia as decisões.
            </p>

            <p>
              Hoje, essa influência não acontece apenas pela televisão, pelo
              rádio ou pelos jornais.
            </p>

            <p>
              Ela também acontece pelas redes sociais, pelos vídeos que
              assistimos, pelos conteúdos que compartilhamos e pelos assuntos
              que ocupam nosso tempo.
            </p>

            <p>
              Por isso, compreender a realidade talvez exija observar não apenas
              aquilo que recebe atenção.
            </p>

            <p>
              Mas também aquilo que deixa de recebê-la.
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Ao encontrar uma notícia, observe também aquilo que está além
              dela.
            </p>

            <p>
              Quem se beneficia quando esse assunto recebe atenção?
            </p>

            <p>
              Quem se beneficia quando outros assuntos permanecem fora da pauta?
            </p>

            <p>
              Quais interesses estão sendo fortalecidos?
            </p>

            <p>
              E quais interesses estão sendo protegidos?
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Nem sempre a influência acontece apenas por aquilo que é escondido.
            </p>

            <p>
              Às vezes ela acontece também por aquilo que recebe atenção
              constante.
            </p>

            <p>
              Porque aquilo que ocupa o centro da pauta pode acabar escondendo
              tudo aquilo que permanece ao seu redor.
            </p>

            <p>
              Por isso, é importante perguntar:
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              O que não está sendo mostrado?
            </p>

            <p>
              Quais assuntos raramente chegam às manchetes?
            </p>

            <p>
              Quais temas quase nunca permanecem por muito tempo no debate
              público?
            </p>

            <p>
              Quais perguntas quase nunca são feitas?
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900">
              Isso importa porque a forma como percebemos a realidade influencia
              as decisões que tomamos.
            </p>

            <p>
              Aquilo que recebe atenção tende a parecer mais importante.
            </p>

            <p>
              Aquilo que permanece fora da pauta tende a parecer menos relevante.
            </p>

            <p>
              Mas nem sempre essa percepção corresponde à realidade.
            </p>

            <p>
              Sem perceber, podemos ser conduzidos a apoiar prioridades,
              caminhos e decisões que talvez não escolheríamos se tivéssemos
              acesso a uma visão mais ampla do que está acontecendo.
            </p>

            <p>
              Observar não garante respostas corretas.
            </p>

            <p>
              Mas reduz a chance de seguirmos caminhos que nunca escolhemos
              conscientemente.
            </p>

            <p className="text-2xl leading-relaxed font-medium text-zinc-900 text-center py-4">
              Porque aquilo que está fora da pauta não deixa de existir.
            </p>

            <p className="text-center">
              Apenas deixa de receber atenção.
            </p>

            <p className="text-3xl md:text-4xl font-semibold text-zinc-900 text-center py-8">
              Nem sempre os assuntos mais importantes são os assuntos que
              recebem mais atenção.
            </p>

            <div className="pt-10 text-center">
              <a
                href="https://montink.com/terceiro-nivel/noticia-8suwl"
                target="_blank"
                className="inline-block bg-zinc-900 text-white rounded-2xl py-4 px-8 text-base font-medium hover:bg-zinc-800 transition-all duration-300"
              >
                Adquirir camiseta
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