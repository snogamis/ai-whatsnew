import { createAuth } from "@ai-whatsnew/auth";
import { createDb } from "@ai-whatsnew/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
