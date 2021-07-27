module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const res = await deploy("XIS", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
}

module.exports.tags = ["XIS", "Governance"];
module.exports.dependencies = [];
