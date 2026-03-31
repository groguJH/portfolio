import nodemailer from "nodemailer";
import axios, { Axios } from "axios";

interface MailPayload {
  email: string;
  title: string;
  message: string;
}

/**
 * @param payload 이메일 요청함수
 * @param {string} email
 * @param {string} title
 * @param {string} message
 * @description : API라우트에서 요청한 데이터를 받아 nodemailer는 전송하고
 * slack webhook의 주소로 요청합니다.
 */

async function sendEMail(payload: MailPayload) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: payload.email,
    to: process.env.EMAIL_USER,
    subject: `[구직알람] ${payload.title}`,
    text: `보낸 사람: ${payload.email}\n 내용: ${payload.message}`,
  };

  await transporter.sendMail(mailOptions);
}

async function sendSlackNotification(payload: MailPayload) {
  const slackUrl = process.env.SLACK_WEBHOOK_URL as string;
  const message = {
    attachments: [
      {
        color: "#c745ff",
        title: "📩포트폴리오 사이트 새 문의글",
        fields: [
          { title: "작성자 이메일", value: payload.email, short: false },
          { title: "제목", value: payload.title, short: false },
          { title: "내용", value: payload.message, short: false },
        ],
        footer: "Nodemailer & Slack Service",
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };
  await axios.post(slackUrl, message);
}

export async function contractTotalRequest(payload: MailPayload) {
  const mailTask = await sendEMail(payload);
  const slackTask = await sendSlackNotification(payload);

  await Promise.all([mailTask, slackTask]);
}
