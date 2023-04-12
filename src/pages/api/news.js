import { newsList } from "@/data/news";

export default function handler(req, res) {
  res.status(200).json(newsList);
}
