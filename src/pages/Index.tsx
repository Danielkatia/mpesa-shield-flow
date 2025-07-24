import { DashboardHeader } from "@/components/DashboardHeader";
import { QuickActions } from "@/components/QuickActions";
import { RecentTransactions } from "@/components/RecentTransactions";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="max-w-md mx-auto bg-background min-h-screen relative pb-20">
        <DashboardHeader />
        <QuickActions />
        <RecentTransactions />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
