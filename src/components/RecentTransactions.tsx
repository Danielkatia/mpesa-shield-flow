import { ArrowUpRight, ArrowDownLeft, Smartphone, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const transactions = [
  {
    id: 1,
    type: "send",
    description: "Sent to Mary Wanjiku",
    amount: "-KSh 2,500",
    time: "2 hours ago",
    icon: ArrowUpRight,
  },
  {
    id: 2,
    type: "receive",
    description: "Received from Peter Kamau",
    amount: "+KSh 5,000",
    time: "5 hours ago",
    icon: ArrowDownLeft,
  },
  {
    id: 3,
    type: "bill",
    description: "Kenya Power - Electricity",
    amount: "-KSh 3,200",
    time: "1 day ago",
    icon: Zap,
  },
  {
    id: 4,
    type: "airtime",
    description: "Airtime Purchase",
    amount: "-KSh 200",
    time: "2 days ago",
    icon: Smartphone,
  },
];

export const RecentTransactions = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">Recent Transactions</h2>
        <button className="text-primary text-sm font-medium">View All</button>
      </div>
      
      <div className="space-y-3">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          const isNegative = transaction.amount.startsWith("-");
          
          return (
            <Card key={transaction.id} className="p-4 shadow-soft">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  transaction.type === 'receive' 
                    ? 'bg-success/10' 
                    : 'bg-secondary'
                }`}>
                  <Icon className={`w-5 h-5 ${
                    transaction.type === 'receive' 
                      ? 'text-success' 
                      : 'text-primary'
                  }`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">
                    {transaction.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {transaction.time}
                  </p>
                </div>
                
                <div className="text-right">
                  <p className={`font-semibold text-sm ${
                    isNegative ? 'text-foreground' : 'text-success'
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};