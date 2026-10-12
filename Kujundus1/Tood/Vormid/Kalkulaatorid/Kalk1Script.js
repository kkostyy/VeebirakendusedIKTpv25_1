function teisendamine(){
    let vastus = document.getElementById("vastus");
    let valik = document.getElementsByName("valik");
    let arv = document.getElementById("arv");
    let vastusepilt = document.getElementById("vastusepilt");

    const toll = 39.37;
    const meeter = 0.0254;

    let leitud = false;


    for(let i=0; i<valik.length; i++){
        if(valik[i].checked){
            leitud = true;
            if(valik[i].value == "meeter"){
                vastus.innerHTML = arv.value + ' meetri = ' +
                    (arv.value * toll) + ' tolli';
                vastusepilt.src = "https://img.magnific.com/premium-vector/measuring-tape-icon-set-tailor-meter-length-vector-symbol-black-filled-outlined-style-precision-measure-sign_268104-11679.jpg?semt=ais_hybrid&w=740&q=80";
            } else if(valik[i].value == "tolli"){
                vastus.innerHTML = arv.value + ' tolli = ' +
                    (arv.value * meeter) + ' meetri';
                vastusepilt.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsYZX062PUugFiAFUVxPqfCxqt7nbDHJbiTZ8vIks1Q&s=10"
            }
        }
    }
    if(!leitud){
        vastus.innerHTML = "Vali ühiku - kas meeter või toll";
    }
}