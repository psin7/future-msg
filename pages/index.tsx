import { XStack, YStack } from "@/components/layout";
import { ScheduleForm } from "./_schedule-form";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

function Heading() {
  return (
    <YStack className="items-center pb-10">
      <img
        src="/futureemail2.png"
        alt="futuremail"
        className="max-w-160 w-3/5 md:w-1/2"
      />
      <p className="text-4xl underline font-bold font-cursive">
        Send a message to your future self
      </p>
    </YStack>
  );
}

export default function Home() {
  return (
    <div className={`flex h-screen w-screen bg-white`}>
      <YStack className="w-full">
        <Header />

        <YStack className="flex-grow">
          <Heading />
          <ScheduleForm />
        </YStack>

        <Footer />
      </YStack>
    </div>
  );
}
