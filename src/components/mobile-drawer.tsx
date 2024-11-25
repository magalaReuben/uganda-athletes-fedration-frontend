import { ReactNode } from "react";
import { Drawer } from "vaul";

type DrawerProps = {
  trigger: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
};

export function MobileDrawer(props: Readonly<DrawerProps>) {
  return (
    <Drawer.Root
      direction="right"
      open={props.isOpen}
      onOpenChange={props.onOpenChange}
    >
      <Drawer.Trigger asChild>{props.trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 h-full min-h-screen bg-black/40" />
        <Drawer.Content className="fixed bottom-0 right-0 z-[100] h-full min-h-screen w-[70%] bg-white">
          {props.children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
