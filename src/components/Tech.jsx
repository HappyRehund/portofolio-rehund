import React from "react";
import { techCategories } from "../helper/TechHelper";

function Tech() {
  return (
    // wrapper section
    <section id="tech" className="py-20 pb-40 bg-base-200">
      {/* container */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Teknologi & Keahlian</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Teknologi dan tools yang saya gunakan untuk membangun solusi digital
            yang inovatif.
          </p>
        </div>
        {/* Section Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards here */}
          {techCategories.map((category, index) => (
            // card wrapper (tiap card)
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              {/* Card content */}
              <div className="card-body">
                {/* wrapper untuk icon dan tittle */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.color}`}>{category.icon}</div>
                  <h3 className="card-title text-xl">{category.title}</h3>
                </div>
                {/* wrapper untuk skills */}
                <div className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm">{skill.name}</span>
                      <div className="flex gap-1">
                        {Array(5).fill(0).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level ? "bg-primary" : "bg-base-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Dibawah */}
        
        {/* <div className="mt-12 items-center justify-center flex">
          
          <div className="stats shadow">
            
            <div className="stat">
              <div className="stat-title">Bahasa Pemrograman</div>
              <div className="stat-value text-purple-800">3+</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Framework</div>
              <div className="stat-value textarea-success">10+</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Tools & Platform</div>
              <div className="stat-value text-accent">10+</div>
            </div>
          </div>

        
        </div> */}
      </div>
    </section>
  );
}

export default Tech;
