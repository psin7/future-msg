import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { XStack, YStack } from "@/components/layout";
import {
  Calendar1Icon,
  CalendarDaysIcon,
  PencilIcon,
  SendIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function About() {
  return (
    <div className={`flex h-screen w-screen bg-white`}>
      <YStack className="w-full">
        <Header />

        <YStack className="flex-grow">
          <AboutHeading />
          <OurStory />
          <HowItWorks />
          <Testimonials />
          <Faq />
        </YStack>

        <Footer />
      </YStack>
    </div>
  );
}

function AboutHeading() {
  return (
    <YStack className="bg-gradient-to-t from-[#e4c4f500] to-[#e4c4f533] via-[#6c5ce700] gap-3 items-center py-10">
      <h1 className="scroll-m-20 text-center text-indigo-900 text-4xl font-extrabold tracking-tight text-balance">
        Send a Note to Tomorrow
      </h1>
      <p className="text-muted-foreground text-xl  max-w-128 text-center">
        Capture your thoughts today and surprise your future self or someone you
        love on any date you choose.
      </p>
    </YStack>
  );
}

function OurStory() {
  return (
    <YStack className="items-center pb-10">
      <YStack className="w-2/3 items-center max-w-[700px]">
        <img
          src="/bottle.png"
          alt="bottle"
          className="w-1/2 max-w-80 -my-24 motion-preset-seesaw motion-duration-1000"
        />
        <XStack className="items-center">
          <OurStoryContent />
        </XStack>
      </YStack>
    </YStack>
  );
}

function OurStoryContent() {
  return (
    <YStack className=" rounded-xl px-4">
      <h1 className="scroll-m-20 text-center text-indigo-900 text-2xl font-semibold font-roboto text-balance py-3">
        Our Story
      </h1>
      <p>
        In a world of disappearing DMs and endless feeds, meaningful moments get
        buried fast. We wanted a space where feelings could slow-cook—then
        arrive precisely when they matter most.
      </p>
      <br></br>
      <p>
        Time Capsule began as a side project between friends who loved writing
        letters to their future selves. Today it’s a simple tool anyone can use
        to pause, reflect, and reconnect with the person they’ll become. Whether
        you’re sending advice, promises, or pure nostalgia, we keep it safe
        until delivery day. Because some words deserve the gift of time.
      </p>
    </YStack>
  );
}

function HowItWorks() {
  return (
    <YStack className="items-center scroll-m-20 py-3 gap-10">
      <h1 className="text-indigo-900 text-2xl font-semibold font-roboto text-balance ">
        How It Works
      </h1>
      <XStack className="gap-10 flex-wrap justify-center">
        <FeatureCard Icon={PencilIcon} text="Write a note" />
        <FeatureCard Icon={CalendarDaysIcon} text="Choose a future date" />
        <FeatureCard Icon={SendIcon} text="We deliver it" />
      </XStack>
    </YStack>
  );
}

function FeatureCard({
  Icon,
  text,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <YStack className="gap-5 items-center py-6 w-60 shadow-md border border-gray-100 bg-gradient-to-t from-[#e4c4f500] to-[#cec9d133] rounded-md">
      <XStack className="bg-indigo-50 p-5 items-center justify-center rounded-full">
        <Icon className="text-indigo-900" />
      </XStack>
      <p className="font-roboto font-medium text-lg">{text}</p>
    </YStack>
  );
}

function Testimonials() {
  return (
    <YStack className="items-center mt-3  py-4 gap-3">
      <Testimonial
        quote="A unique way to pause, reflect, and grow. Highly recommend! "
        name="Ava"
        image="https://i.pravatar.cc/150?img=38"
      />
      <Testimonial
        quote="It felt magical to read a letter from my past self on graduation day. "
        name="Ben"
        image="https://i.pravatar.cc/150?img=60"
      />
      <Testimonial
        quote="Time Capsule helped our team send surprise appreciation notes for work anniversaries. "
        name="Emily"
        image="https://i.pravatar.cc/150?img=36"
      />
    </YStack>
  );
}

interface TestimonialProps {
  quote: string;
  name: string;
  image: string;
  imageAlt?: string;
}

export function Testimonial({
  quote,
  name,
  image,
  imageAlt,
}: TestimonialProps) {
  return (
    <div className="w-[90%] max-w-160 flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex-shrink-0">
        <img
          src={image || "/placeholder.svg"}
          alt={imageAlt || `${name}'s profile picture`}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-gray-900 text-sm leading-relaxed mb-2">{quote}</p>
        <p className="text-gray-700 text-sm font-medium">{name}</p>
      </div>
    </div>
  );
}

function Faq() {
  return (
    <YStack className="items-center scroll-m-20 py-3 gap-10 my-10">
      <h1 className="text-indigo-900 text-2xl font-semibold font-roboto text-balance ">
        Frequently Asked Questions
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-125 bg-gray-50/90 px-5  rounded-md shadow-sm"
        defaultValue="item-1"
      >
        <FaqItem
          ques="Is Time Capsule free? "
          ans="Yes. Sending personal capsules costs nothing. We’ll add premium features later, but basic sending will stay free."
        />
        <FaqItem
          ques="Can I edit a message after I schedule it?"
          ans="Absolutely—until 24 hours before the delivery date. Just log in, open the capsule, and click 'Edit'"
        />
      </Accordion>
    </YStack>
  );
}
function FaqItem({ ques, ans }: { ques: string; ans: string }) {
  return (
    <AccordionItem value={ques}>
      <AccordionTrigger className="text-lg font-roboto">
        {ques}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        <p>{ans}</p>
      </AccordionContent>
    </AccordionItem>
  );
}
