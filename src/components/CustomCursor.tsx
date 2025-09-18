import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    const elements = document.querySelectorAll("a, button, .cursor-hover");

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-10 h-10 rounded-full border-2 border-[#C3A27C] opacity-50 relative flex items-center justify-center">
        <div
          className={`rounded-full bg-[#C3A27C] transition-all duration-300 ease-out ${hovered ? "w-9 h-9 opacity-70" : "w-2 h-2"
            }`}
        />
      </div>
    </div>
  );
}
