import { Home, Send, History, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Send, label: "Send" },
  { icon: Plus, label: "More", isCenter: true },
  { icon: History, label: "History" },
  { icon: User, label: "Profile" },
];

export const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          
          if (item.isCenter) {
            return (
              <Button
                key={index}
                className="w-12 h-12 rounded-full bg-gradient-primary shadow-card hover:scale-105 transition-transform"
                size="icon"
              >
                <Icon className="w-6 h-6" />
              </Button>
            );
          }
          
          return (
            <button
              key={index}
              className={`flex flex-col items-center space-y-1 py-2 px-3 transition-colors ${
                item.active 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};