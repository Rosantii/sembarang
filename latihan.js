var nilaiawal = 0;
while(nilaiawal < 1){
    alert("hello js ke-" + nilaiawal+1);
    nilaiawal++;
}

nilaiawal = 0;
while(nilaiawal < 1) {
    var input = prompt("Masukkan sesuatu:  (nilaiawal ke-" + (nilaiawal + 1) + ")");
    alert("Anda masukkan: " + input);
    nilaiawal++;
}

nilaiawal = 0;
while (nilaiawal < 1){
    var confirmation = confirm("Lanjutkan nilaiawal ke- " + (nilaiawal + 1) + "?");
    if (confirmation) {
        alert("nilaiawal ke-" + (nilaiawal + 1) + "dilanjutkan.");

    }
}

var nilaiawal=1;
while(nilaiawal <=16) {
    console.log("Hello js" + nilaiawal)
    nilaiawal++;
}
