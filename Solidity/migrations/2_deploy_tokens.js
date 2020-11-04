const Token = artifacts.require("./GameToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Token, "GameToken", "GT");
};
//(await GameToken.at("0x9Cec2Ad0D82Ad2206Ca2A9dbffC32d6Dc07e8c81")).mint("0xcb0ab9c41ced67919b0f16db2346b18ebb7da584",10000)

//(await GameToken.at("0x9Cec2Ad0D82Ad2206Ca2A9dbffC32d6Dc07e8c81")).balanceOf.call("0xcb0ab9c41ced67919b0f16db2346b18ebb7da584")