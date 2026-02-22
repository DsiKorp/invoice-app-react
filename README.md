# React Invoice & Shopping Cart App

A modern web application built with **React + TypeScript + Vite** that includes two main modules:
- 📄 **Invoice App** – Create and manage invoices with client/company info and item lists.
- 🛒 **Shopping Cart** – A fully functional shopping cart with state management via reducers.

---

## 🚀 Tech Stack

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

---

## 📁 Project Structure

```
src/
├── main.tsx                  # App entry point
├── Principal.tsx             # Main layout / navigation
├── index.css                 # Global styles
├── routes/
│   └── CartRoutes.tsx        # Routing configuration
├── invoiceApp/
│   ├── InvoiceApp.tsx        # Invoice module root
│   ├── components/
│   │   ├── ClientView.tsx    # Client information form
│   │   ├── CompanyView.tsx   # Company information form
│   │   ├── FormItemsView.tsx # Form to add invoice items
│   │   ├── InvoiceView.tsx   # Full invoice preview
│   │   └── ListItemsView.tsx # List of added items
│   ├── data/                 # Static/mock data
│   ├── interfaces/           # TypeScript interfaces
│   └── services/             # Business logic / services
└── shoppingCart/
    ├── CartApp.tsx           # Shopping cart module root
    ├── components/           # UI components
    ├── data/                 # Static/mock data
    ├── hooks/                # Custom React hooks
    ├── interfaces/           # TypeScript interfaces
    ├── reducer/              # useReducer logic
    └── services/             # Business logic / services
```

---

## ⚙️ Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/DsiKorp/invoice-app-react.git
cd your-repo
npm install
```

---

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server at `http://localhost:5173` |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🖥️ Running the App

```bash
# Development mode
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 🧩 Modules

### 📄 Invoice App
Allows users to:
- Enter **company** and **client** information.
- Add **items** with quantity and price.
- Preview a complete **invoice** with totals.

### 🛒 Shopping Cart
Allows users to:
- Browse a **product list**.
- **Add/remove** products from the cart.
- Manage cart state using **React Reducer** pattern.

---

## 🤝 Contributing

1. Fork the project
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).