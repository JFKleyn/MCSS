export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const {
      fullName,
      email,
      phone,
      message,
      machineId,
      machineTitle,
    } = await request.json();

    if (!env.RESEND_API_KEY || !env.FROM_EMAIL || !env.TO_EMAIL) {
      return Response.json(
        { error: "Email environment variables are missing." },
        { status: 500 }
      );
    }

    const isMachineEnquiry = Boolean(machineId && machineTitle);

    const subject = isMachineEnquiry
      ? `Machine Enquiry: ${machineTitle}`
      : `New MCSS website enquiry from ${fullName}`;

    const machineDetails = isMachineEnquiry
      ? `
          <hr>

          <h3>Machine Enquiry Details</h3>

          <p><strong>Machine:</strong> ${machineTitle}</p>
        `
      : "";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL],
        reply_to: email,
        subject,
        html: `
          <h2>
            ${
              isMachineEnquiry
                ? "New MCSS Machine Enquiry"
                : "New MCSS Website Enquiry"
            }
          </h2>

          ${machineDetails}

          <hr>

          <h3>Customer Details</h3>

          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.json();

      return Response.json(
        { error: "Failed to send email.", details: error },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Sent successfully.",
    });
  } catch {
    return Response.json(
      { error: "Something went wrong while sending." },
      { status: 500 }
    );
  }
}