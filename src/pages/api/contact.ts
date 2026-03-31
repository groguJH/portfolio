import { NextApiRequest, NextApiResponse } from "next";
import { contractTotalRequest } from "../../service/contactService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "잘못된 메소드 접근입니다." });
  }
  try {
    const { email, title, message } = req.body;
    await contractTotalRequest({ email, title, message });
    return res.status(200).json({ success: true, message: "전송 성공" });
  } catch (error) {
    console.error("Contact API 에러, 확인필요:", error);
    return res.status(500).json({ success: false, message: "서버 오류 발생" });
  }
}
