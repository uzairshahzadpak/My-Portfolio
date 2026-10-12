
import { Code2, GraduationCap, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Readable, organized and maintainable code.",
  },
  {
    icon: Rocket,
    title: "Modern Websites",
    description: "Responsive interfaces with smooth interactions.",
  },
  {
    icon: GraduationCap,
    title: "Always Learning",
    description: "Improving my skills through practical projects.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-3xl">
          <span className="section-label">About Me</span>

          <h2 className="section-title">
            Turning ideas into{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m Uzair Shahzad, a web developer focused on building
            practical, attractive and responsive web applications. I enjoy
            working with React and Next.js, connecting applications to
            databases, and learning by building real projects.
          </p>

          <p className="mt-4 text-base leading-8 text-zinc-400">
            My goal is to keep improving my development skills and contribute
            to a professional team where I can learn, solve problems and
            create useful products.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300 transition group-hover:bg-violet-500/20">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


