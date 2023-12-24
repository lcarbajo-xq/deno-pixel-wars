import { Signal, useSignal } from "@preact/signals";
import { Color } from "../routes/shared/types.ts";
import { COLORS } from "../routes/shared/constants.ts";

export function ColorPicker({
  selectedColor,
}: {
  selectedColor: Signal<Color>;
}) {
  return (
    <footer class="flex gap-6">
      <div class="flex fixed bottom-2 justify-center left-0 right-0 gap-x-2">
        {COLORS.map((color) => (
          <button
            class={`w-8 h-8 rounded border-4 ${
              selectedColor.value === color ? "border-white" : "border-black"
            }`}
            style={{ backgroundColor: color }}
            onClick={() => selectedColor.value = color}
          />
        ))}
      </div>
    </footer>
  );
}
