import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    // wrapper footer
    <footer className="bg-base-300 text-base-content">
        {/* container */}
      <div className="container mx-auto px-4 py-12">
        {/* isi container (isi content) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* col 1 & 2*/}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Rehund Ardian</h3>
            <p className="text-base-content/70 mb-4">
              Web developer
            </p>
            <div className="flex gap-4">
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-circle btn-outline btn-sm">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* col 3 */}
          <nav>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><a href="#beranda" className="link link-hover">Beranda</a></li>
              <li><a href="#tentang" className="link link-hover">Tentang</a></li>
              <li><a href="#projects" className="link link-hover">Pengalaman</a></li>
              <li><a href="#tech" className="link link-hover">Teknologi</a></li>
            </ul>
          </nav>
          
          {/* col 4 */}
          <nav>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="link link-hover">Pengembangan Web</a></li>
              <li><a href="#" className="link link-hover">Backend</a></li>
              <li><a href="#" className="link link-hover">Frontend</a></li>
              <li><a href="#" className="link link-hover">Mobapps (Jika ada waktu)</a></li>
            </ul>
          </nav>
        </div>
        
        {/* col 4 */}
        <div className="divider"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-base-content/70 text-sm mb-4 md:mb-0">
            © 2025 Rehund.exe Semua hak dilindungi.
          </p>
          <div className="flex items-center gap-2 text-base-content/70 text-sm">
            <span>Dibuat dengan</span>
            <Heart className="h-4 w-4 text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}