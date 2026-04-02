export default function TermsPage() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-transparent font-sans selection:bg-[#B38B59] selection:text-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        
        <div className="mb-16">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#B38B59] text-[#B38B59] text-xs font-medium tracking-widest uppercase bg-[#B38B59]/10 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Terms of <span className="text-[#B38B59]">Service</span>
          </h1>
          <p className="text-slate-400 font-medium text-sm">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10">
          
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              By accessing and using the BISI Engineering website (brightindiasteel.com), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must discontinue use of the website immediately. These terms apply to all visitors, users, and others who access the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">2. Use of Website</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-4">
              This website is intended to provide information about Bright India Steel Industries (&quot;BISI Engineering&quot;), our products, manufacturing capabilities, and services. You agree to use this website only for lawful purposes and in a manner that does not:
            </p>
            <ul className="space-y-3 text-slate-300 font-medium pl-4">
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Infringe upon the rights of any third party</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Restrict or inhibit anyone else from using the website</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Attempt to gain unauthorized access to any portion of the website or its systems</li>
              <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#B38B59] mt-2 flex-shrink-0" /> Transmit any harmful, threatening, or unlawful material</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">3. Intellectual Property</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              All content on this website — including but not limited to the BISI Engineering brand name, logos, product descriptions, technical specifications, images, and website design — is the intellectual property of Bright India Steel Industries and is protected under applicable Indian intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent from BISI Engineering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">4. Product Information Disclaimer</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              While we strive to ensure accuracy in all product specifications, grades, and technical data presented on this website, BISI Engineering reserves the right to modify product offerings without prior notice. All orders are subject to our standard terms of sale. Dimensional tolerances, grades, and availability should be confirmed with our sales desk before placing procurement orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">5. Limitation of Liability</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              BISI Engineering shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use this website, or from any information, products, or services obtained through this website. This limitation applies to the fullest extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">6. Governing Law & Jurisdiction</h2>
            <p className="text-slate-300 font-medium leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 border-b border-white/10 pb-4">7. Contact Information</h2>
            <p className="text-slate-300 font-medium leading-relaxed mb-6">
              For any questions regarding these Terms of Service, please contact:
            </p>
            <div className="bg-white/5 backdrop-blur-md border border-[#B38B59]/40 rounded-xl p-8 shadow-2xl">
              <p className="text-white font-semibold text-lg mb-1">Bright India Steel Industries (BISI Engineering)</p>
              <p className="text-slate-400 font-medium text-sm leading-relaxed mt-4">
                # 280, 4th main, IV Phase, Peenya industrial area, Bengaluru - 560058<br />
                Managing Partner: Pradeep Bansal<br />
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
