import SibApiV3Sdk from 'sib-api-v3-sdk'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Only POST requests allowed' })
  }

  const { name, email, subject, message } = req.body

  // Normalize visitor email
  const visitorEmail = String(email || '').trim().toLowerCase()

  const client = SibApiV3Sdk.ApiClient.instance
  client.authentications['api-key'].apiKey = process.env.BREVO_API_KEY
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

  const payload = new SibApiV3Sdk.SendSmtpEmail({
    subject: subject || 'New Contact Form Submission',
    htmlContent: `
      <h3>New message from your website</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Visitor Email:</strong> <a href="mailto:${visitorEmail}">${visitorEmail}</a></p>
      <p><strong>Subject:</strong> ${subject || '(none)'}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
    `,
    sender: {
      email: process.env.BREVO_SENDER,  // must be verified in Brevo
      name: 'Client',                   // generic name shown in inbox
    },
    to: [
      {
        email: process.env.BREVO_RECIPIENT,  // your personal address
        name: 'Tristan Hancock'
      }
    ],
    replyTo: {
      email: visitorEmail,  // the visitor’s email
      name: "Visitor"                 // the visitor’s name
    },
  })

  try {
    await apiInstance.sendTransacEmail(payload)
    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Brevo error:', err)
    return res.status(500).json({ error: 'Failed to send email.' })
  }
}
