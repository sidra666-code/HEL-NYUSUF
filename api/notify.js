export default async function handler(req, res) {
  const token = process.env.8734826494:AAFf0mzEulRkh3r26iNeaOJIe215bSGSjzA;
  const chat_id = process.env.7279838512;

  const message = "🚨 Siteye biri girdi!";

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text: message })
  });

  res.status(200).json({ ok: true });
}
