import DepositComponent from "@/components/deosit-component";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="w-full h-screen bg-black flex flex-col items-center justify-center">
      <div>
        <Tabs defaultValue="account" className="w-xl space-y-3.5">
          <TabsList className="h-fit p-1.5 rounded-full bg-transparent border-2 border-[#1E1E1E] space-x-1.5">
            <TabsTrigger value="deposit" className="hover:cursor-pointer text-base">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw" className="hover:cursor-pointer text-base">Withdraw</TabsTrigger>
          </TabsList>
          <TabsContent value="deposit">
            <DepositComponent />
          </TabsContent>
          <TabsContent value="withdraw">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
