# Fira — The Little Universe (V3)

Hadiah ulang tahun interaktif: React + TypeScript + Vite + Framer Motion + Tailwind CSS.

## Jalankan di lokal
```bash
npm install
npm run dev
```

## Masukkan aset (taruh di folder `public/` sebelum git push)

Semua folder sudah disiapkan. Kalau gambar belum ada, web otomatis pakai ilustrasi SVG bawaan (tidak error).

**Ilustrasi AI** (`public/assets/...`) — rename sesuai `src/data/assetManifest.ts`:
- `island/island-atlas.jpg`
- `memory/jogja-tugu.jpg`, `jogja-malioboro.jpg`, `jogja-kmzero.jpg`, `jogja-gate.jpg`, `jogja-indomaret.jpg`, `jogja-gramedia.jpg`
- `museum/scene-museum-room.jpg`, `exhibit-mascot.jpg`, `exhibit-mlbb.jpg`, `exhibit-emerald-scroll.jpg`
- `observatory/scene-observatory.jpg`
- `birthday/scene-birthday-gazebo.jpg`
- `post-office/scene-post-office.jpg`
- `secret-garden/scene-secret-garden.jpg`

**Foto asli** (`public/photos/`): taruh file, lalu tambahkan ke array `photos` di `src/data/fira.config.ts`:
```ts
photos: [{ url: '/photos/tugu-kita.jpg', caption: 'Hasil photobooth kita di dekat Tugu' }]
```

**Lagu** (`public/audio/soundtrack.mp3`): kalau belum ada, otomatis jalan kotak musik synth.

## Cek sebelum deploy
Di `src/data/fira.config.ts` bagian `FIRA_META`: `academicLabel`, `mlbbHeroesLabel`, dan pastikan soundtrack boleh kamu pakai.

## Deploy ke Vercel
1. Upload folder ini ke repo GitHub.
2. vercel.com → Add New Project → pilih repo.
3. Preset Vite terdeteksi otomatis (`npm run build`, output `dist`) → Deploy.
