import { Heart, Send } from "lucide-react";
import InstagramLogo from "./InstagramLogo";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-2.5">
        <Link to="/">
          <InstagramLogo className="h-8" />
        </Link>
        <div className="flex items-center gap-5">
          <button aria-label="Notifications">
            <Heart className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </button>
          <button aria-label="Messages">
            <Send className="h-6 w-6 text-foreground" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
