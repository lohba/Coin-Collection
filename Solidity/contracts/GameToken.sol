pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract GameToken is ERC20 {
    constructor(string memory _name, string memory _symbol) 
    ERC20(_name, _symbol) 
    public
    {}

    function mint(address to, uint256 value) public returns (bool){
        _mint(to, value);
        return true;
    }
}
