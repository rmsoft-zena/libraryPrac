"use client";
import { Form, FormValues, useCheckListStore } from "@/store/checkListStore";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function CheckList() {
  const { setCheckList, resetCheckList } = useCheckListStore((state) => state);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();

  useEffect(() => {
    watch((value: { [x: string]: string }) => setCheckList(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  const resetValues = () => {
    reset();
    resetCheckList();
  };

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log(Form.parse(data));

  return (
    <div>
      <h1 className="text-xl font-bold py-2">CheckList</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {CHECKLIST.map(({ title, options }) => (
          <div key={title} className="flex gap-5">
            <p className="text-lg font-semibold">{title}</p>
            {options.map((option, index) => (
              <div key={index} className="flex gap-2">
                <input
                  id={title}
                  type="radio"
                  value={option}
                  {...register(`${title}`)}
                />
                <label htmlFor={title}>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          type="button"
          className="w-full block bg-zinc-200 py-1 rounded-sm"
          onClick={resetValues}
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-amber-500 px-2 py-1 rounded-md font-bold text-white my-3"
          disabled={isSubmitting}
        >
          구매하기
        </button>
      </form>
    </div>
  );
}

const CHECKLIST = [
  {
    title: "날짜 형식",
    options: ["2023년", "만년"],
  },
  {
    title: "내지 구성",
    options: ["연간", "월간", "주간", "일간"],
  },
  {
    title: "월간 위치",
    options: ["월간-주간-월간-주간", "월간 전체-주간 전체"],
  },
  {
    title: "주간 형태",
    options: ["가로 나열", "세로 나열", "한 주 1쪽", "한 주 2쪽"],
  },
  {
    title: "기간",
    options: ["1년 이상", "1년", "6개월", "3개월", "1개월"],
  },
  {
    title: "크기",
    options: ["A6-", "B6", "A5", "B5", "A4+"],
  },
  {
    title: "커버",
    options: ["하드커버", "소프트커버", "PVC"],
  },
  {
    title: "제본",
    options: ["양장", "6공", "스프링", "메모지"],
  },
  {
    title: "종이",
    options: ["100g", "120g"],
  },
  {
    title: "기타",
    options: ["타임라인", "체크리스트", "밴드", "가름끈", "모눈"],
  },
];
