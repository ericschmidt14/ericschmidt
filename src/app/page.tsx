import Image from "next/image";

export default function Home() {
  const logos = [
    "fcn",
    "ohm",
    "newseum",
    "adidas",
    "siemens",
    "ax",
    "ds",
    "como",
  ];

  const contact = [
    { name: "Mail", href: "mailto:info@ericschmidt.de" },
    { name: "Instagram", href: "https://instagram.com/ericschmdt" },
  ];

  return (
    <main className="flex gap-16 min-h-screen flex-col px-8 md:px-16 pt-96 pb-48">
      <p>
        I&apos;m Eric Schmidt, a Nuremberg-based software engineer operating at
        the intersection of design and development to create outstanding digital
        experiences.
      </p>
      <div className="w-full grid grid-cols-4 lg:grid-cols-8 gap-y-16 place-items-center">
        {logos.map((l) => {
          return (
            <Image
              key={l}
              src={`/logos/${l}.svg`}
              alt={`Logo ${l}`}
              width={64}
              height={64}
            />
          );
        })}
      </div>
      <p>
        On a more personal note, I&apos;m an avid marathon runner and quite the
        espresso addict.
      </p>
      <p>
        Let&apos;s get in touch! If you would like to work together or just say
        hi, please feel free to drop me a line.
      </p>
      <div className="flex gap-8">
        {contact.map((c) => {
          return (
            <a key={c.name} href={c.href}>
              {c.name}
            </a>
          );
        })}
      </div>
      <footer>
        <p>Engineered with 🖤 and ☕️ in Nuremberg.</p>
        <p>© 2024</p>
      </footer>
    </main>
  );
}
