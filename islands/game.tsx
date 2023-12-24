import { useSignal } from "@preact/signals";
import { ColorPicker } from "../components/color-picker.tsx";
import { COLORS, PIXEL_SIZE, WIDTH } from "../routes/shared/constants.ts";
import { Color, Grid } from "../routes/shared/types.ts";
import { Tiles } from "../components/tiles.tsx";

export function Game({ initialTiles }: { initialTiles: Color[] }) {
  const grid = useSignal<Color[]>(initialTiles);
  const selectedColor = useSignal<Color>(COLORS[0]);
  return (
    <>
      <Tiles grid={grid} selectedColor={selectedColor.value} />
      <ColorPicker selectedColor={selectedColor} />;
    </>
  );
}
