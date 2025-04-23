# Sign up for EmailJS

## 1. Sign up for EmailJS
- Go to [EmailJS](https://www.emailjs.com/)
- Click "Sign Up" and create an account (you can use your Google account for quick signup)

## 2. Create an Email Service
- After signing in, go to "Email Services" in the left sidebar
- Click "Add New Service"
- Choose "Gmail" (or your preferred email provider)
- Follow the instructions to connect your Gmail account
- Once connected, you'll get a Service ID - copy this and replace `YOUR_SERVICE_ID` in `src/config/emailjs.ts`

## 3. Create an Email Template
- Go to "Email Templates" in the left sidebar
- Click "Create New Template"
- Give it a name (e.g., "Contact Form")
- In the template editor, you can use this HTML:
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```
- Save the template and copy the Template ID - replace `YOUR_TEMPLATE_ID` in `src/config/emailjs.ts`

## 4. Get Your Public Key
- Go to "Account" in the left sidebar
- Find your "Public Key" - copy this and replace `YOUR_PUBLIC_KEY` in `src/config/emailjs.ts` 