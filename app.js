let tip, persons_count, bill;
tip = 0;
total_persons = 0;
bill = 0;
let bill_input = document.getElementById('bill-input');
let persons_input = document.getElementById("person");
let custom_tip = document.getElementById('custom');

// BILL DISPLAY VARIABLES
let show_tip = document.querySelector('.tip-value');
let show_bill = document.querySelector('.bill-value')

function tipCalculate(){
    if(bill!==0 && tip!==0 && total_persons!==0){

        let tip_amount = (bill*tip)/(100*total_persons);
        let bill_amount = (bill/total_persons)+tip_amount;
    
        show_tip.innerHTML = "$"+tip_amount.toFixed(2);
        show_bill.innerHTML = "$"+bill_amount.toFixed(2)
    }
}
// ON inputn FUNCTION FOR BILL INPUT



bill_input.addEventListener('input', ()=>{
    if(Number(bill_input.value)=== 0){
        document.querySelector(".err-zero").style.display = 'block';
    }
    else{
        document.querySelector(".err-zero").style.display = 'none';
        bill = Number(bill_input.value);
    }
    tipCalculate();
    

})
// ON inputn FUNCTION FOR CUSTOM TIP INPUT



custom_tip.addEventListener('input',()=>{
    if(Number(custom_tip.value) ===0){
        document.querySelector('.err-tip').style.display = 'block';
    }
    else{
        document.querySelector('.err-tip').style.display = 'none';
        tip = Number(custom_tip.value);
    }
    
    
    tipCalculate();
})
custom_tip.addEventListener('click', ()=>{
    tip_5.classList.remove("active");
    tip_10.classList.remove("active");
    tip_15.classList.remove("active");
    tip_25.classList.remove("active");
    tip_50.classList.remove("active");
})

// ON inputn FUNCTION FOR PEOPLE'S NUMBER INPUT



persons_input.addEventListener("input", ()=>{
    if(Number(persons_input.value) === 0){
        document.querySelector('.err-person').style.display = 'block';
    }
    else{
        document.querySelector('.err-person').style.display = 'none';
        total_persons= Number(persons_input.value);
    }
    tipCalculate();
})

// LOGIC FOR TIP BUTTONS
let tip_5, tip_10, tip_15, tip_25, tip_50;

tip_5 = document.getElementById('tip-5');

tip_5.addEventListener('click', ()=>{
    if(!tip_5.classList.contains("active")){
        tip_5.classList.add("active");
        tip_10.classList.remove("active");
        tip_15.classList.remove("active");
        tip_25.classList.remove("active");
        tip_50.classList.remove("active");
        tip=5;
        tipCalculate();
        console.log(tip);
        
    }
})

tip_10 = document.getElementById('tip-10');

tip_10.addEventListener('click', ()=>{
    if(!tip_10.classList.contains("active")){
        tip_10.classList.add("active");
        tip_5.classList.remove("active");
        tip_15.classList.remove("active");
        tip_25.classList.remove("active");
        tip_50.classList.remove("active");
        tip=10;
        tipCalculate();
        
    }
})
tip_15 = document.getElementById('tip-15');

tip_15.addEventListener('click', ()=>{
    if(!tip_15.classList.contains("active")){
        tip_15.classList.add("active");
        tip_10.classList.remove("active");
        tip_5.classList.remove("active");
        tip_25.classList.remove("active");
        tip_50.classList.remove("active");
        tip=15;
        tipCalculate();
        
    }
})
tip_25 = document.getElementById('tip-25');

tip_25.addEventListener('click', ()=>{
    if(!tip_25.classList.contains("active")){
        tip_25.classList.add("active");
        tip_10.classList.remove("active");
        tip_15.classList.remove("active");
        tip_5.classList.remove("active");
        tip_50.classList.remove("active");
        tip=25;
        tipCalculate();
        console.log(tip);
    }
})
tip_50 = document.getElementById('tip-50');

tip_50.addEventListener('click', ()=>{
    if(!tip_50.classList.contains("active")){
        tip_50.classList.add("active");
        tip_10.classList.remove("active");
        tip_15.classList.remove("active");
        tip_25.classList.remove("active");
        tip_5.classList.remove("active");
        tip=50;
        tipCalculate();
        
    }
})
// RESET BUTTON

document.getElementById('reset').addEventListener('click', ()=>{
    tip = 0;
    total_persons = 0;
    bill = 0;
    bill_input.value = '';
    persons_input.value ='';
    custom_tip.value = '';
    show_tip.innerHTML = "$00.00";
    show_bill.innerHTML = "$00.00"

})

