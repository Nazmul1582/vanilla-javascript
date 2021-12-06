const country = document.querySelector("#selectCou");
const state = document.querySelector("#divState");
const district = document.querySelector("#dist");

const division1 = document.querySelector(".division1");
const division2 = document.querySelector(".division2");
const allStates  = document.querySelector(".states");

const dkDist  = document.querySelector(".dkDist");
const ctgDist = document.querySelector(".ctgDist");
const rajDist = document.querySelector(".rajDist");

const islDist = document.querySelector(".IslDist");
const korDist = document.querySelector(".korDist");
const lahDist = document.querySelector(".lahDist");

const kolDist = document.querySelector(".kolDist");
const deDist = document.querySelector(".deDist");
const cheDist = document.querySelector(".cheDist");



country.addEventListener("change",function(){

    var data = country.value;

    state.style.display="block";
    district.style.display="none"
   

    if(data === ""){
        division1.style.display="none";
        division2.style.display="none";
        allStates.style.display="none";

        state.style.display="none"
        district.style.display="none";

        dkDist.style.display="none"
        ctgDist.style.display="none"
        rajDist.style.display="none"

        islDist.style.display="none"
        korDist.style.display="none"
        lahDist.style.display="none"

        kolDist.style.display="none"
        deDist.style.display="none"
        cheDist.style.display="none"
        
    }else if(data === "Bangladesh"){
        division1.style.display="block";
        division2.style.display="none";
        allStates.style.display="none";
    
        islDist.style.display="none"
        korDist.style.display="none"
        lahDist.style.display="none"
        
        kolDist.style.display="none"
        deDist.style.display="none"
        cheDist.style.display="none"
    }
    else if( data === "Pakistan"){
        division1.style.display="none";
        division2.style.display="block";
        allStates.style.display="none";

        dkDist.style.display="none"
        ctgDist.style.display="none"
        rajDist.style.display="none"
        
        kolDist.style.display="none"
        deDist.style.display="none"
        cheDist.style.display="none"

       

    }else if( data === "India"){
        division1.style.display="none";
        division2.style.display="none";
        allStates.style.display="block";

        dkDist.style.display="none"
        ctgDist.style.display="none"
        rajDist.style.display="none"

        islDist.style.display="none"
        korDist.style.display="none"
        lahDist.style.display="none"
    }


                //  Districts of Bangladesh

    document.querySelector("#bdDiv").addEventListener("change",function(){

        var divisionData = document.querySelector("#bdDiv").value;
        district.style.display="block"

        if( divisionData === ""){
            dkDist.style.display="none"
            ctgDist.style.display="none"
            rajDist.style.display="none"
            district.style.display="none"
            
        }else if( divisionData === "dk"){
            dkDist.style.display="block"
            ctgDist.style.display="none"
            rajDist.style.display="none"
        }else if( divisionData === "ctg"){
            dkDist.style.display="none"
            ctgDist.style.display="block"
            rajDist.style.display="none"
        }else if( divisionData === "raj"){
            dkDist.style.display="none"
            ctgDist.style.display="none"
            rajDist.style.display="block"
        }
    })


                // Districts of Pakistan  

    document.querySelector("#pakDiv").addEventListener("change",function(){

        var divisionData = document.querySelector("#pakDiv").value;
        district.style.display="block";


        if( divisionData === ""){
            islDist.style.display="none"
            korDist.style.display="none"
            lahDist.style.display="none"
            district.style.display="none"
            
        }else if( divisionData === "Isl"){
            islDist.style.display="block"
            korDist.style.display="none"
            lahDist.style.display="none"
        }else if( divisionData === "kor"){
            islDist.style.display="none"
            korDist.style.display="block"
            lahDist.style.display="none"
        }else if( divisionData === "lah"){
            islDist.style.display="none"
            korDist.style.display="none"
            lahDist.style.display="block"
        }
    })

                // Districts of India  

    document.querySelector("#inStates").addEventListener("change",function(){

        var divisionData = document.querySelector("#inStates").value;
        district.style.display="block"

        if( divisionData === ""){
            kolDist.style.display="none"
            deDist.style.display="none"
            cheDist.style.display="none"
            district.style.display="none"
            
        }else if( divisionData === "kol"){
            kolDist.style.display="block"
            deDist.style.display="none"
            cheDist.style.display="none"
        }else if( divisionData === "de"){
            kolDist.style.display="none"
            deDist.style.display="block"
            cheDist.style.display="none"
        }else if( divisionData === "che"){
            kolDist.style.display="none"
            deDist.style.display="none"
            cheDist.style.display="block"
        }
    })
})