import React, { useState } from "react";
import { stats, features, team, faqs } from "../util/mockData";

export default function About() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 text-slate-800">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-semibold">
              About FoodExpress
            </p>

            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Delivering fresh flavours —{" "}
              <span className="text-rose-500">made local</span>, delivered fast.
            </h1>

            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              FoodExpress connects you with your favourite local kitchens and
              kulfi makers across India — we focus on freshness, speed and a
              seamless experience. We support small businesses, local chefs and
              fast delivery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/"
                className="inline-flex items-center bg-rose-500 hover:bg-rose-600 text-white px-5 py-3 rounded-lg font-semibold transition"
                aria-label="Explore restaurants"
              >
                Explore restaurants
                <svg
                  className="ml-3 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center border border-rose-200 text-rose-600 px-4 py-3 rounded-lg font-medium hover:bg-rose-50 transition"
              >
                Contact support
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=60&auto=format&fit=crop"
                alt="Assorted kulfi and desserts"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md border border-rose-100">
              <div className="text-sm text-gray-600">Top pick today</div>
              <div className="mt-1 font-semibold text-gray-800">
                Roasted Lamb Only at 299
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-rose-500 bg-rose-50 p-3 rounded-lg">
                {f.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-rose-500">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Meet the team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-28 h-28 rounded-full object-cover"
              />
              <div className="mt-3 font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-4">Frequently asked questions</h2>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left p-4 flex justify-between items-center"
                  aria-expanded={open}
                >
                  <span className="font-medium">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-rose-500 transform transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 8l4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  className={`px-4 pb-1 text-gray-600 transition-all ${
                    open ? "max-h-40" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-rose-500 text-white rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Hungry yet?</h3>
            <p className="mt-1 text-sm opacity-90">
              Order now from the best local kitchens in your city.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/restaurants"
              className="bg-white text-rose-500 px-5 py-3 rounded-lg font-semibold hover:opacity-95"
            >
              Order Now
            </a>
            <a
              href="/contact"
              className="border border-white px-5 py-3 rounded-lg font-medium text-white hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
