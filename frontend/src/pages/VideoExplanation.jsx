import React from 'react';

const VideoExplanation = () => {
  return (
    <div className="min-h-screen bg-slate-900" id='demo'>
      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 select-none" id="explanation-video">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">🎬 How CrackIt Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch our detailed walkthrough to see how CrackIt.
          </p>
        </div>
        
        {/* Video Player */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-blue-500/20 shadow-lg mb-16">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            {/* Actual video player implementation */}
            <div className="w-full rounded-lg overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/api/placeholder/1280/720"
              >
                <source src="/ExplanationVideo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
       
        {/* Call to action */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-6 rounded-lg border border-purple-500/20 shadow-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Experience CrackIt?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning process with our innovative platform.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all">
            Try CrackIt Free
          </button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 py-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            {/* Left Section */}
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="mr-2 text-xl">⚡</div>
              <span className="font-bold text-white mr-2">CrackIt</span>
              <span>© 2025 • All Rights Reserved</span>
            </div>
           
            {/* Right Section */}
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
              <div className="flex space-x-4 ml-6">
                {/* Social Icons */}
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <span className="text-lg">📱</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <span className="text-lg">🐦</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoExplanation;