import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const EmailList = (props: Props) => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#fcd4e4]">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Stay up to date with our latest news
          </h2>
          <p className="text-gray-600 md:text-xl dark:text-gray-400">
            Subscribe to receive updates, offers, and more.
          </p>
          <div className="w-full max-w-md mx-auto">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-white"
                placeholder="Enter your email"
                type="email"
                />
              <Button type="submit"className="bg-secondary">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailList;
