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

async function main() {
  await seedAdmin()
  await seedCommittees()
}

main()
  .catch((err) => {
    console.error("Seed failed:", err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
