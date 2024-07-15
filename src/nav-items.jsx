import { Home, Info, BookOpen, LogIn } from "lucide-react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import AdminLoginPage from "./pages/AdminLoginPage";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <AboutPage />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
    page: <BlogPage />,
  },
  {
    title: "Admin Login",
    to: "/admin-login",
    icon: <LogIn className="h-4 w-4" />,
    page: <AdminLoginPage />,
  },
];