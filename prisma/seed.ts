import { PrismaClient, Role, Status } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({ where: { username: 'admin' }, update: {}, create: { username: 'admin', password_hash: 'demo-password', role: Role.admin } })
  await prisma.user.upsert({ where: { username: 'operator' }, update: {}, create: { username: 'operator', password_hash: 'demo-password', role: Role.operator } })
  for (let index = 0; index < 8; index++) {
    await prisma.zona.upsert({ where: { nama_zona: `Zona ${index + 1}` }, update: {}, create: { nama_zona: `Zona ${index + 1}`, kapasitas_max: 6000, kapasitas_terisi: [2580, 4020, 5040, 1740, 5460, 0, 0, 0][index] } })
  }
  await prisma.barang.upsert({
    where: { sku_number: 'BSM-EL-24017' },
    update: {},
    create: { tanggal: new Date(), pengirim: 'PT Nusantara Jaya', no_hp_pengirim: '081245678901', penerima: 'Toko Maju Bersama', no_hp_penerima: '081399214400', tipe_barang: 'Elektronik', nama_barang: 'Kipas Angin Industrial', jumlah: 24, zona: 'Zona 1', berat: 860, jenis_kendaraan: 'Box', sku_number: 'BSM-EL-24017', tujuan: 'Jakarta Selatan', status: Status.prepared },
  })
}

main().finally(() => prisma.$disconnect())
