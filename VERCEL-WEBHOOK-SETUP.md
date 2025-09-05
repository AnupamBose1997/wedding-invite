# 🔄 Auto-Update Setup Guide

This guide will help you set up automatic updates so that when you change something in Sanity Studio, your Vercel website updates automatically.

## 📋 **What You Need to Do:**

### 1️⃣ **Set Up Environment Variable in Vercel**

1. **Go to Vercel Dashboard** → Your project → Settings → Environment Variables
2. **Add a new variable:**
   - **Name**: `REVALIDATE_SECRET`
   - **Value**: Create a random secret (e.g., `myWeddingSecret2025`)
   - **Environment**: All (Production, Preview, Development)
3. **Save** the variable

### 2️⃣ **Set Up Webhook in Sanity Studio**

1. **Go to Sanity Manage Console**: https://www.sanity.io/manage
2. **Select your project**
3. **Go to API** → **Webhooks**
4. **Create new webhook** with these settings:
   - **Name**: `Vercel Auto-Update`
   - **URL**: `https://YOUR-VERCEL-DOMAIN.vercel.app/api/revalidate`
   - **Dataset**: `production` (or your dataset name)
   - **HTTP method**: `POST`
   - **API version**: `v2021-06-07`
   - **Include drafts**: No
   - **HTTP Headers**: None needed
   - **Secret**: Your `REVALIDATE_SECRET` value
   - **Trigger on**: Document changes

### 3️⃣ **Test the Setup**

1. **Manual test**: Visit `https://YOUR-VERCEL-DOMAIN.vercel.app/api/revalidate?secret=YOUR-SECRET`
2. **Should see**: `{"revalidated":true,"message":"Home page revalidated successfully"}`
3. **Make a change** in Sanity Studio and publish
4. **Wait 30-60 seconds** and check your live website

## ⚡ **How It Works:**

- **When you publish** changes in Sanity → Webhook triggers
- **Webhook calls** your Vercel API → Page revalidates  
- **Website updates** automatically within 30-60 seconds

## 🔧 **Alternative Method (If Webhook Doesn't Work):**

Your site also auto-updates every 30 seconds anyway, so even without the webhook, changes will appear within 30 seconds to 2 minutes.

## 🆘 **Troubleshooting:**

- **Changes not showing?** → Wait 2 minutes, then hard refresh (Ctrl+F5)
- **Webhook failing?** → Check the secret matches exactly
- **Still issues?** → Use the manual test URL above

---
✅ **Once set up, your wedding website will update automatically whenever you make changes in Sanity Studio!**
