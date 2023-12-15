// TimelineEvent.tsx
"use client";
import React, { useRef, useEffect } from "react";

interface TimelineEventProps {
  title: string;
  year: string;
  content: React.ReactNode;
  position: "left" | "right";
}

const TimelineEvent = ({
  title,
  year,
  content,
  position,
}: TimelineEventProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (ref.current) {
          const { top, height } = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const elementCenter = top + height / 2;
          const windowCenter = windowHeight / 2;
          const distanceFromCenter = Math.abs(elementCenter - windowCenter);

          // Calculate scale based on distance from center
          let scale = 1 - distanceFromCenter / windowHeight;
          scale = Math.max(0.5, Math.min(1, scale)); // Clamp the scale between 0.5 and 1

          const maxTranslate = 250; // Greater value for a larger initial offset
          // Adjust translateFactor for a more distinct sliding effect
          const translateFactor =
            1 - Math.pow(distanceFromCenter / windowCenter, 2);

          let translateXValue;
          if (position === "right") {
            translateXValue = -maxTranslate * Math.max(0, translateFactor);
          } else {
            translateXValue = maxTranslate * Math.max(0, translateFactor);
          }

          ref.current.style.opacity = `${scale}`;
          ref.current.style.transform = `translateX(${translateXValue}px) scale(${scale})`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]); // Add position to dependency array

  return (
    <div
      ref={ref}
      className={`flex ${
        position === "left" ? "justify-start" : "justify-end"
      } my-4`}
    >
      <div className={`w-1/3 bg-secondary rounded-lg shadow-lg p-4`}>
        <h2 className="text-xl font-bold text-quaternary">{title}</h2>
        <p className="text-tertiary ">{year}</p>
        <p className="text-primary mt-2">{content}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
