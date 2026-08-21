module.exports = (req, res) => {
  // Tangkap nama dari URL (misal: /Kaisar -> Kaisar)
  let nama = req.query.nama || "Member Baru";
  
  // Format huruf kapital di awal nama
  nama = nama.charAt(0).toUpperCase() + nama.slice(1);

  // Pengaturan Tampilan Preview WhatsApp
  const ogTitle = `Selamat Datang, ${nama}! ✨`;
  const ogDesc = `Halo ${nama}, ada pesan sambutan spesial untukmu. Klik link ini untuk membuka!`;
  // Ganti URL gambar di bawah dengan foto sambutan kamu sendiri (harus direct link gambar)
  const ogImage = "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80";

  const html = `
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Open Graph Meta Tags (Khusus WhatsApp / Social Preview) -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${ogTitle}">
    <meta property="og:description" content="${ogDesc}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="800">
    <meta property="og:image:height" content="600">

    <title>${ogTitle}</title>

    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif; }
      body {
        background: #090d16;
        color: #f8fafc;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background-image: 
          radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(147, 51, 234, 0.15) 0%, transparent 40%);
      }
      .card {
        background: rgba(15, 23, 42, 0.75);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 28px;
        max-width: 380px;
        width: 100%;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      }
      .img-container {
        width: 100%;
        height: 200px;
        border-radius: 16px;
        overflow: hidden;
        margin-bottom: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      .img-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .badge {
        display: inline-block;
        padding: 6px 14px;
        background: rgba(56, 189, 248, 0.1);
        border: 1px solid rgba(56, 189, 248, 0.3);
        color: #38bdf8;
        border-radius: 20px;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      h1 {
        font-size: 1.6rem;
        font-weight: 800;
        margin-bottom: 8px;
        background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p {
        color: #94a3b8;
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 24px;
      }
      .highlight {
        color: #f59e0b;
        font-weight: 700;
      }
      .btn {
        display: block;
        width: 100%;
        padding: 14px;
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: #ffffff;
        font-weight: 700;
        text-decoration: none;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
        transition: transform 0.2s;
      }
      .btn:active {
        transform: scale(0.98);
      }
    </style>
  </head>
  <body>

    <div class="card">
      <div class="img-container">
        <img src="${ogImage}" alt="Sambutan">
      </div>
      <span class="badge">Welcome Greetings</span>
      <h1>Halo, <span class="highlight">${nama}</span>! 👋</h1>
      <p>Selamat datang di NexusFams. Kami sangat senang kamu bisa bergabung di sini!</p>
      
      <a href="https://whatsapp.com/channel/0029Vb8WUbxE50UjmpWeXb2D" class="btn">Gabung Chanel Marga</a>
    </div>

  </body>
  </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
};
      
