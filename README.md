
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
```mermaid

![Image Description](https://i.ibb.co/17HLXKV/Screenshot-187-1-1.png)
graph TD
    A[Login Page] -->|Submit| B(Auth Context)
    B -->|Validate| C{Credentials}
    C -->|Valid| D[LocalStorage]
    C -->|Invalid| A
    D --> E[Protected Routes]
    E --> F[Dashboard]
    F -->|Logout| B
```
## 📦 System 
![deepseek_mermaid_20250420_65596d](https://github.com/user-attachments/assets/2b3b3fe7-606f-45e6-bb83-3b8e8866a407)


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

## 🚀 Production Ready?
| Feature               | Status  | Notes                      |
|-----------------------|---------|----------------------------|
| Client-side Auth      | ✅      | Good for demos             |
| Server-side Validation| ❌      | Add Node.js/Express API    |
| HTTPS                 | ❌      | Mandatory for production   |
| Rate Limiting         | ❌      | Implement on server        |

## 📝 Best Practices
1. **Never store real credentials** in client-side code
2. **Add server-side validation** for production
3. **Use environment variables** for sensitive data
4. **Implement CSRF protection** for forms

## 📜 License
MIT © [Yaseen] 2025

![Image Description](https://i.ibb.co/17HLXKV/Screenshot-187-1-1.png)
