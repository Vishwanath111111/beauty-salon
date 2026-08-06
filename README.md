# 💎 Lumière Beauty Lounge & Spa — Enterprise Portfolio Application

A production-ready, ultra-luxury Beauty Salon, Aesthetic Clinic & Spa application designed for **Lumière Beauty Lounge**. Built as an enterprise decoupled monorepo featuring a **Next.js 16 + React 19 + TypeScript + Tailwind CSS** frontend and a **Spring Boot 3 + Java 21 + PostgreSQL** backend.

---

## 🏛️ Project Architecture

```
02-Beauty-Salon/
├── frontend/                     # Next.js 16 (App Router) Single Page & Multi-Route Web App
│   ├── app/                      # 18+ App Routes (Home, About, Services, Treatments, Packages, etc.)
│   ├── components/               # UI Primitives & Beauty Features (PackageCustomizer, BookingWizard, etc.)
│   ├── data/                     # salonData.ts (Indian & International Luxury Rituals)
│   ├── lib/                      # utils.ts (INR ₹ & USD formatters), api.ts (REST client with fallback)
│   ├── styles/                   # globals.css (Design System Tokens & Glassmorphism)
│   ├── types/                    # index.ts (Full TypeScript Contracts)
│   ├── .env.example              # Environment Configuration Template
│   └── package.json              # Frontend Dependencies
│
└── backend/                      # Spring Boot 3 + Java 21 REST Microservice
    ├── pom.xml                   # Maven Build Config (Java 21, Spring Boot 3, JPA, Lombok, Validation)
    └── src/
        └── main/
            ├── java/com/vjwebstudio/lumiere/
            │   ├── LumiereApplication.java
            │   ├── config/       # WebConfig.java (CORS Handler)
            │   ├── controller/   # REST Controllers (Appointments, Contact, Newsletter)
            │   ├── dto/          # Data Transfer Objects with Bean Validation
            │   ├── entity/       # JPA Entities (PostgreSQL / H2 Schema)
            │   ├── repository/   # Spring Data JPA Repositories
            │   └── service/      # Business Logic Layer
            └── resources/
                └── application.yml
```

---

## 🚀 Quick Start Guide

### 1. Running the Frontend (Next.js 16)

```bash
# Navigate into the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live application.

### 2. Running the Backend (Spring Boot 3 + Java 21)

```bash
# Navigate into the backend directory
cd backend

# Run the Spring Boot application using Maven
mvn spring-boot:run
```

The Spring Boot REST API service will start on [http://localhost:8080/api/v1](http://localhost:8080/api/v1).  
H2 Database Console is available at [http://localhost:8080/api/v1/h2-console](http://localhost:8080/api/v1/h2-console).

---

## 🌟 Key Features

1. **Indian & Global Touch-Up**:
   - Features authentic **Royal Ayurvedic Kumkumadi Saffron Facials**, **Vedic Ubtan & Chandan Body Scrubs**, **Kerala Shirodhara & Abhyanga Massages**, alongside international 24K Gold and Microcurrent bio-lifting rituals.
   - Native support for **Indian Rupee (₹ INR)** pricing and location references (Bandra West, Mumbai / Golf Course Road, Gurugram / NYC).

2. **Private Direct Concierge**:
   - Floating WhatsApp Direct Concierge button built without displaying or printing any private phone numbers on the UI.

3. **Interactive Spa Day Customizer & Price Calculator**:
   - Live treatment add-on builder with automatic 15% bundle discount calculation.

4. **Multi-Step Appointment Booking Wizard**:
   - Step 1: Treatment Selection → Step 2: Specialist & Date/Time Slot → Step 3: Contact & Confirmation Ticket (`/booking/success`).

5. **Production SEO & Accessibility**:
   - Dynamic `sitemap.ts`, `robots.ts`, and Schema.org `BeautySalon` / `LocalBusiness` JSON-LD structured data for Google Search rich snippets.

---

## 🌐 Deployment Instructions

### Deploying Frontend to Vercel
1. Connect your GitHub repository to Vercel.
2. Set Root Directory to `frontend`.
3. Add Environment Variable:
   ```env
   NEXT_PUBLIC_API_URL=https://your-backend-api.up.railway.app/api/v1
   NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/YOUR_PRIVATE_NUMBER
   ```
4. Click **Deploy**.

### Deploying Backend to Railway / Render / AWS
1. Set Environment Variables in your hosting dashboard:
   ```env
   SPRING_DATASOURCE_URL=jdbc:postgresql://your-db-host:5432/lumieredb
   SPRING_DATASOURCE_USERNAME=postgres
   SPRING_DATASOURCE_PASSWORD=yourpassword
   ```
2. Build & Deploy using `mvn clean package`.
