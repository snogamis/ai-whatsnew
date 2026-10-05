import type { Session } from "@ai-whatsnew/auth";
import type { Database } from "@ai-whatsnew/db";

export type Context = {
  session: Session | null;
  db: Database;
};
