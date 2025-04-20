
```markdown
# KRAFTEDX Authentication System

*A secure client-side authentication flow for creative teams*

## 📌 Overview
A lightweight authentication system built with:
- Next.js App Router
- React Context API
- LocalStorage session persistence
- Protected route middleware

## ✨ Features
- 🔒 Hardcoded credential validation
- 🔄 Session persistence across refreshes
- 🛡️ Route protection middleware
- 🎨 Custom UI components
- ⚡ Optimized performance


## 📦 System Architecture

Mermaid.js Diagram

![deepseek_mermaid_20250420_beb51a](https://github.com/user-attachments/assets/45804a00-527a-48e4-8c09-36992b082cc2)

Sequence of Operations:
1 Login:

![deepseek_mermaid_20250420_9e8a0d](https://github.com/user-attachments/assets/b1f7f14a-eb46-4c6d-b76a-db8bbf25ccc2)

2 Dashboard Access:

![deepseek_mermaid_20250420_235ec6](https://github.com/user-attachments/assets/357944dd-4050-4d99-b7af-1cc2f703a886)

3 Logout:

![deepseek_mermaid_20250420_f84885](https://github.com/user-attachments/assets/17460bd3-c499-4799-8275-bb746f7aecf5)

ASCII Diagram

┌───────────────────────────────────────────────────┐
│                    User Flow                      │
└───────────────────────────────────────────────────┘
       │
       ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  /login     │───▶│ AuthContext │───▶│ localStorage │
│ (page.js)   │    │ (login)     │    │ (user data)  │
└─────────────┘    └─────────────┘    └─────────────┘
       │                  ▲                  │
       │                  │                  ▼
       ▼                  │           ┌─────────────┐
┌─────────────┐          │           │ session     │
│ /dashboard  │          │           │ management  │
│ (page.js)   │          │           └─────────────┘
└─────────────┘          │                  ▲
       │                  │                  │
       ▼                  │                  │
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│ Protected   │────▶│ AuthContext │────▶│ logout      │
│ Route       │    │ (check auth)│    │ (clear      │
│             │    └─────────────┘    │  storage)   │
└─────────────┘                       └─────────────┘
                                     └──────────────┘




## 🛠️ Installation
1. Clone the repository:
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
