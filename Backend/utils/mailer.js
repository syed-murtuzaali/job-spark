import nodemailer from "nodemailer";

// Gmail transporter using OAuth2. Nodemailer uses the refresh token to
// automatically get a fresh access token, so we don't manage tokens ourselves.

const isMailConfigured =
  process.env.EMAIL_USER &&
  process.env.CLIENT_ID &&
  process.env.CLIENT_SECRET &&
  process.env.REFRESH_TOKEN &&
  process.env.EMAIL_USER !== "placeholder" &&
  process.env.CLIENT_ID !== "placeholder" &&
  process.env.CLIENT_SECRET !== "placeholder" &&
  process.env.REFRESH_TOKEN !== "placeholder";

const createTransporter = () => {
  if (!isMailConfigured) {
    return null;
  }
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });
};

// Send the 6 digit OTP to the user during registration.
export const sendOtpEmail = async (to, otp) => {
  const transporter = createTransporter();

  if (!transporter) {
    console.warn(
      `⚠️  Email not configured — skipping OTP email to ${to}. OTP is: ${otp}`
    );
    return; // don't crash the server, just skip
  }

  const mailOptions = {
    from: `"Job Hunt" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify your email - Job Hunt",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 12px;">
        <h2 style="color: #6B3AC2; margin-bottom: 4px;">Job Hunt</h2>
        <p style="color: #555;">Use the code below to verify your email address.</p>
        <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; color: #111; text-align: center; padding: 16px 0;">
          ${otp}
        </div>
        <p style="color: #888; font-size: 13px;">This code will expire in 10 minutes. If you didn't request this, you can ignore this email.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
