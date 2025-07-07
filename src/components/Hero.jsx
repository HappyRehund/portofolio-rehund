import { Download, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <main
      id="beranda"
      className="hero min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20"
    >
      <div className="hero-content text-center mt-4 md:m-0 lg:-mt-6">
        {/* Container */}
        <div className="max-w-4xl">
          {/* Image */}
          <div className="avatar mb-8">
            <div className="w-64 lg:w-80 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="Foto-diri-rayhan.jpg" alt="foto saya" />
            </div>
          </div>
          {/* Text Section */}
          <h1 className="text-3xl lg:text-5xl font-bold mb-2">
            Halo, Saya Rehund
          </h1>
          <p className="text-xl mb-2 font-semibold">Seorang Web Developer</p>
          <p className="py-4 text-base-content/70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            aut vero minus exercitationem non, rerum, commodi nostrum corporis
            atque odio, quasi at culpa. Dolorem neque tenetur quam accusantium
            fuga error? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime vero ipsum nihil provident, sunt rerum ea voluptatum
            voluptatem molestiae architecto ad facilis excepturi recusandae quae
            totam laboriosam alias assumenda exercitationem. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit.
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <a href="#kontak" className="btn btn-primary">
              <Mail className="h-4 w-4" />
              Hubungi Saya
            </a>
            <button className="btn btn-outline">
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </div>
          <div className="flex gap-6 justify-center">
            <a href="#" className="btn btn-circle btn-outline">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="btn btn-circle btn-outline">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
