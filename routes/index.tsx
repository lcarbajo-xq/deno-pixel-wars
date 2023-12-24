import { Head } from "$fresh/runtime.ts";
import { ColorPicker } from "../components/color-picker.tsx";
import { Game } from "../islands/game.tsx";
import { COLOR_CODES, HEIGHT, PIXEL_SIZE, WIDTH } from "./shared/constants.ts";
import { getGrid } from "./shared/db.ts";

export default async function Home() {
  const { tiles } = await getGrid();
  return (
    <>
      <Head>
        <title>Pixel Wars</title>
      </Head>

      <Game initialTiles={tiles} />
    </>
  );
}
