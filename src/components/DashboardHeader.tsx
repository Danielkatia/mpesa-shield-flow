import { Bell, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const DashboardHeader = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

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
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm opacity-90">Account Balance</p>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary-foreground hover:bg-primary-foreground/10 h-6 w-6"
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
          >
            {isBalanceVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </Button>
        </div>
        <div className="flex items-baseline space-x-2">
          {isBalanceVisible ? (
            <>
              <span className="text-3xl font-bold">KSh 12,450</span>
              <span className="text-sm opacity-80">.50</span>
            </>
          ) : (
            <span className="text-3xl font-bold">KSh ••••••</span>
          )}
        </div>
      </div>
    </header>
  );
};