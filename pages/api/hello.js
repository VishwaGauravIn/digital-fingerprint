// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default function handler(req, res) {
  axios.get("http://www.geoplugin.net/json.gp/").then((r) => {
    res.status(200).json(r.data);
  });
}
