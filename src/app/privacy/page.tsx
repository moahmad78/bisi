export default function PrivacyPage() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-black font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        <div className="mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Privacy <span className="text-[#B38B59]">Policy</span>
          </h1>
          <p className="text-slate-400 font-medium text-sm">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">1. Information We Collect</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              Bright India Steel Industries (&quot;BISI Engineering&quot;) collects information that you voluntarily provide when using our website or contacting our corporate desk. This may include:
            </p>
            <ul className="space-y-3 text-slate-300 font-medium pl-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Company name, contact person, and designation</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Email address, phone number, and postal address</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Product enquiry details, procurement specifications, and dimensional requirements</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Website usage data collected through standard server logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">2. How We Use Your Data</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              We use the information collected solely for legitimate business purposes related to our manufacturing and supply operations:
            </p>
            <ul className="space-y-3 text-slate-300 font-medium pl-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Processing and responding to your product enquiries and quote requests</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Communicating about order status, delivery schedules, and technical specifications</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Improving our website, products, and customer service</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Complying with applicable laws and regulatory requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">3. Data Protection</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              BISI Engineering is committed to protecting your personal data. We employ industry-standard security measures to safeguard information against unauthorized access, alteration, disclosure, or destruction. We do not sell, trade, or rent your personal data to third parties. Information may be shared only with trusted service providers who assist in operating our business, subject to confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">4. Cookies & Analytics</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              Our website may use cookies and similar technologies to enhance your browsing experience and collect aggregate usage statistics. You can configure your browser to refuse cookies, although this may limit certain website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">5. Contact Us</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              For any privacy-related questions or requests, please contact our Managing Partner directly:
            </p>
            <div className="mt-6 bg-neutral-950 border border-white/10 rounded-xl p-8">
              <p className="text-white font-semibold text-lg mb-1">Pradeep Bansal</p>
              <p className="text-[#B38B59] text-xs uppercase tracking-widest font-semibold mb-4">Managing Partner</p>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                # 280, 4th main, IV Phase, Peenya industrial area, Bengaluru - 560058<br />
                Phone: 080-41144796 | Mobile: 9845047839, 9945693122<br />
                Email: brightindiasteel@gmail.com
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
