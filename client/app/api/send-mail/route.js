import nodemailer from "nodemailer";

const { HOTMAIL_SERVICE, HOTMAIL_USER, HOTMAIL_PASS } = process.env;

export const POST = async (req) => {
  try {
    const body = await req.json();

    try {
      let transporter = nodemailer.createTransport({
        service: HOTMAIL_SERVICE,
        secure: false,
        auth: {
          user: HOTMAIL_USER,
          pass: HOTMAIL_PASS,
        },
      });

      const message = await transporter.sendMail({
        from: `"${body.name}" <${HOTMAIL_USER}>`,
        subject: `NEW MESSAGE - ${body.email}`,
        to: "lextechspec@gmail.com",
        text: body.message && body.message,
      });

      console.log(`${message.messageId} sent`);
      return new Response(JSON.stringify("success"), { status: 200 });
    } catch (error) {
      console.log("mail_daemon: ", error);
    }
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify("Unknown error"), { status: 500 });
  }
};
