import { handlers as questionhHandler } from "./domain/questionhandler";
import { handlers as matchHandler } from "./domain/matchhandler";
import { handlers as matchResultHandler } from "./domain/matchResulthandler";
export const handlers = [
  ...questionhHandler,
  ...matchHandler,
  ...matchResultHandler,
];
