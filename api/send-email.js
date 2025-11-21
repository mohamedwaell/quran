import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    parentName,
    childName,
    email,
    gender,
    age,
    programInterest,
    classType,
    preferredDays,
    message,
  } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: process.env.BREVO_PORT,
    secure: false,
    auth: {
      user: process.env.BREVO_USER,
      pass: process.env.BREVO_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Enrollment Form" <${process.env.BREVO_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Enrollment Inquiry from ${parentName}`,
      text: `
Parent Name: ${parentName}
Child Name: ${childName}
Email: ${email}
Gender: ${gender}
Age: ${age}
Program Interests: ${programInterest.join(", ")}
Class Type: ${classType}
Preferred Days: ${preferredDays}

Message:
${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("EMAIL ERROR:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
