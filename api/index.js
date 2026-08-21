module.exports = (req, res) => {
  // Tangkap nama dari query/path
  let rawNama = req.query.nama || "Member Baru";
  
  // Ubah tanda hubung (-) menjadi spasi & Kapital di awal kata (contoh: kaisar-tempe -> Kaisar Tempe)
  let nama = rawNama.replace(/-/g, ' ');
  nama = nama.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Tautan gambar langsung (Direct Link) yang cepat dibaca bot WA
  const ogImage = "https://files.catbox.moe/8u72g7.jpg"; 

  const ogTitle = `Selamat Datang, ${nama}! ✨`;
  const ogDesc = `Halo ${nama}, ada pesan sambutan khusus dari Nexus Fams untukmu. Klik link ini untuk membuka!`;
  
  const host = req.headers.host || 'vercel.app';
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const fullUrl = `${protocol}://${host}/${rawNama}`;

  const html = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>${ogTitle}</title>
  <meta name="title" content="${ogTitle}">
  <meta name="description" content="${ogDesc}">

  <!-- Open Graph / WhatsApp Meta Tags -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${fullUrl}">
  <meta property="og:title" content="${ogTitle}">
  <meta property="og:description" content="${ogDesc}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="600">
  <meta property="og:image:height" content="600">
  <meta property="og:site_name" content="Nexus Fams">

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; }
    body {
      background: #0b0f19;
      color: #f1f5f9;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
    .card {
      background: rgba(17, 24, 39, 0.85);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 24px;
      max-width: 360px;
      width: 100%;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .card img {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 14px;
      margin-bottom: 18px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.4);
      color: #fbbf24;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 20px;
      margin-bottom: 12px;
      letter-spacing: 1px;
    }
    h1 { font-size: 1.5rem; font-weight: 700; margin-bottom: 8px; }
    .name-glow { color: #38bdf8; }
    p { color: #94a3b8; font-size: 0.9rem; line-height: 1.5; margin-bottom: 20px; }
    .btn {
      display: block;
      width: 100%;
      padding: 12px;
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 10px;
      font-size: 0.95rem;
    }
  </style>
</head>
<body>

  <div class="card">
    <img src="${ogImage}" alt="Foto Sambutan">
    <span class="badge">NEXUS FAMS</span>
    <h1>Halo, <span class="name-glow">${nama}</span>! 👋</h1>
    <p>Selamat datang di komunitas kami! Senang sekali kamu bisa bergabung bersama kami.</p>
    <a href="https://chat.whatsapp.com/" class="btn">Masuk Komunitas 🚀</a>
  </div>

</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  res.status(200).send(html);
};
      
