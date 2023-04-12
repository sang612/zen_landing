import { recruitmentList } from "@/data/recruitment";

export default function handler(req, res) {
  res.status(200).json(recruitmentList);
}
