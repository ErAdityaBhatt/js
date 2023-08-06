console.log('welcome to cart');

let box = Array.from(document.getElementsByClassName('main-body'))
// let main=document.getElementsByClassName('maincontent')
let main = document.querySelector('main')
let total = document.querySelector('total')
let tempval=true;
let numberofpairs = [1, 2, 3]
let boxItems = Array.from(document.querySelector('main'))
let htmltext = '';
let apidata = [{ offerType: '', number: '1', price: '160',index:'0',offerval:'40' }, { offerType: 'Most Popular', number: '2', price: '430',index:'1',offerval:'70' }, { offerType: '', number: '3', price: '568' ,index:'2',offerval:'62'}]






// box.map((id)=>{

// })
let radiovalue = '430';



function handlingbox (data){
    tempval=false;
    radiovalue=data.value;
    let classval = document.getElementById('dropdown'+radiovalue);
    if(radiovalue=='160'){
        document.getElementById('dropdown'+160).classList.add("dynamic-class");
        document.getElementById('dropdown'+430).classList.remove("dynamic-class");
        document.getElementById('dropdown'+568).classList.remove("dynamic-class");
        document.getElementById('m0').classList.add("color-change");
        document.getElementById('m1').classList.remove("color-change");
        document.getElementById('m2').classList.remove("color-change");
    }else if(radiovalue=='430'){
        document.getElementById('dropdown'+430).classList.add("dynamic-class");
        document.getElementById('dropdown'+160).classList.remove("dynamic-class");
        document.getElementById('dropdown'+568).classList.remove("dynamic-class");
        document.getElementById('m1').classList.add("color-change");
        document.getElementById('m0').classList.remove("color-change");
        document.getElementById('m2').classList.remove("color-change");
    }else if(radiovalue=='568'){
        document.getElementById('dropdown'+568).classList.add("dynamic-class");
        document.getElementById('dropdown'+430).classList.remove("dynamic-class");
        document.getElementById('dropdown'+160).classList.remove("dynamic-class");
        document.getElementById('m2').classList.add("color-change");
        document.getElementById('m1').classList.remove("color-change");
        document.getElementById('m0').classList.remove("color-change");
    }
    
total.innerHTML=radiovalue;
}



let tocallfunc=false;
function tocall(){
    apidata.forEach((n,index) => {
    
        for (let i = 1; i < 2; i++) {
            htmltext += `<div class="main-body" id='m${index}'> <span class="inside-main-body d-flex-jcnot"><div class='d-flex radio-number'>
            ${(n.offerType === 'Most Popular') && `<input value=${n.price} offer=${n.offerval} class='classradio' type="radio" name="catch" id='a${index}' onclick='handlingbox(this)'>` || `<input value=${n.price} offer=${n.offerval} class='classradio' type="radio" name="catch"  id='a${index}' onclick='handlingbox(this)'>`} <label for="catch"><div class="margin-1 width-content"> <span class="pairvalue">${n.number}</span> Pair 
            <BR><strong c>DKK ${n.price + '₹'}</strong>
          
       
        
            <div class='only-d-flex d-none' id = 'dropdown${n.price}'><div class='size-margin'>
            <p>size<p>
            <select name="" id="">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            </select></p></p></div><div>
            <p>  color <p><select name="" id="">
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="red">red</option>
            </select></p></p></div></div>
            
            </div></label></div>
            <div class="offertype"><div class='color-offer'>${n.offerType}</div> <div>${n.offerval}%</div></div></span></div>`;
            // console.log(n,'letssee');
        }
        
        
    })
    tocallfunc=true;
}



tocall();

function againcall(){
    if(tocallfunc==true){
        console.log(document.getElementsByClassName('classradio').length);
        }else{
            console.log(document.getElementsByClassName('classradio').length);
        }
}


againcall();

main.innerHTML = htmltext