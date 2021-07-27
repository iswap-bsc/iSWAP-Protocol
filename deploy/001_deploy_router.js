module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  let WETH_ADDRESS = "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F";

  const factoryAddress = (await deployments.get("iSwapFactory")).address;

  await deploy("iSwapRouter", {
    from: deployer,
    args: [factoryAddress, WETH_ADDRESS],
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["iSwapRouter", "AMM"]
module.exports.dependencies = ["iSwapFactory", "Mocks"]
