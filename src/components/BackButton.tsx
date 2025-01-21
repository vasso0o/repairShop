"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@/components/ui/button";

interface BackButtonProps extends ButtonProps {
  title: string;
}

export function BackButton({ title, ...props }: BackButtonProps) {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} title={title} {...props}>
      {title}
    </Button>
  );
}
