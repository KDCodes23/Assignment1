function add()
{
    //Requesting numbers from the user
    const number1 = prompt('Enter number one:');
    const number2 = prompt('Enter number two:');
    //Using Addition to add the given numbers
    const addition = Number(number1) + Number(number2);
    //Posting the Calculated result
    alert(`${number1} + ${number2} = ${addition}`);
};
function modulus()
{
    //Requesting numbers from the user
    const number1 = prompt('Enter number one:');
    const number2 = prompt('Enter number two:');
    //Using Addition to add the given numbers
    const remainder = Number(number1) % Number(number2);
    //Posting the Calculated result
    alert(`${number1} % ${number2} = ${remainder}`);
}