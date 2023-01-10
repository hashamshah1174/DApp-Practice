Introduction
This repository contains a basic smart contract and accompanying scripts for deploying and interacting with the contract on a local Ethereum network.

Setup
To get started, make sure you have the following dependencies installed:

Yarn (or alternatively, you can use npm to install the required packages)
To install the necessary packages, run the following command:

yarn
Compiling the ABI
To do so, run the following command:
npx hardhat compile

Deploying to a Local Network
To deploy and test our smart contract on a local Ethereum network, we will use Hardhat, a development tool for Ethereum smart contracts.
First, start the local network by running the following command:
npx hardhat node
Once the local network is running, you can deploy the contract by running the following command in a new terminal window:

npx hardhat run scripts/greeterdeploy.js
This will deploy the contract to the local network, and you can then use the provided scripts to interact with the contract.
