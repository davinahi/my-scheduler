import { ReactNode } from "react";
import Tabs from "./tabs/Tabs";
import { TabsProvider } from "./tabs/TabsContext";
import InteractionBar from "./interactionBar/InteractionBar";

type Props = { children: ReactNode };

export default function ScheduleLayout({ children }: Props) {
  return (
    <TabsProvider>
      <Tabs />
      <InteractionBar />
      <main>{children}</main>
    </TabsProvider>
  );
}
