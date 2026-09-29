import { Section } from "@/components/layout/Section";

function ComingSoon({ title }: { title: string }) {
  return (
    <Section eyebrow="Coming soon" title={title} className="pt-40 sm:pt-48" />
  );
}

export { ComingSoon };
