import { Navbar } from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { RedirectToSignIn } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  // 🔒 Hard auth guard (no blank screen bullshit)
  if (!user) {
    <RedirectToSignIn />;
  }

  const email = user.emailAddresses?.[0]?.emailAddress;

  if (!email) {
    throw new Error("Authenticated user has no email");
  }

  await prisma.user.upsert({
    where: {
      clerkUserId: user.id,
    },
    update: {
      name: user.fullName ?? user.firstName ?? "User",
      email,
      imageUrl: user.imageUrl,
    },
    create: {
      clerkUserId: user.id,
      name: user.fullName ?? user.firstName ?? "User",
      email,
      imageUrl: user.imageUrl,
    },
  });

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
