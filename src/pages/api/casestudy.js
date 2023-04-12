import { casestudyList } from "@/data/casestudy";

export default function handler(req, res) {
  res.status(200).json(casestudyList);
}
