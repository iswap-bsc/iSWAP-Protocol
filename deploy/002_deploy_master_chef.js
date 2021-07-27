const { getNamedAccounts, ethers } = require("hardhat");
const { contractDeploy } = require("../utils")

module.exports = async function (hre) {
  const { deployer } = await getNamedAccounts()
  const xis = await ethers.getContract("XIS")
  let blockNumber = await ethers.provider.getBlockNumber()

  await contractDeploy(hre, {
    contractName: "iSwapStaking",
    args: [xis.address, deployer, ethers.utils.parseEther("10"), blockNumber + 100, blockNumber + 200],
  })
}

module.exports.tags = ["iSwapStaking"]
module.exports.dependencies = ["XIS"]
