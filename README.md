# Boutique Shop - Full Stack Application

A modern fashion boutique website with contact form and SMS notifications powered by Twilio.

## 📁 Project Structure

```
boutique-shop/
├── frontend/          # UI/Frontend files
│   ├── index.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   ├── images/
│   └── package.json
│
├── backend/           # Backend/API Server
│   ├── server.js
│   ├── .env
│   ├── package.json
│   ├── node_modules/
│   ├── bun.lock
│   └── package-lock.json
│
├── package.json       # Root package.json
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd backend
bun install
```

### 2. Configure Environment Variables
Create/update `backend/.env` with your Twilio credentials:
```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX
```

### 3. Start the Server
```bash
# From backend folder
bun run server.js

# Or from root folder
npm start
```

### 4. Open in Browser
```
http://localhost:3000
```

## 📂 Frontend (`/frontend`)
Static HTML/CSS/JavaScript website files
- `index.html` - Homepage with hero section
- `products.html` - Collections/Products page
- `about.html` - About the boutique
- `contact.html` - Contact form
- `images/` - Product and branding images

## 🔧 Backend (`/backend`)
Node.js + Express server with Twilio integration
- `server.js` - Main server file
- Serves frontend static files from `../frontend`
- REST API endpoint: `POST /send-message` for contact form
- Sends SMS via Twilio when contact form is submitted

## 📊 Key Features

✅ Beautiful responsive website
✅ Contact form with SMS notifications (Twilio)
✅ Product showcase
✅ About page
✅ Mobile-friendly design
✅ Modern UI with smooth animations

## 🔌 API Endpoints

### POST `/send-message`
Submit contact form with customer details and receive SMS

**Request Body:**
```json
{
  "name": "Customer Name",
  "mobile": "8870178081",
  "Collections": "Blouse",
  "message": "I need information about..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

## 🛠 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js
- **Notifications:** Twilio SMS API
- **Runtime:** Bun or Node.js

## 📝 Environment Variables

Create `backend/.env`:
```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX
port=3000
```

## 🚢 Deployment

### Frontend
- Can be deployed to any static hosting (Netlify, Vercel, GitHub Pages)
- No build process needed

### Backend
- Deploy to Heroku, Railway, Render, or any Node.js hosting
- Requires Twilio account and credentials
- Update `backend/.env` with production credentials

## 📖 Git Repository

```bash
git remote -v
# origin	https://github.com/Sanjaysj0302/boutique-shop.git
```

## 👤 Author

Sanjay - @nila.instyle (Instagram)

## 📞 Support

For issues or questions:
1. Check the `.env` file is properly configured
2. Ensure Twilio account has SMS credits
3. Verify phone numbers are in correct format

---

**Last Updated:** March 2026
