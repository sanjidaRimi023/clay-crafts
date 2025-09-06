

# 🏺 ClayCraft

ClayCraft is my very first Next.js project 🎉.
It’s a basic e-commerce type website where I used NextAuth.js for authentication (App Router).
The project is deployed on Vercel and uses MongoDB Atlas as the database.
I plan to add more advanced features in the future (like cart, payment integration, product filters, etc.). 🚀

---
## Features

- 🔐 User Authentication with NextAuth.js 
- 🎨 Modern UI with TailwindCSS and lucide-react icons
- 📦 File Upload support using react-dropzone
- 🗂️ Custom dropdowns with react-select
- 🔔 User-friendly notifications with react-hot-toast
- ⚡ Alerts & confirmations with SweetAlert2


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Navbar & Footer BG | [#8B5E3C ] |
| Hero BG, Buttons  | [#E2725B] |
| Cards, Section BG | [#D4B996] |
| Text, BG highlight  | [#FAF3E0] |

---

## Tech Stack

**Framework:** Next JS, TailwindCSS

**Auth:**  Next Auth 

**Dashboard:**  MongoDB

**Deployment:**  Vercel


### 1. Clone the repository

```javascript

git clone https://github.com/sanjidarimi023/claycraft.git
cd claycraft
```
### 2. Install dependencies

```javascript

npm install 

```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`NEXTAUTH_URL`=http://localhost:3000

`NEXT_PUBLIC_MONGODB_URL`= your mongoDB url 

`NEXT_PUBLIC_DB_NAME`= your-database-name

`NEXTAUTH_SECRET`= your nextauth secret  

`NEXT_PUBLIC_CLOUD_NAME`=your-cloudinary-name

`NEXT_PUBLIC_CLOUD_PRESET`=your-cloudinary-preset

## Run the development server

```bash
 npm run dev
```
#### ➡️ Then open http://localhost:3000
 in your browser.

## 🌍 Deployment
This project is deployed on Vercel.
Just connect your GitHub repository to Vercel, set environment variables, and it will auto-deploy.

### 🛒 Future Improvements

- 🛍️ Shopping cart system

- 💳 Payment gateway integration (Stripe, SSLCommerz, etc.)

- 📦 Order management

- ⭐ Product reviews & ratings

## Author

Developer: Sanjida Rimi

