import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "All fields are required" }),
                { status: 400 }
            );
        }

        // create transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        // mail options
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.RECEIVING_GMAIL, // your receiving mail
            subject: `New Contact Form Message from ${name}`,
            text: `
        You received a new message from your portfolio site:

        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h2>New Contact Form Submission</h2>
        <p> You received a new message from your portfolio site:</p>   
        <br/> <br/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
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
