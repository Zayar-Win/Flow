"use client";
import React from "react";
import Image from "next/image";
import { FileIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "@/lib/uploadthing";
type Props = {
  onChange: (url?: string) => void;
  value?: string;
};

const FileUpload = ({ onChange, value }: Props) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className="flex flex-col jsutify-center items-center">
        {type !== "pdf" ? (
          <div className="relative w-40 h-40">
            <Image
              src={value}
              alt="Uploaded Image"
              className="object-contain"
              fill
            />
          </div>
        ) : (
          <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
            <FileIcon />
            <a
              href={value}
              target="_blank"
              rel="noopener_noreferrer"
              className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
            >
              View PDF
            </a>
          </div>
        )}
        <Button onClick={() => onChange("")} variant="ghost" type="button">
          <X className="h-4 w-4"></X>
          Remove Logo
        </Button>
      </div>
    );
  }
  return (
    <div className="w-full bg-muted/30">
      <UploadDropzone
        endpoint={"profile"}
        onClientUploadComplete={(res) => {
          onChange(res?.[0]?.url);
        }}
        onUploadError={(err) => {
          console.error(err);
        }}
      />
    </div>
  );
};

export default FileUpload;
