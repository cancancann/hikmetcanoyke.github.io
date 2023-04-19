const darkColorButton=document.getElementById("ligth-color")

const toggleInput=document.getElementById("switch")




toggleInput?.addEventListener("click",(e)=>{
    if(e.target.checked===true){
        document.documentElement.style.setProperty('--color1', '#bae8e8');
        document.documentElement.style.setProperty('--color2', '#e3f6f5');
        document.documentElement.style.setProperty('--font-color', 'black');
        document.documentElement.style.setProperty('--exp-card-bg-color', '#e3f6f5');
        document.documentElement.style.setProperty('--navbar-bg-color', '#bae8e8');
        document.documentElement.style.setProperty('--bg-color', '#aae8e8');
    }else{
        document.documentElement.style.setProperty('--color1', '#23252f');
        document.documentElement.style.setProperty('--color2', '#272935');
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--exp-card-bg-color', '#343a40');
        document.documentElement.style.setProperty('--navbar-bg-color', '#282a36');
        document.documentElement.style.setProperty('--bg-color', '#3a3b46');
    }
})


