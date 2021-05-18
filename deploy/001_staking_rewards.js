module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const chainId = await getChainId()

  const iswapAddress = (await deployments.get("XIS")).address;

  await deploy("StakingRewardsFactory", {
    from: deployer,
    args: [iswapAddress, 1620796441],
    log: true,
    deterministicDeployment: false,
  });
}

module.exports.tags = ["StakingRewardsFactory"];
module.exports.dependencies = ["XIS"];
