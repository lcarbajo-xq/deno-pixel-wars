import { CHANNELS, COLOR_CODES, HEIGHT, KEYS, WIDTH } from "./constants.ts";
import { Color, Grid } from "./types.ts";

const db = await Deno.openKv();

export async function updateGrid(index: number, color: Color): Promise<string> {
  const res = await db.set([KEYS.tiles, index], color);
  const { versionstamp } = res;
  const bChannel = new BroadcastChannel(CHANNELS.PICEL_UPDATE);

  bChannel.postMessage({ index, color, versionstamp });

  setTimeout(() => bChannel.close(), 5);
  return versionstamp;
}

export const getGrid = async (): Promise<Grid> => {
  const tiles = new Array(WIDTH * HEIGHT).fill(COLOR_CODES.gray);
  const versionstamps = new Array(WIDTH * HEIGHT).fill("");

  const pixels = db.list<string>({ prefix: [KEYS.tiles] });

  for await (const pixel of pixels) {
    const index = pixel.key[1] as number;
    tiles[index] = pixel.value;
    versionstamps[index] = pixel.versionstamp;
  }
  return { tiles, versionstamps };
};
