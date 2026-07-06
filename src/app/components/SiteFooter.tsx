export default function SiteFooter() {
  return (
    <>
      {/* Secondary, low-friction contact — primary contact flow is ContactBookingSection higher up */}
      <section className="py-32 text-center">
        <h2 className="text-5xl md:text-[10vw] font-black uppercase tracking-tighter mb-10">
          Let&apos;s Build
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          <a
            href="mailto:ehsanmarwat.dev@gmail.com"
            className="text-lg border-b border-white/20 hover:border-blue-500 pb-2"
          >
            ehsanmarwat.dev@gmail.com
          </a>

          <a
            href="https://wa.me/923185164128"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg border-b border-white/20 hover:border-blue-500 pb-2"
          >
            WhatsApp Chat
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-xs uppercase tracking-[0.5em]">
        © 2026 Ehsan Ud Din · AI Automation Engineer
      </footer>
    </>
  );
}
