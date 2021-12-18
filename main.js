function mouse_over(a){
    var img = document.getElementById(a)
    img.style.width="90%";
    img.style.padding="10%";
}

function mouse_out(a){
    var img= document.getElementById(a)
    img.style.width="50%";
    img.style.padding="30%";
}

var phone_list=['4a']
var home_list=['na','nc','ncc','wa','nm']

function sort_products(product_type,cd_ib){
    if(document.getElementById(cd_ib).checked){
        for(var i=0;i< document.getElementById('grid').childElementCount;i++){
            if(product_type.indexOf(document.getElementById('grid').children[i].children[0].children[0].id)>=0){
                document.getElementById('grid').children[i].style.display="none";
            }
       }
    }
    else{
        for(var i=0;i< document.getElementById('grid').childElementCount;i++){
            if(product_type.indexOf(document.getElementById('grid').children[i].children[0].children[0].id)>=0){
                document.getElementById('grid').children[i].style.display="initial";
            }
       }
    }
}