import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoanCalculator from "./LoanCalculator";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="text-center p-4 bg-slate-100 rounded-b-xl">
          <Link className="mx-3 text-blue-600 font-medium" to="/">
            Home
          </Link>
          <Link className="mx-3 text-blue-600 font-medium" to="/privacy">
            Privacy Policy
          </Link>
          <Link className="mx-3 text-blue-600 font-medium" to="/contact">
            Contact
          </Link>
          <Link className="mx-3 text-blue-600 font-medium" to="/terms">
            Terms
          </Link>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LoanCalculator />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <footer className="text-center text-sm p-4 bg-slate-100 rounded-t-xl">
          © {new Date().getFullYear()} Loan Calculator by Loan Estimators. All
          rights reserved.
        </footer>
      </div>
    </Router>
  );
}
