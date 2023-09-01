import Image from "next/image";
import React from "react";
import SelectedOptions from "./SelectedOptions";

export default function ItemViewer() {
  return (
    <div className="flex gap-5">
      <Image
        width={130}
        height={130}
        src="/images/다이어리.png"
        alt="다이어리"
        priority
      />
      <div className="flex flex-col gap-3">
        <h2>2023 프리즘 데일리 다이어리(날짜형, 일간, 미니),INDIGO</h2>
        <SelectedOptions />
      </div>
    </div>
  );
}
