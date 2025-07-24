import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Smartphone, Zap, Search, Filter } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const allTransactions = [
  {
    id: 1,
    type: "send",
    description: "Sent to Mary Wanjiku",
    amount: "-KSh 2,500",
    time: "2 hours ago",
    date: "Today",
    icon: ArrowUpRight,
  },
  {
    id: 2,
    type: "receive",
    description: "Received from Peter Kamau",
    amount: "+KSh 5,000",
    time: "5 hours ago",
    date: "Today",
    icon: ArrowDownLeft,
  },
  {
    id: 3,
    type: "bill",
    description: "Kenya Power - Electricity",
    amount: "-KSh 3,200",
    time: "1 day ago",
    date: "Yesterday",
    icon: Zap,
  },
  {
    id: 4,
    type: "airtime",
    description: "Airtime Purchase",
    amount: "-KSh 200",
    time: "2 days ago",
    date: "23 Jan 2024",
    icon: Smartphone,
  },
  {
    id: 5,
    type: "receive",
    description: "Received from Jane Doe",
    amount: "+KSh 1,200",
    time: "3 days ago",
    date: "22 Jan 2024",
    icon: ArrowDownLeft,
  },
  {
    id: 6,
    type: "send",
    description: "Sent to John Smith",
    amount: "-KSh 800",
    time: "4 days ago",
    date: "21 Jan 2024",
    icon: ArrowUpRight,
  },
  {
    id: 7,
    type: "bill",
    description: "Safaricom Postpaid",
    amount: "-KSh 1,500",
    time: "5 days ago",
    date: "20 Jan 2024",
    icon: Smartphone,
  },
  {
    id: 8,
    type: "receive",
    description: "Received from Mike Wilson",
    amount: "+KSh 3,500",
    time: "1 week ago",
    date: "18 Jan 2024",
    icon: ArrowDownLeft,
  }
];

const Transactions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="max-w-md mx-auto bg-background min-h-screen">
        {/* Header */}
        <div className="bg-gradient-primary text-primary-foreground p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">All Transactions</h1>
          </div>

          {/* Search and Filter */}
          <div className="flex space-x-2">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-foreground/60" />
              <Input 
                placeholder="Search transactions..." 
                className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Filter className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Transactions List */}
        <div className="p-6 space-y-6">
          {/* Group transactions by date */}
          {["Today", "Yesterday", "23 Jan 2024", "22 Jan 2024", "21 Jan 2024", "20 Jan 2024", "18 Jan 2024"].map(date => {
            const dayTransactions = allTransactions.filter(t => t.date === date);
            if (dayTransactions.length === 0) return null;

            return (
              <div key={date}>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 px-2">{date}</h3>
                <div className="space-y-3">
                  {dayTransactions.map((transaction) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Transactions;