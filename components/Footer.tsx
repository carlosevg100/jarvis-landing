export default function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-black text-lg">
          Jarvis<span className="text-[#25D366]">.</span>
        </span>
        <div className="flex gap-6 text-[#444] text-sm">
          <a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a>
          <a href="#preco" className="hover:text-white transition-colors">Preço</a>
          <a href="mailto:oi@jarvis.app" className="hover:text-white transition-colors">Contato</a>
        </div>
        <p className="text-[#333] text-xs">© 2026 Jarvis · OLPI Technologies</p>
      </div>
    </footer>
  )
}
