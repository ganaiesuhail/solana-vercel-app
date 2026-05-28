const solanaWeb3 = require("@solana/web3.js");

export default async function handler(req, res) {
  const connection = new solanaWeb3.Connection(
    solanaWeb3.clusterApiUrl("devnet")
  );

  const version = await connection.getVersion();

  res.status(200).json(version);
}
