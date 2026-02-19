import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, PlusSquare, Film, User } from "lucide-react";

const navItems = [
  { to: "/home", icon: Home, label: "Home" },
  { to: "/explore", icon: Search, label: "Search" },
  { to: "/create", icon: PlusSquare, label: "Create" },
  { to: "/reels", icon: Film, label: "Reels" },
  { to: "/profile", icon: User, label: "Profile" },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background">
      <div className="mx-auto flex max-w-lg items-center justify-around py-2">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className="flex flex-col items-center gap-0.5 p-1"
              aria-label={label}
            >
              <Icon
                className={`h-6 w-6 transition-all ${active ? "text-foreground" : "text-muted-foreground"}`}
                strokeWidth={active ? 2.5 : 1.5}
              />
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
