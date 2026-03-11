export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] py-10 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white text-lg font-medium">Jarvis</span>
        <p className="text-[rgba(255,255,255,0.3)] text-xs">
          &copy; 2026 Jarvis
        </p>
      </div>
    </footer>
  )
}
