import { hash } from "bcryptjs"

import { prisma } from "@/lib/prisma"
import { getCurrentRotaryYear } from "@/lib/rotary-year"

const STANDARD_COMMITTEES = [
  "Club Service",
  "Community Service",
  "Professional Development",
  "International Service",
  "Public Image",
  "Membership",
]

async function seedAdmin() {
  const email = process.env.SEED_ADMIN_EMAIL
  const password = process.env.SEED_ADMIN_PASSWORD

  if (!email || !password) {
    throw new Error(
      "SEED_ADMIN_EMAIL and SEED_ADMIN_PASSWORD must be set in .env before seeding."
    )
  }

  const passwordHash = await hash(password, 12)

  const admin = await prisma.user.upsert({
    where: { email },
    update: { passwordHash, isActive: true },
    create: { email, passwordHash, isActive: true },
  })

  console.log(`Admin user ready: ${admin.email}`)
}

async function seedCommittees() {
  const rotaryYear = getCurrentRotaryYear()

  for (const [index, name] of STANDARD_COMMITTEES.entries()) {
    const slug = `${name.toLowerCase().replace(/\s+/g, "-")}-${rotaryYear}`

    await prisma.committee.upsert({
      where: { name_rotaryYear: { name, rotaryYear } },
      update: { displayOrder: index },
      create: {
        slug,
        name,
        rotaryYear,
        displayOrder: index,
      },
    })
  }

  console.log(
    `Committees ready for rotary year ${rotaryYear}: ${STANDARD_COMMITTEES.join(", ")}`
  )
}

const PROJECT_JYOTI_PARTNERS = [
  "Rotary Club of Kathmandu Height",
  "Rotary Club of Nanaimo Daybreak (Canada)",
  "ADSon",
  "Rotary Club of Patan",
  "Rotaract Club of Kathmandu Height",
  "Rotaract Club of Kathmandu Midtown",
  "Rose International Fund for Children",
]

async function seedProjectJyoti() {
  const partners = []
  for (const name of PROJECT_JYOTI_PARTNERS) {
    const partner = await prisma.partner.upsert({
      where: { name },
      update: {},
      create: { name },
    })
    partners.push(partner)
  }

  const project = await prisma.project.upsert({
    where: { slug: "project-jyoti" },
    update: {},
    create: {
      slug: "project-jyoti",
      title: "Project Jyoti",
      summary:
        "A school-level vision screening programme in Kavrepalanchok district to protect children's eye health, identify vision problems early and improve access to treatment and learning support. Delivered with international partners from Canada.",
      description:
        "A school-level vision screening programme in Kavrepalanchok district to protect children's eye health, identify vision problems early and improve access to treatment and learning support. Delivered with international partners from Canada.",
      objectives: [],
      avenue: "COMMUNITY_SERVICE",
      // Verified as "July 2026"; exact day not confirmed, so the 1st is used
      // as a placeholder to satisfy the required DateTime field.
      startDate: new Date("2026-07-01"),
      location: "Kavrepalanchok district, Nepal",
      status: "COMPLETED",
      isFeatured: true,
      coverUrl: "/placeholders/project-cover.svg",
    },
  })

  for (const partner of partners) {
    await prisma.projectPartner.upsert({
      where: {
        projectId_partnerId: { projectId: project.id, partnerId: partner.id },
      },
      update: {},
      create: { projectId: project.id, partnerId: partner.id },
    })
  }

  console.log(
    `Project ready: ${project.title} (${partners.length} partners linked)`
  )
}

async function main() {
  await seedAdmin()
  await seedCommittees()
  await seedProjectJyoti()
}

main()
  .catch((err) => {
    console.error("Seed failed:", err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
