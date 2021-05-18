// Defining bytecode and abi from original contract on mainnet to ensure bytecode matches and it produces the same pair code hash
module.exports = async function ({ ethers, getNamedAccounts, deployments, getChainId }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  await deploy("UniswapV2Factory", {
    from: deployer,
    args: [deployer],
    log: true,
    deterministicDeployment: false,
  });
}

module.exports.tags = ["UniswapV2Factory", "AMM"]
