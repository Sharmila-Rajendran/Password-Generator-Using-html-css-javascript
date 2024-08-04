const num1 = '0123456789';
const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smalls = 'abcdefghijklmnopqrstuvwxyz';
const spcl = '!@#$%^&*()_+{}|:"<>?[]';

function getRandomCharacter(chars) {
    return chars.charAt(Math.floor(Math.random() * chars.length));
}

function Generate() {
    const len = document.getElementById("length").value;
    const num = document.getElementById("number").checked;
    const cap = document.getElementById("captial").checked; 
    const small = document.getElementById("small").checked;
    const symbol = document.getElementById("symbol").checked;

    let chars = '';
    if (num) chars += num1;
    if (cap) chars += caps;
    if (small) chars += smalls;
    if (symbol) chars += spcl;

    if (chars === '') {
        alert('Please select at least one option');
        return false;
    }

    const sizelen = parseInt(len, 10); 
    if (isNaN(sizelen) || sizelen < 8){ 
        alert('Password length should be at least 8 characters');
        return false;
    }

    let pswd = '';
    for (let i = 0; i < sizelen; i++){
        pswd += getRandomCharacter(chars);
    }

    document.querySelector('#pswd-gen').innerHTML = pswd;
}

function CopyPswd() {
    const passwordcopy = document.getElementById('pswd-gen').innerHTML;
    if (passwordcopy) {
        navigator.clipboard.writeText(passwordcopy).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        alert('There is no password!! Oops Sorry :((');
    }
}

document.getElementById('copy').addEventListener('click', CopyPswd);