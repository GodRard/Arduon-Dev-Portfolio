import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = (email: string) => emailRegex.test(email);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      setIsSubmitting(false); // Prevent unnecessary API call
      return; // Exit function early on invalid email
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          subject,
          message,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        // Success
        toast.success("Email sent successfully!");
        setFirstName(() => "");
        setLastName(() => "");
        setEmail(() => "");
        setCompany(() => "");
        setSubject(() => "");
        setMessage(() => "");
      } else {
        // Handle other status codes (e.g., 400, 500)
        setError(
          data.message ||
            toast.error("An error occurred. Please try again later.")
        );
      }
    } catch (error: any) {
      console.error("Error sending email:", error);
      setError(
        error.message ||
          toast.error("An error occurred. Please try again later.")
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={sendMail} className="my-8">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstName"
            placeholder="Gerard"
            type="text"
            required
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFirstName(e.target.value)
            }
            // {...(register("firstName"), { required: true })}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastName"
            placeholder="Misa"
            type="text"
            // {...(register("lastName"), { required: true })}
            required
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLastName(e.target.value)
            }
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="arduondev@gmail.com"
          type="email"
          //{...(register("email"), { required: true })}
          required
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          placeholder="Company Name"
          type="text"
          //{...(register("company"), { required: true })}
          value={company}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCompany(e.target.value)
          }
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="Subject"
          type="text"
          //{...(register("subject"), { required: true })}
          required
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSubject(e.target.value)
          }
        />
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Message"
          //{...(register("message"), { required: true })}
          required
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
        />
      </LabelInputContainer>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"} &rarr;
        <BottomGradient />
      </button>
    </form>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default ContactForm;
