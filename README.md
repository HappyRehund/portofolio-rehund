# 🌟 Portofolio Rehund - Personal Portfolio Website

Website portofolio pribadi yang menampilkan keahlian, proyek, dan pengalaman saya sebagai Web Developer. Dibuat dengan teknologi modern untuk memberikan pengalaman user yang optimal.

## ✨ Fitur

- **Responsive Design** - Tampilan yang optimal di semua perangkat
- **Modern UI/UX** - Interface yang clean dan user-friendly
- **Project Showcase** - Galeri proyek dengan detail teknologi
- **Skills Rating** - Visualisasi level keahlian teknologi
- **Contact Form** - Form kontak yang terintegrasi

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Icons**: Lucide React

## 📁 Struktur Proyek

```
portofolio-better/
├── public/
│   └── Foto-diri-rayhan.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Tech.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── helper/
│   │   ├── TechHelper.jsx
│   │   └── ProjectHelper.jsx
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 
- npm, yarn atau pnpm

### Installation

1. Clone repository
```bash
git clone https://github.com/HappyRehund/portofolio-new.git
cd portofolio-better
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Buka browser dan akses `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## 📄 Sections

### 🏠 Hero Section
- Foto profil dengan ring effect
- Deskripsi singkat dan CTA buttons
- Link ke social media

### 👨‍💻 About Section
- Informasi detail tentang background
- Pengalaman dan pendidikan

### 💻 Tech Section
- Kategorisasi skills
- Rating visual dengan dot indicators
- Statistics counter

### 🗂️ Projects Section
- Showcase proyek dengan gambar
- Detail teknologi yang digunakan
- Link ke demo dan source code

### 📞 Contact Section
- Form kontak terintegrasi
- Informasi kontak lengkap

## 🎨 Customization

### Mengubah Informasi Personal
Edit file-file berikut untuk menyesuaikan dengan informasi Anda:

- `src/components/Hero.jsx` - Nama, foto, dan deskripsi
- `src/components/About.jsx` - Informasi detail tentang Anda
- `src/helper/TechHelper.jsx` - Skills dan level keahlian
- `src/helper/ProjectHelper.jsx` - Daftar proyek

### Mengubah Tema
Website menggunakan DaisyUI themes. Ubah theme di `index.css`:

```css
@plugin "daisyui" {
  themes: valentine --default, light, dark, cupcake
  /* dan lainnya */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

Proyek ini dibuat untuk keperluan personal. Anda bebas menggunakan kode ini sebagai referensi untuk membuat portofolio Anda sendiri.

## 👨‍💻 Developer

**Rehund**
- GitHub: [Link GitHub Anda]
- LinkedIn: [Link LinkedIn Anda]
- Email: [Email Anda]

---