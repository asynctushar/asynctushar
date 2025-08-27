import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json();

        // destructure what we know we may get
        const {
            name,
            email,
            phone,
            subject,
            message,
            text, // plain text fallback
        } = body;

        // dynamic validation — at least subject & text/message must exist
        if (!subject || (!message && !text) || !email || !name) {
            return new Response(
                JSON.stringify({ error: "Subject, Email, Name and Message are required" }),
                { status: 400 }
            );
        }

        // nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // build text & html dynamically
        const plainText = text
            ? text
            : `
New message received:

Name: ${name || "N/A"}
Email: ${email}
Phone: ${phone || "N/A"}
Message: ${message || "N/A"}
    `;

        const htmlContent = `
      <h2>New Message Submission</h2>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message || text || "N/A"}</p>
    `;

        // mail options
        const mailOptions = {
            from: email ? `"${name || "Unknown"}" <${email}>` : process.env.GMAIL_USER,
            to: process.env.RECEIVING_GMAIL,
            subject: subject,
            text: plainText,
            html: htmlContent,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({ success: "Message sent successfully" }),
            { status: 200 }
        );
    } catch (err) {
        console.error("Error sending email:", err);
        return new Response(
            JSON.stringify({ error: "Failed to send message" }),
            { status: 500 }
        );
    }
}
