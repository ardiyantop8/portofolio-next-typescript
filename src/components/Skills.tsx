interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

const skills: Skill[] = [
  { name: "TypeScript", level: 90, category: "Language" },
  { name: "JavaScript", level: 95, category: "Language" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "Git", level: 85, category: "Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${skill.level}%` }}
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} skill level`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
