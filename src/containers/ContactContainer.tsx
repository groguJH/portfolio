"use client";

import ContactPresenter from "No/components/presenters/ContactPresenter";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const emailSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 형식을 입력해주세요." }),
  title: z.string().min(2, { message: "제목은 최소 2글자 이상이어야 합니다." }),
  message: z
    .string()
    .min(5, { message: "내용은 최소 5글자 이상 입력해주세요." }),
});

export type ContactFormData = z.infer<typeof emailSchema>;

export default function ContactContainer() {
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(emailSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      console.log("추워");
      console.log("전송 데이터:", data);
      alert("문의가 성공적으로 접수되었습니다.");
    } catch (error) {
      alert("전송 중 오류가 발생했습니다.");
    }
  }

  return (
    <ContactPresenter
      register={register}
      handleSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
    />
  );
}
