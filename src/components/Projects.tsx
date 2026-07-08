interface Project {
  title: string;
  description: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "Deskripsi singkat project pertama. Jelaskan apa yang dibuat dan problemnya.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project 2",
    description: "Deskripsi singkat project kedua. Jelaskan fitur utama dan teknologinya.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project 3",
    description: "Deskripsi singkat project ketiga. Jelaskan hasil dan dampak yang dicapai.",
    techStack: ["TypeScript", "Express", "MongoDB"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Preview</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} className="text-sm text-blue-600 hover:underline">
                      Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="text-sm text-gray-600 dark:text-gray-400 hover:underline">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
