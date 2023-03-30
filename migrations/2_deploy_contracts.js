const blockProof = artifacts.require("blockProof");

module.exports = function(deployer) {
    deployer.deploy(blockProof);
}