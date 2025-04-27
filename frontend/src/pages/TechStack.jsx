import React from 'react';

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 select-none" id="tech-stack">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">⚙️ Powered By Modern Technology</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          CrackIt is built with cutting-edge tools and frameworks that ensure speed, reliability, and a seamless user experience.
        </p>
      </div>

      {/* Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Frontend */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-blue-500/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 rounded-full bg-blue-900/30 flex items-center justify-center">
              <span className="text-5xl">🚀</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-blue-400 mb-4">Frontend</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4 text-3xl">⚛️</div>
              <div>
                <h3 className="text-xl font-bold text-white">React</h3>
                <p className="text-gray-300">Building dynamic, responsive UI components</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-3xl">🎨</div>
              <div>
                <h3 className="text-xl font-bold text-white">Tailwind CSS</h3>
                <p className="text-gray-300">Utility-first CSS for rapid design implementation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-green-500/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 rounded-full bg-green-900/30 flex items-center justify-center">
              <span className="text-5xl">🔧</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-green-400 mb-4">Backend</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4 text-3xl">🟢</div>
              <div>
                <h3 className="text-xl font-bold text-white">Node.js</h3>
                <p className="text-gray-300">JavaScript runtime for scalable server operations</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-4 text-3xl">🛤️</div>
              <div>
                <h3 className="text-xl font-bold text-white">Express</h3>
                <p className="text-gray-300">Fast, minimalist web framework for Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hosting & Deployment */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-purple-500/20 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <div className="h-24 w-24 rounded-full bg-purple-900/30 flex items-center justify-center">
              <span className="text-5xl">☁️</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-purple-400 mb-4">Hosting</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4 text-3xl">▲</div>
              <div>
                <h3 className="text-xl font-bold text-white">Vercel</h3>
                <p className="text-gray-300">Global edge network for lightning-fast deployment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Benefits */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-lg border border-cyan-500/20 shadow-lg">
        <h2 className="text-3xl font-bold text-center text-white mb-8">✨ Why This Tech Stack?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start p-4">
            <span className="text-green-400 text-xl mr-3">✅</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast Performance</h3>
              <p className="text-gray-300">
                React's virtual DOM and Vercel's edge network ensure your experience is smooth and responsive.
              </p>
            </div>
          </div>
          
          <div className="flex items-start p-4">
            <span className="text-green-400 text-xl mr-3">✅</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Architecture</h3>
              <p className="text-gray-300">
                Node.js and Express provide a robust backend that can handle growth as our user base expands.
              </p>
            </div>
          </div>
          
          <div className="flex items-start p-4">
            <span className="text-green-400 text-xl mr-3">✅</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Modern UI Components</h3>
              <p className="text-gray-300">
                Tailwind CSS enables us to create beautiful, responsive interfaces that work across all devices.
              </p>
            </div>
          </div>
          
          <div className="flex items-start p-4">
            <span className="text-green-400 text-xl mr-3">✅</span>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Continuous Deployment</h3>
              <p className="text-gray-300">
                Vercel's automated deployment pipeline means new features reach you faster with zero downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;