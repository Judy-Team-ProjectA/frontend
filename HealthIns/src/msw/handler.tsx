import { rest } from "msw";
import { Question } from "@/types/questions";
import { handlers as questionhandler } from "./domain/questionhandler";

export const handlers = [...questionhandler];
