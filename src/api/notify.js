export default async function handler(req, res) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const message = "🚀 Nouvelle visite sur ton portfolio !";

  await fetch(`https://api.telegram.org/bot8427927148:AAECs0mP9M9l4FevLWtxvaBQr5Z7MdsumyA/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: message }),
  });

  res.status(200).json({ success: true });
}