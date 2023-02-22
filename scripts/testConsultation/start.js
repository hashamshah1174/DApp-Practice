const ethers = require('ethers');
const consultationArtifact = require('../../src/artifacts/contracts/Consultation.sol/Consultation.json');
const consultationABI = consultationArtifact.abi;

async function getConsultationContract() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const signer = provider.getSigner(0);
    const consultationContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // replace with your contract address
    const consultationContract = new ethers.Contract(consultationContractAddress, consultationABI, signer);
    return consultationContract;
  }
  

async function startConsultation(consultationId, patient,doctor, amount) {
  const consultationContract = await getConsultationContract();
  const tx = await consultationContract.startConsultation(consultationId, patient,doctor, { value: amount });
  await tx.wait();
  console.log(`Consultation ${consultationId} started with patient ${patient} and amount ${amount}`);
}

async function endConsultation(consultationId) {
  const consultationContract = await getConsultationContract();
  const tx = await consultationContract.endConsultation(consultationId);
  await tx.wait();
  console.log(`Consultation ${consultationId} ended`);
}

async function requestPayment(consultationId) {
  const consultationContract = await getConsultationContract();
  const tx = await consultationContract.requestPayment(consultationId);
  await tx.wait();
  console.log(`Payment requested for consultation ${consultationId}`);
}

async function releasePayment(consultationId,doctor) {
  const consultationContract = await getConsultationContract();
  const tx = await consultationContract.releasePayment(consultationId);
  await tx.wait();
  console.log(`Payment released for consultation ${consultationId} to doctor ${doctor}`);
}


module.exports = {
  startConsultation,
  endConsultation,
  requestPayment,
  releasePayment,
  getConsultationContract,
};



