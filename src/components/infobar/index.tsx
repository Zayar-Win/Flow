import { Book, Headphones, Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const InfoBar = () => {
  return (
    <div className="flex flex-row justify-end gap-6 items-center p-4 w-full dark:bg-black">
      <div className="flex items-center bg-muted px-4 rounded-full">
        <Search />
        <Input
          placeholder="Search"
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent>
            <p>Contact Support</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent>
            <p>Guide</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default InfoBar;
