'use client'

const CARDS = [
  'Grupo da escola da Olivia. 47 mensagens sobre a festa junina. Data? Perdida em algum lugar la no meio.',
  'Audio de 4 minutos do seu chefe. "Vou ouvir depois." Depois nunca chegou. As tarefas, tambem nao.',
  'Print do condominio sobre a assembleia. Voce foi? Voce lembrou?',
  'Pagamento mencionado num grupo. Ninguem confirmou. Atrasou. Claro.',
]

export default function Problem() {
  return (
    <section className="py-20 px-6 bg-bg-mid">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CARDS.map((text, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] rounded-[4px] p-6"
            >
              <p className="text-[rgba(255,255,255,0.5)] text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="text-white text-xl md:text-2xl font-medium leading-snug">
            Nao e falta de atencao. E excesso de mensagem.
          </p>
          <p className="text-[#666666] mt-3 text-base">
            O WhatsApp nao foi feito pra lembrar por voce. O Jarvis foi.
          </p>
        </div>
      </div>
    </section>
  )
}
