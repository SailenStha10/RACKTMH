import { Section } from "@/components/layout/Section"

function ComingSoon({ title }: { title: string }) {
  return (
    <Section
      align="center"
      eyebrow="Coming soon"
      title={title}
      subtitle="This page is under construction. Check back soon."
      className="py-24 sm:py-32"
    />
  )
}

export { ComingSoon }
