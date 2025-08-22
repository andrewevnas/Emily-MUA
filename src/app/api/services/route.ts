import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const services = await prisma.service.findMany({ where: { active: true }, orderBy: { name: 'asc' } })
  return NextResponse.json({ services })
}
