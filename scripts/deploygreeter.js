const hre= require("hardhat");

async function main(){
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeting=await Greeter.deploy("Hello World");
    await greeting.deployed();
    console.log(`contract deployed to ${greeting.address}`);
}

main().catch((err)=>{
    console.log("error",err);
    process.exitCode=1;
});