'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const CASES = [
  {
    tag: 'Grupo de escola',
    title: 'A mãe que não pode errar',
    before: 'Você está no grupo da turma da Olivia. 200 mensagens por semana. Datas, uniformes, eventos, arrecadações. Você tenta se lembrar de tudo. Às vezes consegue. Às vezes não. O sentimento quando não consegue — você conhece.',
    after: 'Encaminhou pro Jarvis. "Festa junina, 21 de junho, trajar caipira, levar R$15." Semana que vem: lembrete automático. Três dias antes: lembrete de novo. Você aparece na festa. Olivia sorri.',
  },
  {
    tag: 'Reunião com 5 tarefas',
    title: 'O profissional com reunião atrás de reunião',
    before: 'Reunião termina. Você abriu o bloco de notas? Não. Vai anotar depois? Vai. Anotou? Não. Na sexta o gestor pergunta pelo entregável. Você pesquisa nas mensagens. Achou. Mas perdeu tempo que não tinha.',
    after: 'Mandou o áudio da reunião pro Jarvis. Em minutos: lista de tarefas, responsáveis, prazos. Cada prazo virou um lembrete no WhatsApp. Você entrega antes do prazo. Parece que tem superpoder. É só Jarvis.',
  },
  {
    tag: 'Áudio de 3 minutos',
    title: 'O áudio que "vou ouvir depois"',
    before: 'Seu parceiro mandou um áudio longo explicando um recado importante. Você estava dirigindo. Marcou pra ouvir depois. Esqueceu. Recado perdido. Discussão desnecessária.',
    after: 'Você encaminhou o áudio pro Jarvis antes de sair do carro. Jarvis transcreveu, extraiu o recado e programou o lembrete. Quando chegou em casa, o WhatsApp avisou. Você já sabia de tudo.',
  },
  {
    tag: 'PDF ou print com prazo',
    title: 'O documento com data enterrada',
    before: 'Print do boleto. Screenshot do contrato com data de renovação. PDF da proposta com validade de 10 dias. Você salva. Esquece onde salvou. O prazo passa.',
    after: 'Encaminhou pro Jarvis. Ele leu, extraiu a data, criou o lembrete automático. Dois dias antes: "Atenção — prazo amanhã." Você age a tempo. Sempre.',
  },
]

export default function UseCases() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  const [tab, setTab] = useState<'before' | 'after'>('before')

  return (
    <section className="py-24 px-6 bg-[#080808]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12 tracking-tight">
          Parece familiar?
        </h2>
        <div className="flex flex-col gap-3">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              layout
              className="bg-[#111] border border-[#1E1E1E] rounded-2xl overflow-hidden hover:border-[#333] transition-colors"
            >
              <button
                onClick={() => { setOpenIdx(openIdx === i ? null : i); setTab('before') }}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <div>
                  <span className="text-[#25D366] text-xs font-bold uppercase tracking-widest">{c.tag}</span>
                  <div className="text-white font-semibold text-base mt-0.5">{c.title}</div>
                </div>
                <motion.div animate={{ rotate: openIdx === i ? 180 : 0 }}>
                  <ChevronDown className="w-5 h-5 text-[#444]" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-0 mx-5 mb-4 bg-[#0D0D0D] rounded-xl p-1">
                      {(['before', 'after'] as const).map(t => (
                        <button
                          key={t}
                          onClick={() => setTab(t)}
                          className={`flex-1 text-sm py-2 rounded-lg transition-all font-medium ${
                            tab === t
                              ? t === 'before' ? 'bg-[#1A1A1A] text-[#888]' : 'bg-[#25D366] text-black'
                              : 'text-[#444]'
                          }`}
                        >
                          {t === 'before' ? '😓 Antes' : '✅ Depois'}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={tab}
                        initial={{ opacity: 0, x: tab === 'after' ? 10 : -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="px-5 pb-5 text-[#888] text-sm leading-relaxed"
                      >
                        {tab === 'before' ? c.before : c.after}
                      </motion.p>
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
