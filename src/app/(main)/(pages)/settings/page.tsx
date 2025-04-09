import UserProfileForm from "@/components/forms/UserProfileForm";
import React from "react";
import ProfilePicture from "./_components/ProfilePicture";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-3xl">
        Setting
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h1 className="text-2xl font-bold">User Profile</h1>
          <p className="text-white/50">Add or update your information</p>
        </div>
        <ProfilePicture value={""} />
        <UserProfileForm />
      </div>
    </div>
  );
}
