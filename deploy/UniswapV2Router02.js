module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  let wethAddress = "0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F";

  const factoryAddress = (await deployments.get("UniswapV2Factory")).address

  await deploy("UniswapV2Router02", {
    from: deployer,
    args: [factoryAddress, wethAddress],
    log: true,
    deterministicDeployment: false
  })
}

module.exports.tags = ["UniswapV2Router02", "AMM"]
module.exports.dependencies = ["UniswapV2Factory", "Mocks"]
