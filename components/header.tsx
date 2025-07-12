import { Mail } from "lucide-react";
import { XStack } from "./layout";
import Link from "next/link";

export function Header() {
  return (
    <XStack className="w-full justify-between px-10 py-6 ">
      <XStack className="gap-3 items-center">
        <Mail className="size-5 text-indigo-700 stroke-3" />
        <Link href="/" className="font-roboto text-xl font-medium">
          Time Capsule
        </Link>
      </XStack>
      <XStack className="gap-8 font-sans">
        <Link href="/about" className="tracking-tight">
          About
        </Link>
        <h2 className="tracking-tight">My Messages</h2>
      </XStack>
    </XStack>
  );
}
