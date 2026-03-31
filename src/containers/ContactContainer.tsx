"use client";

import ContactPresenter from "No/components/presenters/ContactPresenter";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { message } from "antd";

const emailSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 형식을 입력해주세요." }),
  title: z.string().min(2, { message: "제목은 최소 2글자 이상이어야 합니다." }),
  message: z
    .string()
    .min(5, { message: "내용은 최소 5글자 이상 입력해주세요." }),
});

export type ContactFormData = z.infer<typeof emailSchema>;

export default function ContactContainer() {
  const [messageApi, contextHolder] = message.useMessage();

  const {
    formState: { isSubmitting, errors },
    register,
    handleSubmit,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(emailSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await axios.post("/api/contact", data);
      if (response.status === 200) {
        console.log(response.data);
        messageApi.success("메일 전송했습니다.");
        reset();
      }
    } catch (error) {
      console.error("전송 에러:", error);
      messageApi.error("서버 오류로 인해 전송 실패했습니다.");
    }
  }

  return (
    <>
      {contextHolder}
      <ContactPresenter
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        isSubmitting={isSubmitting}
        errors={errors}
      />
    </>
  );
}
