function add()
{
    const number1 = prompt('Enter number one:');
    const number2 = prompt('Enter number two:');
    const addition = Number(number1) + Number(number2);
    alert(`${number1} + ${number2} = ${addition}`);
};
function modulus()
{
    const number1 = prompt('Enter number one:');
    const number2 = prompt('Enter number two:');
    const remainder = Number(number1) % Number(number2);
    alert(`${number1} % ${number2} = ${remainder}`);
}