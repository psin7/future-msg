import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { XStack, YStack } from "@/components/layout";
import { Calendar } from "@/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string(),
  date: z.date(),
});

export function ScheduleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    console.log("user submitted", values);
  };

  return (
    <YStack className="items-center ">
      <YStack className="border border-gray-200 w-1/2 rounded-lg shadow-md">
        <h1 className="px-10 py-4 font-roboto  pb-5 text-2xl font-semibold">
          Create Your Time Capsule
        </h1>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <YStack className="px-10 pb-5 gap-6">
              <EmailInput />
              <MessageInput />
              <ScheduleCalendar />

              <SendButton />
            </YStack>
          </form>
        </FormProvider>
      </YStack>
    </YStack>
  );
}

function EmailInput() {
  const { register, formState } = useFormContext();

  return (
    <YStack className="gap-2">
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        id="email"
        placeholder="singh.pooja71197@gamil.com"
        {...register("email")}
      ></Input>
      <ErrorMessage errors={formState.errors} name="email" />
    </YStack>
  );
}

function MessageInput() {
  const { register, formState } = useFormContext();

  return (
    <YStack className="gap-2">
      <Label htmlFor="message">Your Message</Label>
      <Textarea
        id="message"
        placeholder="write your message to your future self..."
        {...register("message")}
      ></Textarea>
      <ErrorMessage errors={formState.errors} name="message" />
    </YStack>
  );
}
function ScheduleCalendar() {
  const { formState } = useFormContext();

  return (
    <YStack className="gap-2">
      <Label htmlFor="date" className="px-1">
        Delivery Date
      </Label>
      <XStack className="gap-2">
        <XStack className="w-1/2">
          <DatePopover />
        </XStack>

        <Input
          type="time"
          id="time"
          step="1"
          defaultValue="10:30:00"
          className="w-1/2 bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </XStack>
      <ErrorMessage errors={formState.errors} name="date" />
    </YStack>
  );
}

function SendButton() {
  return (
    <XStack className="w-full justify-end">
      <Button type="submit" className="w-fit text-md">
        Send to Future
      </Button>
    </XStack>
  );
}
function DatePopover() {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-full justify-between font-normal"
        >
          {date ? date.toLocaleDateString() : "Select date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(date) => {
            setDate(date);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
