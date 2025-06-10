import React from 'react'

const Pricing = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mt-10 rounded-lg px-6 py-8 shadow-2xl shadow-violet-600/10 sm:p-10 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pricing Plans
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-gray-300">
                Choose the plan that works best for you and your team.
              </p>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-8 lg:flex-shrink-0">
              <div className="flex rounded-full shadow-sm">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-full border border-transparent bg-gradient-to-r from-violet-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-violet-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                  Monthly
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-r-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                >
                  Yearly
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {/* Standard Plan */}
            <div className="flex flex-col rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md transition hover:shadow-xl">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-600">
                  Standard
                </span>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                  $49
                  <span className="ml-1 text-2xl font-medium text-gray-300">/mo</span>
                </div>
                <p className="mt-5 text-lg text-gray-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit distinctio!
                </p>
                <button
                  type="button"
                  className="mt-8 block w-full rounded-md bg-gradient-to-r from-violet-600 to-indigo-600 py-3 px-5 font-medium text-white shadow hover:from-violet-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-violet-200"
                >
                  Buy Standard
                </button>
              </div>
              <div className="flex-1 rounded-b-xl p-6 sm:p-10 sm:pt-0">
                <ul className="space-y-4">
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Pariatur quod similique</p>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Veritatis expedita eligendi</p>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Accusamus quia totam</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Premium Plan - You can copy the Standard and change values */}
            <div className="flex flex-col rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-md transition hover:shadow-xl">
              <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-600">
                  Premium
                </span>
                <div className="mt-4 flex items-baseline text-5xl font-extrabold text-white">
                  $99
                  <span className="ml-1 text-2xl font-medium text-gray-300">/mo</span>
                </div>
                <p className="mt-5 text-lg text-gray-200">
                  All features in Standard plus more premium tools.
                </p>
                <button
                  type="button"
                  className="mt-8 block w-full rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 py-3 px-5 font-medium text-white shadow hover:from-yellow-600 hover:to-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Buy Premium
                </button>
              </div>
              <div className="flex-1 rounded-b-xl p-6 sm:p-10 sm:pt-0">
                <ul className="space-y-4">
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Everything in Standard</p>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Priority Support</p>
                  </li>
                  <li className="flex items-start text-white">
                    <svg className="h-6 w-6 text-green-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    <p className="ml-3 text-sm">Advanced Analytics</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Pricing