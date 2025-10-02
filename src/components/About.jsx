import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { Brain } from 'lucide-react';

export default function About() {
  return (
    // wrapper section
    <section id="tentang" className="py-20 bg-base-200">
        {/* container */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Tentang Saya</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Saya adalah seorang pengembang web yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional.
          </p>
        </div>
        
        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* cols 1 */}
          <div className="space-y-6">
            {/* card wrapper */}
            <div className="card bg-base-100 shadow-xl">
                {/* card content */}
              <div className="card-body">
                {/* title card */}
                <h3 className="card-title text-2xl mb-4">Perjalanan Saya</h3>
                <p className="text-base-content/70 mb-4">
                  Dengan pengalaman kurang lebih dari 1 tahun di bidang pengembangan web, saya telah membantu 
                  berbagai teman membuat website.
                </p>
                {/* stats wrapper */}
                <div className="stats shadow">
                    {/* stat 1 */}
                  <div className="stat">
                    <div className="stat-title">Proyek Selesai (Web & Non-Web)</div>
                    <div className="stat-value text-primary">8+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* cols 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* cols 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h4 className="card-title">Pengembangan</h4>
                <p className="text-sm text-base-content/70">
                  Membangun aplikasi web yang bagus
                </p>
              </div>
            </div>
            {/* cols 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Brain className="h-12 w-12 text-error-contenty mb-4" />
                <h4 className="card-title">Logic</h4>
                <p className="text-sm text-base-content/70">
                  Membangun business process dengan logika yang baik
                </p>
              </div>
            </div>
            {/* cols 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h4 className="card-title">Optimasi</h4>
                <p className="text-sm text-base-content/70">
                  Mengoptimalkan performa untuk pengalaman terbaik
                </p>
              </div>
            </div>
            {/* cols 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <Users className="h-12 w-12 text-info mb-4" />
                <h4 className="card-title">Kolaborasi</h4>
                <p className="text-sm text-base-content/70">
                  Bekerja sama dengan tim untuk hasil terbaik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}