const getCountValue = ()=>{
    let count1 = 0;
    let count2 = 0;
    
    
    return (id, action)=>{
        if (action === 'inc'){
            if (id === 'count1'){
                return  ++count1;
                }
            if (id === 'count2'){
                return ++count2;
            }
        }
        else if (action === 'dec'){
            if (id === 'count1'){
                return  --count1;
                }
            if (id === 'count2'){
                return --count2;
            }
        }
        else if (action === 'current'){
            return id === 'count1' ? count1 : count2;
        }
    }
}

const calculator = getCountValue();

const increment = (id) => {
    const value = calculator(id, 'inc');
    document.getElementById(id).innerHTML = value;
    toggleDisplaySection();
}

const decrement = (id) => {
    const value = calculator(id, 'dec');
    document.getElementById(id).innerHTML = value;
    toggleDisplaySection();
}



const display = (id) => {
    const value = calculator("count1", 'current');
    const value1 = calculator("count2", 'current');
    document.getElementById("first-number").innerHTML = value;
    document.getElementById("second-number").innerHTML = value1;
    document.getElementById(id).innerHTML = value + value1;
    document.getElementById('result-show').style.display = 'block';
}

const isNotZero = (num) =>{
    if(num === 0){
        return false;
    }else{
        return true;
    }
}

const toggleDisplaySection = () => {
    const valueStore = calculator("count1", 'current');
    const valueStore2 = calculator("count2", 'current');
    if(isNotZero(valueStore) || isNotZero(valueStore2)){
        document.getElementById("button-show").style.display = "flex";
        document.getElementById("result-show").style.display = "none";
    }else{
        document.getElementById("button-show").style.display = "none";
        document.getElementById("result-show").style.display = "none";
    }
    document.getElementById('result-show').style.display = 'none';
}


toggleDisplaySection();







