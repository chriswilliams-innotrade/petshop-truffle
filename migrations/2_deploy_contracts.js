var Adoption = aftifacts.require('./Adoption.sol')

module.exports = function(deployer) {
    deployer.deploy(Adoption);
};