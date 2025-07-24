import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground p-6 rounded-b-3xl shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm opacity-90">Welcome back</p>
            <h1 className="text-lg font-semibold">John Doe</h1>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
          <Bell className="w-5 h-5" />
        </Button>
      </div>
      
      <div className="mt-6">
        <p className="text-sm opacity-90 mb-2">Account Balance</p>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">KSh 12,450</span>
          <span className="text-sm opacity-80">.50</span>
        </div>
      </div>
    </header>
  );
};