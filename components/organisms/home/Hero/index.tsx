import { Button, TechBadge } from "@/components/atoms";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandWhatsapp,
} from "react-icons/tb";

const MOCK_CONTACTS = [
  {
    url: "asdasd",
    icon: <TbBrandGithub />,
  },
  {
    url: "asdasd",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "asdasd",
    icon: <TbBrandWhatsapp />,
  },
];

export default function HeroSection() {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[735px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-medium">Jhonathan Pinheiro</h2>
          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Olá, meu nome é Jhonathan e sou um desenvolvedor front-end
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="next-js" />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="transition-colors hover:text-gray-100"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil"
          className="m-auto mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  );
}