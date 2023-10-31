"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import hole from "../public/hole.png";
import mole from "../public/mole.png";
import Image from "next/image";

export default function Wackamole() {
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 550);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function wackMole(index: number) {
    const newMoles = [...moles];
    newMoles[index] = false;
    setScore(score + 1);
    setMoles(newMoles);
    const audio = new Audio('punch.mp3');
    audio.play();
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-4xl">Score: {score}</h1>
      <div className="grid grid-cols-3 ">
        {moles.map((m, idx) => (
          <Image
            key={idx}
            src={m ? mole : hole}
            className="unselectable"
            alt=""
            onClick={() => {
              m ? wackMole(idx) : null;
            }}
          />
        ))}
      </div>
    </div>
  );
}
