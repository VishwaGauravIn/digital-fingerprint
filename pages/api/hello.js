// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function getStaticProps(req, res) {
  let ip = req.query.ip;
  axios.get(`http://ip-api.com/json/${ip}`).then((r) => {
    res.status(200).json(r.data);
  });
}
