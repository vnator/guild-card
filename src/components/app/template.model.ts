import type { ReactNode } from "react";

export interface AppComponent extends React.FC<{
  children: ReactNode,
  messages: Record<string, string>
}> {}
