
var mass  = document.getElementById('mass')
var height  = document.getElementById('height')
var txtarea = document.getElementById('txtarea')
var btn = document.getElementById('btn')
var p = document.querySelector('p')
var cls = document.getElementById('cls')
var nome = document.getElementById("name")
var img = document.querySelector('img')
var section = document.querySelector('section')
var modal = document.querySelector('.modal')
var spanmodal = document.querySelector('.spanModal')

var bar = document.querySelector('.bar')

img.addEventListener("mouseover", ()=>{
  
  section.style.transform = 'translateX(-200px)'
  section.addEventListener('mouseover', ()=>{
   
  })
})

section.addEventListener('mouseover', ()=>{
  section.style.transform = 'translateX(-200px)'
})

section.addEventListener('mouseout', function(){
  section.style.transform = 'translateX(200px)'
})

img.addEventListener("mouseout", ()=>{
  section.style.transform = 'translateX(200px)'
  
})

btn.addEventListener("click", ()=>{


    var nome = document.getElementById("name").value
    let imc =mass.value / (height.value * height.value)

  p.innerHTML = nome+ ", your   BMI is "+ imc.toFixed(2)
  txtarea.style.display = 'block'

  if(imc < 18.5){
    bar.style.backgroundColor = 'purple'
    document.getElementById("status").innerHTML = "Your Weight Status is Underweight"
  }else if(imc >= 18.5 && imc<= 24.9){
    bar.style.backgroundColor  = 'lightgreen'
    document.getElementById("status").innerHTML = "Your Weight Status is Health"
    
  }else if(imc>=25 && imc<=29.9){
    bar.style.backgroundColor  = 'orange'
    document.getElementById("status").innerHTML = "Your Weight Status is Overweight"

  }else if(imc>=30 && imc <= 39.9){
    bar.style.backgroundColor =  'yellow'
    document.getElementById("status").innerHTML = "Your Weight Status is Obese"

  } else if(imc>=40){
   bar.style.backgroundColor = 'red'
    document.getElementById("status").innerHTML = "Your Weight Status is Extremely Obese"

  }

 
  if(nome.value ==''|| mass.value=='' ||  height.value==''){
    
    modal.style.display  = 'block'
    txtarea.style.display = 'none'
  }
  

})

height.addEventListener("keypress", ()=>{
    if(height.value.length ==1){
        height.value += "." 
    }
    
})

btn.addEventListener("focus", ()=>{
    if(height.value != "" || mass.value!= "" || nome.value!=""){
        btn.style.backgroundImage =  'linear-gradient(90deg,#32556e, rgb(222, 230, 234)'
            btn.style.color = "white"
            btn.style.transition = "all .7s ease"
            modal.style.display  = 'none'
    }
      
    } 
)

cls.addEventListener("click", ()=>{
    mass.value =""
    nome.value = ""
    height.value = ""
  txtarea.style.display = 'none'
})

var x = document.querySelector('.x').addEventListener('click', function(){
  modal.style.display = 'none'
})
