# Deployment Guide - Boutique Shop

This guide explains how to deploy your Boutique Shop website to production with dynamic host configuration.

## 🌍 Local Development

### Setup
```bash
cd backend
bun install
```

### Configure Environment
Create `backend/.env`:
```env
PORT=3000
HOST=localhost
NODE_ENV=development

TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX
```

### Run
```bash
bun run server.js
```

Visit: `http://localhost:3000`

---

## 🚀 Production Deployment

### Prerequisites
- Node.js 14+ or Bun runtime
- Server/Hosting provider (Heroku, Railway, Render, AWS, etc.)
- Domain name (optional but recommended)

### Environment Variables for Production

Set these on your hosting platform:

```env
# Server Configuration
PORT=3000                          # May be auto-assigned by platform
HOST=0.0.0.0                       # Listen on all interfaces
NODE_ENV=production

# Twilio
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX

# CORS
FRONTEND_URL=https://your-domain.com
```

---

## 📦 Deploy to Heroku

### Step 1: Create Heroku App
```bash
heroku create your-app-name
```

### Step 2: Set Environment Variables
```bash
heroku config:set \
  PORT=3000 \
  HOST=0.0.0.0 \
  NODE_ENV=production \
  TWILIO_ACCOUNT_SID=your_sid \
  TWILIO_AUTH_TOKEN=your_token \
  TWILIO_PHONE_NUMBER=+1234567890 \
  MY_PHONE_NUMBER=+91XXXXXXXXXX \
  FRONTEND_URL=https://your-domain.com
```

### Step 3: Deploy
```bash
git push heroku main
```

### Step 4: View Logs
```bash
heroku logs --tail
```

Your app will be live at: `https://your-app-name.herokuapp.com`

---

## 🚄 Deploy to Railway

### Step 1: Connect GitHub
1. Go to [railway.app](https://railway.app)
2. Click "Deploy from GitHub"
3. Select your repository

### Step 2: Configure Environment
In Railway dashboard → Variables:
```
PORT=3000
HOST=0.0.0.0
NODE_ENV=production
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX
FRONTEND_URL=https://your-domain.com
```

### Step 3: Set Start Command
In Service settings → Deploy:
```
cd backend && bun install && bun run server.js
```

---

## 🎯 Deploy to Render

### Step 1: Connect GitHub
1. Go to [render.com](https://render.com)
2. Create new "Web Service"
3. Select your GitHub repository

### Step 2: Configure
- **Build Command**: `cd backend && bun install`
- **Start Command**: `cd backend && bun run server.js`
- **Instance Type**: Free or Paid

### Step 3: Environment Variables
Add in Environment tab:
```
PORT=3000
HOST=0.0.0.0
NODE_ENV=production
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_PHONE_NUMBER=+1234567890
MY_PHONE_NUMBER=+91XXXXXXXXXX
FRONTEND_URL=https://your-domain.com
```

---

## 🌐 Custom Domain Setup

### For Any Hosting Platform

1. **Get Your App URL**:
   - Heroku: `https://your-app-name.herokuapp.com`
   - Railway: `https://your-project.railway.app`
   - Render: `https://your-service.onrender.com`

2. **Update DNS Records**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Create CNAME record:
     ```
     nila-instyle.com  →  your-app-name.herokuapp.com
     ```

3. **Update CORS**:
   In your `.env` or hosting platform variables:
   ```env
   FRONTEND_URL=https://nila-instyle.com
   ```

---

## 🔐 Security Checklist

Before deploying to production:

- ✅ Never commit `.env` files (covered by `.gitignore`)
- ✅ Use strong Twilio credentials
- ✅ Set `NODE_ENV=production`
- ✅ Use `HOST=0.0.0.0` for production
- ✅ Configure CORS with your actual domain
- ✅ Use HTTPS (most platforms auto-enable)
- ✅ Keep dependencies updated

---

## 🧪 Testing Production Build Locally

```bash
# Build for production
NODE_ENV=production \
HOST=0.0.0.0 \
PORT=3000 \
bun run server.js
```

---

## 📊 Environment Variables Summary

| Variable | Local | Production | Purpose |
|----------|-------|-----------|---------|
| `PORT` | 3000 | 3000 | Server port |
| `HOST` | localhost | 0.0.0.0 | Listen address |
| `NODE_ENV` | development | production | Environment type |
| `TWILIO_ACCOUNT_SID` | Yes | Yes | SMS service credential |
| `TWILIO_AUTH_TOKEN` | Yes | Yes | SMS service credential |
| `TWILIO_PHONE_NUMBER` | Yes | Yes | From number for SMS |
| `MY_PHONE_NUMBER` | Yes | Yes | Receive SMS number |
| `FRONTEND_URL` | - | Yes | CORS frontend domain |

---

## 🆘 Troubleshooting

### "Port already in use"
```bash
# Change PORT in .env to an available port
PORT=3001
```

### "CORS error in production"
- Ensure `FRONTEND_URL` is set correctly
- Check browser console for actual origin
- Update CORS whitelist in `server.js` if needed

### "Cannot connect to database/external services"
- Verify all credentials are correct
- Check firewall/network settings
- Ensure service is accessible from server IP

### "502 Bad Gateway"
- Check application logs: `heroku logs --tail`
- Verify environment variables are set
- Ensure dependencies are installed

---

## 📞 Need Help?

- Hosting Platform Docs:
  - [Heroku](https://devcenter.heroku.com)
  - [Railway](https://docs.railway.app)
  - [Render](https://render.com/docs)

- Twilio Docs: [twilio.com/docs](https://twilio.com/docs)

---

**Last Updated**: March 2026
