let amountOfWaterLeft = document.getElementById("cup-count")
let waterInput = document.getElementById("amount-drank");
const calculateWaterDrank = () => {

        let calculation = 8 - waterInput.value
        amountOfWaterLeft.innerText = `${calculation}`;

}


