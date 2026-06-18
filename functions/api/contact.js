export async function onRequestPost(context) {
  const { request, env } = context;

  const formData = await request.json();

  const { fullName, email, phone, message } = formData;

  if (!env.RESEND_API_KEY) {
    return Response.json(
      { error: "Resend API key is not configured yet." },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
    message: "Contact function is working. Resend will be added next.",
    receivedData: {
      fullName,
      email,
      phone,
      message,
    },
  });
}