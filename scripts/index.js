const Web3= require("web3");
const { startConsultation, endConsultation, releasePayment } = require("./testConsultation/start");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


const CONSULT_ID ="1";
const CONSULTATION_ID = web3.utils.keccak256(CONSULT_ID);
const DOCTOR_ACCOUNT = "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC";
const DOCTOR_PRIVATE_KEY = "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a";
const PATIENT_ACCOUNT = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
const PATIENT_PRIVATE_KEY = "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d";
const amount = web3.utils.toWei("0.0000000001", "ether");
async function main() {
    try{
        const PATIENT_BALANCE = await web3.eth.getBalance(PATIENT_ACCOUNT);
        console.log("PATIENT_BALANCE:", web3.utils.fromWei(PATIENT_BALANCE, "ether"), "ETH");
        const DOCTOR_BALANCE = await web3.eth.getBalance(DOCTOR_ACCOUNT);
        console.log("DOCTOR_BALANCE:", web3.utils.fromWei(DOCTOR_BALANCE, "ether"), "ETH");
        console.log(countZeros(1000000000000000))
    }catch(error){
        console.log("erro",error);
    }
}

function countZeros(input) {
    const str = input.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        count++;
      }
    }
    return count;
  }

main();