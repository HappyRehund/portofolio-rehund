import React from "react";
import { projects } from "../helper/ProjectHelper";
import { ExternalLink, Eye, Github } from "lucide-react";

function Projects() {
  return (
    // section wrapper
    <section id="projects" className="py-20 bg-base-100">
      {/* container */}
      <div className="container mx-auto px-4">
        {/* section title wrapper */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Proyek Terbaru</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Beberapa proyek yang telah saya kerjakan, menampilkan keahlian dalam pengembangan web.
          </p>
        </div>

        {/* section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* content */}
          {projects.map((project, index) => (
            // card wrapper (tiap card)
            <div
              key={index}
              className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all"
            >
              {/* image */}
              <figure className="h-[480px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </figure>
              {/* card body wrapper (description and tech stack) */}
              <div className="card-body">
                <h3 className="card-title text-xl mb-2">{project.title}</h3>
                <p className="text-base-content/70 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <div key={techIndex} className="badge badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
                {/* card actions (button) */}
                <div className="card-actions justify-end">
                  <a
                    href={project.demoUrl}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="h-4 w-4" />
                    Lihat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/HappyRehund"
            target="blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg"
          >
            <ExternalLink className="h-5 w-5" />
            Lihat Github Saya
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
