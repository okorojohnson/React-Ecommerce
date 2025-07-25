import React from "react";

const CTA = () => {
  return (
    <section className="min-h-screen flex items-center justify-center  px-6">
      <div className="w-full max-w-[1242px] h-[403px] bg-s_cards  flex items-center justify-between px-10">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-black mb-4">
            Join our newsletter for £10 off
          </h2>
          <p className="text-black/70">
            We'll email you a voucher worth £10 off your first order over £50.
            By subscribing you agree to our Terms & Conditions and Privacy &
            Cookies Policy
          </p>
        </div>

        <div className="flex-shrink-0 flex items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full lg:w-72 px-4 py-2 rounded-full border border-gray-500 bg-white text-white placeholder:text-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
