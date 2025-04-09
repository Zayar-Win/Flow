"use client";
import FileUpload from "@/components/global/FileUpload";
import React from "react";

type Props = {
  value: string;
};

const ProfilePicture = ({ value }: Props) => {
  const onChange = () => {};
  return (
    <div className="flex flex-col">
      <p className="text-lg text-white mb-2">Profile Picture</p>
      <FileUpload onChange={onChange} value={value} />
    </div>
  );
};

export default ProfilePicture;
