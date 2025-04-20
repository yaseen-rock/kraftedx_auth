# KRAFTEDX Authentication System

*A secure client-side authentication flow for creative teams*

## 📌 Overview

KRAFTEDX is a lightweight client-side authentication system designed for creative and fast-moving teams. It uses modern tools to manage authentication without the complexity of backend integration.

Built with:

- ⚛️ **Next.js App Router**
- 🔁 **React Context API**
- 💾 **LocalStorage for session persistence**
- 🛡️ **Middleware for route protection**

## ✨ Features

- 🔒 Hardcoded credential validation  
- 🔄 Session persistence across refreshes  
- 🛡️ Route protection middleware  
- 🎨 Custom UI components  
- ⚡ Optimized performance with minimal footprint

## 📦 System Architecture

ASCII Diagram

```bash
┌───────────────────────────────────────────────────┐
│                    User Flow                      │
└───────────────────────────────────────────────────┘
       │
       ▼
┌─────────────┐    ┌────────────┐    ┌─────────────┐
│  /login     │──▶│ AuthContext │──▶│ localStorage│
│ (page.js)   │    │ (login)    │    │ (user data) │
└─────────────┘    └────────────┘    └─────────────┘
       │                  ▲                  │
       │                  │                  ▼
       ▼                  │           ┌─────────────┐
┌─────────────┐          │            │ session     │
│ /dashboard  │           │           │ management  │
│ (page.js)   │           │           └─────────────┘
└─────────────┘           │                  ▲
       │                  │                  │
       ▼                  │                  │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Protected   │──▶│ AuthContext  │──▶│ logout      │
│ Route       │    │ (check auth)│    │ (clear      │
│             │    └─────────────┘    │  storage)   │
└─────────────┘                       └─────────────┘
```

Mermaid Diagram

![deepseek_mermaid_20250420_beb51a](https://github.com/user-attachments/assets/dc6f6926-944a-4308-8a30-87465e5e5a19)

Sequence of Operations:
1 Login:

![deepseek_mermaid_20250420_9e8a0d](https://github.com/user-attachments/assets/23511dfe-797e-4eb2-bc3c-6d4183293545)

2 Dashboard Access:

![deepseek_mermaid_20250420_235ec6](https://github.com/user-attachments/assets/b1d88323-6273-4427-876c-a46186d8c862)

3 Logout:

![deepseek_mermaid_20250420_f84885](https://github.com/user-attachments/assets/41f0e8f9-23df-4af6-806c-3ab92aea51c9)


## 🛠️ Installation

1. Clone the repository

```bash
git clone https://github.com/yourrepo/kraftedx-auth.git
cd kraftedx-auth
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Screenshot

1 Login Page

![Screenshot (197)](https://github.com/user-attachments/assets/626826ac-e0bf-41bd-b73f-4da3eafccb36)

2 Dashboard

![Screenshot (198)](https://github.com/user-attachments/assets/b8a367d0-1db6-477e-ac67-51ff8aea57b4)


## 🔐 Authentication Flow

### Login Process
1. User enters credentials:
   - Username: `kraftedx`
   - Password: `creative123`
2. System validates against hardcoded credentials
3. On success:
   - Stores session in localStorage
   - Redirects to dashboard

### Logout Process
1. Click logout button
2. System:
   - Clears localStorage
   - Resets auth state
   - Redirects to login page

## 📂 File Structure
```
src/
├── app/
│   ├── login/
│   │   └── page.js        # Login page
│   ├── dashboard/
│   │   └── page.js        # Protected dashboard
│   └── layout.js          # Auth provider wrapper
├── context/
│   └── AuthContext.js     # Authentication logic
├── components/
│   └── ProtectedRoute.js  # Route guard
└── styles/
    └── globals.css        # Tailwind imports
```

## ⚙️ Configuration
Edit `AuthContext.js` to:
- Change credentials
- Modify session duration
- Add additional user fields

```javascript
// AuthContext.js
const validCredentials = {
  username: 'your-username', // Change this
  password: 'your-password'  // Change this
};
```

## 📜 License
MIT © [Yaseen] 2025

![Image Description](https://i.ibb.co/17HLXKV/Screenshot-187-1-1.png)
