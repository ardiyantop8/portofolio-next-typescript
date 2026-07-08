import Image from "next/image";
import profilImg from "@/components/assets/img/profil1.jpeg";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="w-48 h-48 mx-auto relative rounded-full overflow-hidden">
            <Image
              src={profilImg}
              alt="Foto profil Ardiyantoputra"
              fill
              sizes="192px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Saya adalah seorang developer yang passionate dalam membangun aplikasi web modern
              dengan teknologi terkini. Saya fokus pada clean code, performa, dan user experience
              yang baik.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Dengan pengalaman di berbagai tech stack, saya selalu tertarik untuk belajar
              hal baru dan mengimplementasikan best practices dalam setiap project yang saya kerjakan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
