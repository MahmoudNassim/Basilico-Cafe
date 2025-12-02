import React, { useRef, useState } from "react";

const FilterPrice = () => {
  const MIN = 0;
  const MAX = 120;

  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(MAX);
  const [dragging, setDragging] = useState<"min" | "max" | "both" | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getValueFromPosition = (clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    let percent = (clientX - rect.left) / rect.width;
    percent = Math.min(Math.max(percent, 0), 1); // Clamp بين 0 و 1
    return MIN + percent * (MAX - MIN);
  };

  const handleMouseDown =
    (thumb: "min" | "max" | "both") => (e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(thumb);
    };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;
    const value = getValueFromPosition(e.clientX);

    if (dragging === "min") setMin(Math.min(value, max));
    if (dragging === "max") setMax(Math.max(value, min));
    if (dragging === "both") {
      const range = max - min;
      let newMin = value - range / 2;
      let newMax = value + range / 2;

      if (newMin < MIN) {
        newMin = MIN;
        newMax = MIN + range;
      }
      if (newMax > MAX) {
        newMax = MAX;
        newMin = MAX - range;
      }

      setMin(newMin);
      setMax(newMax);
    }
  };

  const handleMouseUp = () => setDragging(null);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const percentMin = ((min - MIN) / (MAX - MIN)) * 100;
  const percentMax = ((max - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="bg-[#FAF1E3] max-w-[400px] rounded-[8px] max-md:m-2 pb-4 ">
      <div className="w-full bg-[#2D2723] rounded-t-[8px] p-4">
        <p className="text-[22px] leading-[33px] font-semibold tracking-wide text-white uppercase">
          Filter by Price
        </p>
      </div>

      <div className="px-4">
        <div className="relative h-6 mt-4" ref={trackRef}>
          {/* Track */}
          <div className="absolute top-1/2 left-0 right-0 h-[0.25px] bg-gray-300 opacity-10 -translate-y-1/2"></div>

          {/* Active range */}
          <div
            className="absolute h-[1px]  bg-black -translate-y-1/2 cursor-w-resize"
            style={{
              left: `${percentMin}%`,
              right: `${100 - percentMax}%`,
              top: "50%",
            }}
            onMouseDown={handleMouseDown("both")}
          ></div>

          {/* Min thumb */}
          <div
            style={{
              left: `${percentMin}%`,
              transform: "translateX(-50%)",
            }}
            className="absolute w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 cursor-pointer z-30"
            onMouseDown={handleMouseDown("min")}
          ></div>

          {/* Max thumb */}
          <div
            style={{
              left: `${percentMax}%`,
              transform: "translateX(-50%)",
            }}
            className="absolute w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 cursor-pointer z-20"
            onMouseDown={handleMouseDown("max")}
          ></div>
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            className="px-7 tracking-widest py-1 border-[#cbae8d] border rounded-2xl font-medium 
            hover:text-[#cbae8d] hover:cursor-hover transition-all duration-200 text-[15px] leading-9"
          >
            FILTER
          </button>

          <span
            style={{ fontFamily: "DM Sans" }}
            className="text-[17px] leading-6"
          >
            ${Math.round(min)} - ${Math.round(max)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
