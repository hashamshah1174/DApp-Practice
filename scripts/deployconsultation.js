const hre= require("hardhat");

async function main(){
    const Consultation = await hre.ethers.getContractFactory("Consultation");
    const consultaionContr=await Consultation.deploy();
    await consultaionContr.deployed();
    console.log(`contract deployed to ${consultaionContr.address}`);
}

main().catch((err)=>{
    console.log("error",err);
    process.exitCode=1;
});
