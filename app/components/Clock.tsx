"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <span className="inline-block w-[60px] opacity-0">00:00:00</span>;
  }

  return <span>{time}</span>;
}
