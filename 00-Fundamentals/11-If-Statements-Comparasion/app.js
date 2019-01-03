const id = 99.9;
console.clear();

// Equal to
if(id == 100){
    console.log('CORRECT');
}else{
    console.log('Incorrect');
}

 // Not Equal
 if(id != 100){
     console.log('CORRECT');
 }else{
     console.log('INCORRECT');
 }

 // Equal to VALUE & TYPE
if(id === 100){
    console.log('CORRECT');
}else{
    console.log('Incorrect');
}

 // Not Equal to VALUE & TYPE
 if(id !== 100){
     console.log('CORRECT');
 }else{
     console.log('INCORRECT');
 }

 // TERNARIA
 (id >= 100 ) ? console.log('É maior ou igual a 100') : console.log('É menor que 100');