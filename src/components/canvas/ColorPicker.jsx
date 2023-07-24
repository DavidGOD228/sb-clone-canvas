import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ColorPicker = ({ color, setColor }) => {
  const [open, setOpen] = useState(false);

  const onClose = (e) => {
    setOpen(false);
  };

  const onPicker = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <div
      className="absolute w-[100vw] h-[100vh] top-0 bg-transparent"
      onClick={onClose}
    >
      <div className="absolute left-10 bottom-0">
        <div
          onClick={onPicker}
          className="
            flex
            w-16
            h-16
            bg-black/[.8]
            rounded-md
            items-center
            justify-center
            cursor-pointer
        "
        >
          <img src="/img/rgb.png" alt="rgb" width={48} height={48} />
          {open && (
            <div className="absolute left-12 bottom-16 cursor-pointer">
              <HexColorPicker
                color={color}
                onClick={(e) => e.stopPropagation()}
                onChange={(color) => setColor(color.substring(1))}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
