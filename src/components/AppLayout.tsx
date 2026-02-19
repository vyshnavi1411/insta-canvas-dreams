import { Outlet } from "react-router-dom";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

const AppLayout = () => {
  return (
    <div className="mx-auto min-h-screen max-w-lg bg-background">
      <TopBar />
      <main className="pb-16">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default AppLayout;
