"use client";

export const metadata = {
  title: "Participar",
  description:
    "Sugira temas, acompanhe o projeto e participe da construção de uma reflexão pública mais ampla.",
};






"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function ParticiparPage() {
  const router = useRouter();
  const [enviandoTema, setEnviandoTema] = useState(false);
  const [enviandoAcompanhar, setEnviandoAcompanhar] = useState(false);

  async function enviarFormulario(
    event: FormEvent<HTMLFormElement>,
    endpoint: string,
    destino: string,
    setEnviando: (valor: boolean) => void
  ) {
    event.preventDefault();
    setEnviando(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch(endpoint, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setEnviando(false);

    if (response.ok) {
      form.reset();
      router.push(destino);
    } else {
      alert("Não foi possível enviar agora. Tente novamente em instantes.");
    }
  }

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

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              A participação também faz parte da observação.
            </h1>

            <p className="text-lg leading-relaxed text-zinc-600 max-w-xl">
              O Terceiro Nível é um projeto aberto à observação pública, à
              reflexão e à participação cidadã.
            </p>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-zinc-700 mb-16">
            <p>Nem todas as perguntas importantes chegam ao debate público.</p>

            <p>
              Você pode ajudar sugerindo temas, acompanhando novos conteúdos e
              ampliando a circulação das perguntas.
            </p>
          </div>

          <form id="temas"
            onSubmit={(event) =>
              enviarFormulario(
                event,
                "https://formspree.io/f/xpqeybnb",
                "/enviado?tipo=temas",
                setEnviandoTema
              )
            }
            className="bg-white border border-zinc-200 rounded-[28px] p-8 mb-6"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
              Sugerir tema
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Que pergunta você considera importante?
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Envie uma pergunta, observação ou tema que merece mais atenção pública.
            </p>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="nome"
                placeholder="Nome (opcional)"
                className="w-full rounded-2xl border border-zinc-200 bg-[#f5f5f3] px-4 py-3 outline-none focus:border-zinc-500"
              />

              <textarea
                name="sugestao"
                required
                rows={5}
                placeholder="Escreva sua pergunta, observação ou sugestão de tema"
                className="w-full rounded-2xl border border-zinc-200 bg-[#f5f5f3] px-4 py-3 outline-none focus:border-zinc-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={enviandoTema}
              className="inline-block bg-zinc-900 text-white rounded-2xl py-3 px-6 hover:bg-zinc-800 transition-all duration-300 disabled:opacity-60"
            >
              {enviandoTema ? "Enviando..." : "Enviar sugestão"}
            </button>
          </form>

          <form id="acompanhar"

            onSubmit={(event) =>
              enviarFormulario(
                event,
                "https://formspree.io/f/xvznwlyn",
                "/enviado?tipo=acompanhar",
                setEnviandoAcompanhar
              )
            }
            className="bg-white border border-zinc-200 rounded-[28px] p-8 mb-6"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
              Acompanhar
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Receba novos temas.
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-6">
              Cadastre seu e-mail para acompanhar novas publicações, perguntas e
              conteúdos do projeto.
            </p>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                name="nome"
                placeholder="Nome (opcional)"
                className="w-full rounded-2xl border border-zinc-200 bg-[#f5f5f3] px-4 py-3 outline-none focus:border-zinc-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Seu e-mail"
                className="w-full rounded-2xl border border-zinc-200 bg-[#f5f5f3] px-4 py-3 outline-none focus:border-zinc-500"
              />
            </div>

            <button
              type="submit"
              disabled={enviandoAcompanhar}
              className="inline-block bg-zinc-900 text-white rounded-2xl py-3 px-6 hover:bg-zinc-800 transition-all duration-300 disabled:opacity-60"
            >
              {enviandoAcompanhar ? "Enviando..." : "Quero acompanhar"}
            </button>
          </form>

                    <div id="compartilhar" className="bg-zinc-900 text-white rounded-[28px] p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-4">
              Compartilhar
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Ajude a ampliar a conversa.
            </h2>

            <p className="text-zinc-300 leading-relaxed mb-6">
              Compartilhe o projeto com outras pessoas e ajude essas perguntas
              a circularem.
            </p>

            <a
  href="https://wa.me/?text=Conhe%C3%A7a%20perguntas%20que%20raramente%20aparecem%20no%20debate%20p%C3%BAblico.%0A%0ATerceiro%20N%C3%ADvel%20%E2%80%94%20Fora%20da%20Pauta%3A%0A%0Ahttps%3A%2F%2Fterceironivel.org%2Ffora-da-pauta"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-zinc-900 rounded-2xl py-3 px-6 hover:bg-zinc-100 transition-all duration-300"
>
  Compartilhar no WhatsApp
</a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm uppercase tracking-[0.2em]">
  

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
      </section>
    </main>
  );
}