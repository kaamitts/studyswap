# StudySwap 🔄

> **Learn by teaching others** — a free skill exchange platform for students

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![Status](https://img.shields.io/badge/status-active-brightgreen)

---

## 📌 About the Project

**StudySwap** is an open-source web platform where students teach each other for free. Instead of paying for expensive tutors, students exchange knowledge — you teach what you know, you learn what you need.

**Example:** Alibek knows Mathematics but wants to learn English. Aigerim knows English but wants to learn Mathematics. StudySwap matches them together automatically.

---

## ❗ Problem

- Private tutors are too expensive for most students
- Quality education is not equally accessible to everyone
- Students already have valuable knowledge to share, but no platform to do so

---

## ✅ Solution

StudySwap connects students based on mutual skill compatibility. The matching algorithm finds pairs where each student can both teach and learn — completely free of charge.

---

## 🌍 SDG Alignment

This project contributes to the United Nations Sustainable Development Goals:

| SDG | Goal | How StudySwap contributes |
|-----|------|--------------------------|
| **SDG 4** | Quality Education | Free, accessible peer-to-peer learning for all students |
| **SDG 10** | Reduced Inequalities | Removes financial barriers to education |
| **SDG 17** | Partnerships for the Goals | Builds community-driven knowledge sharing |

---

## 🏅 DPG (Digital Public Good) Alignment

StudySwap follows Digital Public Goods principles:

- ✅ **Open source** — MIT License
- ✅ **No cost** — free for all users
- ✅ **Relevant to SDGs** — SDG 4, 10, 17
- ✅ **Does no harm** — safe, student-focused platform
- ✅ **Open standards** — built with open technologies

---

## ✨ Features

- 📝 **Registration** with skill selection (what you teach / what you want to learn)
- ⚡ **Smart Matching** — algorithm finds the best-fit partner
- 💬 **Telegram integration** — contact your partner directly
- 🏆 **XP & Level system** — gamified learning progress
- ⭐ **Reviews** — rate your sessions
- 🔔 **Notifications** — stay updated on matches
- 📋 **Match History** — track all your past sessions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 16, React, TypeScript |
| Styling | CSS Modules, Tailwind CSS |
| Backend | Next.js API Routes |
| Database | PostgreSQL (via schema.sql) |
| CI/CD | GitLab CI / GitHub Actions |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/studyswap.git

# 2. Navigate to the project folder
cd studyswap

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
studyswap/
├── app/
│   ├── api/              # Backend API routes
│   │   ├── auth/         # Login & Register
│   │   ├── match/        # Matchmaking logic
│   │   ├── profile/      # User profile
│   │   ├── reviews/      # Session reviews
│   │   └── notifications/
│   ├── home/             # Dashboard page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── lib/                  # Shared types & utilities
├── public/               # Static assets
├── schema.sql            # Database schema
├── LICENSE               # MIT License
├── CONTRIBUTING.md       # Contribution guide
└── README.md
```

---

## 👥 How to Use

1. **Sign up** — enter your name, email, and password
2. **Select skills** — choose what you can teach and what you want to learn
3. **Set your format** — online, offline, or flexible
4. **Add Telegram** — so your partner can contact you
5. **Press Match** — the algorithm finds your perfect study partner
6. **Start learning** — reach out via Telegram and schedule your first session

---

## 🤝 Contributing

We welcome contributions from everyone! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

### Quick steps:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "Add: your feature description"

# 4. Push to your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

MIT License means:
- ✅ Free to use, copy, modify, and distribute
- ✅ Can be used in commercial projects
- ✅ Must include the original license notice

---

## 🤖 AI Usage Disclosure

This project was developed with assistance from AI tools:

| Tool | Usage |
|------|-------|
| **Claude (Anthropic)** | Code generation, translation (Kazakh → English), README writing |
| **GitHub Copilot** | Code autocompletion during development |

All AI-generated code was reviewed and modified by the team.

---

## 👨‍💻 Team

| Name | Student ID | Role | Contribution |
|------|-----------|------|-------------|
| **Atamuratov Kanatbek** | 23B030333 | Lead Frontend Developer | app/home/, app/login/, app/register/ pages |
| **Azhibek Darkhan** | 24B031601 | Backend & Core Developer | app/layout.tsx, app/page.tsx, API routes |
| **Bauyrzhanuly Kuanyshbek** | 24B031691 | Documentation | README.md, project documentation |
| **Bagauova Danara** | 23B031233 | Open Source Practices | CONTRIBUTING.md, LICENSE, Code of Conduct |
| **Rakhmetov Aldiyar** | 24B031085 | Report & Research | Project report, SDG research, screenshots |

---

## 📊 SWOT Analysis

| | Positive | Negative |
|--|---------|---------|
| **Internal** | **Strengths:** Free, open-source, community-driven, simple UX | **Weaknesses:** No mobile app, limited to students, requires Telegram |
| **External** | **Opportunities:** Growing demand for affordable education, SDG alignment | **Threats:** Established platforms (Preply, iTalki), user retention challenges |

---

## 🏁 Roadmap

- [x] Landing page
- [x] Registration & Login
- [x] Skill-based matchmaking
- [x] User profiles & Telegram integration
- [x] Reviews & notifications
- [ ] Mobile application
- [ ] In-app messaging
- [ ] Video call integration
- [ ] Multi-language support

---

<p align="center">Made with ❤️ by the StudySwap team · 2026</p>