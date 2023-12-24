import { type Handlers } from "https://deno.land/x/fresh@1.6.1/server.ts";
import { updateGrid } from "../shared/db.ts";
import { COLORS, WIDTH } from "../shared/constants.ts";

export const handler: Handlers = {
  POST: async (req) => {
    const { index, color } = await req.json();

    if (typeof index !== "number") {
      return Response.json({ error: "Invalid index" }, { status: 400 });
    }

    if (index < 0 || index >= WIDTH * WIDTH) {
      return Response.json({ error: "Index out of bounds" }, { status: 400 });
    }

    if (!COLORS.includes(color)) {
      return Response.json({ error: "Invalid color" }, { status: 400 });
    }
    const versionstamp = await updateGrid(index, color);
    return Response.json({ versionstamp });
  },
};
