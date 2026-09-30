import Image from "next/image";

import { getCurrentRecognition } from "@/lib/queries/recognition";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


async function RotaractorOfTheMonth() {
  const recognition = await getCurrentRecognition();
  if (!recognition) return null;

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="flex flex-col items-center gap-10">
        <Reveal y={8}>
          <span className="text-label text-foreground">
            [ROTARACTOR OF THE MONTH]
          </span>
        </Reveal>
        <Reveal className="flex max-w-3xl gap-4">
          <span
            aria-hidden="true"
            className="text-foreground text-6xl leading-none font-extrabold italic"
          >
            &rdquo;
          </span>
          <blockquote className="text-quote text-foreground">
            {recognition.achievement}
          </blockquote>
        </Reveal>
        <Reveal delay={0.15} className="flex items-center gap-3">
          <div className="relative size-9 overflow-hidden rounded-full">
            <Image
              src={recognition.photoUrl}
              alt=""
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="text-xs">
            <p className="text-foreground">{recognition.fullName}</p>
            <p className="text-foreground font-medium">
              {MONTH_NAMES[recognition.month - 1]} {recognition.year}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export { RotaractorOfTheMonth };
