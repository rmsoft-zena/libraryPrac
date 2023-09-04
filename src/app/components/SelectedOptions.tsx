"use client";
import { useCheckListStore } from "@/store/checkListStore";
import React from "react";

export default function SelectedOptions() {
  const { checkList } = useCheckListStore();

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2">
      {checkList?.기간 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.기간}
        </div>
      )}
      {checkList?.기타 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.기타}
        </div>
      )}
      {checkList?.["날짜 형식"] && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList?.["날짜 형식"]}
        </div>
      )}
      {checkList?.["내지 구성"] && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList?.["내지 구성"]}
        </div>
      )}
      {checkList?.["월간 위치"] && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList?.["월간 위치"]}
        </div>
      )}
      {checkList?.제본 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.제본}
        </div>
      )}
      {checkList?.종이 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.종이}
        </div>
      )}
      {checkList?.["주간 형태"] && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList?.["주간 형태"]}
        </div>
      )}
      {checkList?.커버 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.커버}
        </div>
      )}
      {checkList?.크기 && (
        <div className="w-fit px-2 py-1 even:bg-indigo-800 odd:bg-indigo-400 text-white rounded-lg opacity-80">
          # {checkList.크기}
        </div>
      )}
    </div>
  );
}
