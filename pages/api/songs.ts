import { songs } from "@data/songs";
export default function handler(req, res) {
  if (req.method === "GET") res.status(200).json(songs);
}
