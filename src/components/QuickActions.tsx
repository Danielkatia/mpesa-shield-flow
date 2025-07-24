import { Send, Receipt, CreditCard, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const quickActions = [
  {
    icon: Send,
    label: "Send Money",
    description: "Transfer to anyone",
  },
  {
    icon: Receipt,
    label: "Pay Bills",
    description: "Utilities & services",
  },
  {
    icon: CreditCard,
    label: "Buy Airtime",
    description: "Top up your phone",
  },
  {
    icon: History,
    label: "Statements",
    description: "View transaction history",
  },
];

export const QuickActions = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className="p-4 shadow-soft hover:shadow-card transition-all duration-200 cursor-pointer hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground">{action.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};