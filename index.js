const example_div = document.querySelector('.example_div');
const next_step = document.querySelector('.next_step');
const personal_div = document.querySelector('.personal_div');
const supreme = document.querySelector('.supreme');
const personal_div1 = document.querySelector('.personal_div1');
const supreme1 = document.querySelector('.supreme1');
const go_back = document.querySelector('.go_back');
const next_step_one  = document.querySelector('.next_step_one');
const choose = document.querySelector('.choose');
const choose_span = document.querySelector('.choose_span');
const page3_go_back = document.querySelector('.page3_go_back');
const page3_next_step = document.querySelector('.page3_next_step');


const plan_one = document.querySelector('.plan_one');
const plan_two = document.querySelector('.plan_two');
const plan_three = document.querySelector('.plan_three');
const supreme2 = document.querySelector('.supreme2');

const option_one = document.querySelector('.option_one');
const option_two = document.querySelector('.option_two');
const option_three = document.querySelector('.option_three');
const tick_one = document.querySelector('.tick_one');
const tick_two = document.querySelector('.tick_two');
const tick_three = document.querySelector('.tick_three');

next_step.addEventListener('click',()=>{
    supreme.style.display = 'none';
    supreme1.style.display = 'block';
})


go_back.addEventListener('click',()=>{
    supreme1.style.display = 'none';
    supreme.style.display = 'block';
    console.log('hello');

})

choose.addEventListener('click',()=>{
    choose_span.classList.toggle('active');
    console.log('hello');
})

plan_one.addEventListener('click',()=>{
    plan_one.classList.toggle('active');
})

plan_two.addEventListener('click',()=>{
    plan_two.classList.toggle('active');
})

plan_three.addEventListener('click',()=>{
    plan_three.classList.toggle('active');
})

next_step_one.addEventListener('click',()=>{
    supreme2.style.display = 'block';
    supreme1.style.display = 'none';
})

page3_go_back.addEventListener('click',()=>{
    supreme2.style.display = 'none';
    supreme1.style.display = 'block';
})

option_one.addEventListener('click',()=>{
    option_one.classList.toggle('active');
})

option_two.addEventListener('click',()=>{
    option_two.classList.toggle('active');
})

option_three.addEventListener('click',()=>{
    option_three.classList.toggle('active');
})