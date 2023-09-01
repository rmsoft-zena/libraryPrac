import { create } from "zustand";
import { z } from "zod";

export const Form = z.object({
  "날짜 형식": z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  "내지 구성": z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  "월간 위치": z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  "주간 형태": z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  기간: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  크기: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  커버: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  제본: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  종이: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
  기타: z
    .string()
    .or(z.null())
    .transform((val: string | null) => (val === null ? "" : val))
    .optional(),
});

export const initialForm = {
  "날짜 형식": "",
  "내지 구성": "",
  "월간 위치": "",
  "주간 형태": "",
  기간: "",
  크기: "",
  커버: "",
  제본: "",
  종이: "",
  기타: "",
};

export type FormValues = z.infer<typeof Form> & {
  [x: string]: string;
};

type State = {
  checkList: FormValues;
};

type Action = {
  setCheckList: (newForm: FormValues) => void;
  resetCheckList: () => void;
};

export const useCheckListStore = create<State & Action>((set) => ({
  checkList: initialForm,
  setCheckList: (checked: FormValues) =>
    set((state) => ({
      ...state,
      checkList: { ...state.checkList, ...checked },
    })),
  resetCheckList: () =>
    set((state) => ({
      ...state,
      checkList: { ...state.checkList, ...initialForm },
    })),
}));
