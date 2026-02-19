import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import InstagramLogo from "@/components/InstagramLogo";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  const canSubmit = email.length > 0 && password.length > 5;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      {/* Login Card */}
      <div className="w-full max-w-[350px]">
        <div className="rounded-sm border border-border bg-card px-10 py-10">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <InstagramLogo className="h-12" />
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Phone number, username, or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-border bg-secondary px-3 py-2 text-xs placeholder:text-muted-foreground focus:border-muted-foreground focus:outline-none"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-sm border border-border bg-secondary px-3 py-2 text-xs placeholder:text-muted-foreground focus:border-muted-foreground focus:outline-none"
              />
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 w-full rounded-lg bg-accent py-1.5 text-sm font-semibold text-accent-foreground transition-opacity disabled:opacity-40"
            >
              Log in
            </button>
          </form>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-semibold text-muted-foreground">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Facebook login */}
          <button className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-accent">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Log in with Facebook
          </button>

          <p className="mt-4 text-center text-xs text-accent">
            Forgot password?
          </p>
        </div>

        {/* Sign up */}
        <div className="mt-3 rounded-sm border border-border bg-card px-10 py-5 text-center text-sm">
          Don't have an account?{" "}
          <button className="font-semibold text-accent">Sign up</button>
        </div>

        {/* Get the app */}
        <div className="mt-5 text-center">
          <p className="text-sm">Get the app.</p>
          <div className="mt-3 flex items-center justify-center gap-2">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="App Store"
              className="h-10"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Google Play"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
