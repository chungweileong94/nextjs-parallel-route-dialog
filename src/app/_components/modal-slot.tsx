"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "~/components/ui/dialog";

export default function ModalSlot({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment("modal");
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // We need this to fix the hydration error
  useEffect(() => {
    setOpen(segment === "children");
  }, [segment]);

  const onOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-h-80">{children}</DialogContent>
    </Dialog>
  );
}
