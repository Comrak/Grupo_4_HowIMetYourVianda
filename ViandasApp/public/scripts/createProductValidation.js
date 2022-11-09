window.onload = (event) => {
    let btn=document.getElementById('submitBtn')
    btn.disabled=true
    function validateInputs(img,name,price,desc,tags,button){
        
        if(img!='' && img != undefined && 
           name!='' && name != undefined &&
           price!='' && price != undefined &&
           desc!='' && desc != undefined &&
           tags!='' && tags != undefined)
        {
            button.disabled = false
        }
    }

    let priceInput = document.getElementById('price')
    let imgInput = document.getElementById('img')
    let nameInput = document.getElementById('name')
    let descInput = document.getElementById('description')
    let tagsInput = document.getElementById('keywords')
    priceInput.addEventListener('change',function(){
        if(isNaN(priceInput.valueAsNumber)){
            Swal.fire({
                text: 'Ooops. Este campo solo acepta numeros'
            })
            priceInput.valueAsNumber = ''
        }else if(priceInput.valueAsNumber <= 0){
            Swal.fire({
                text: 'Ooops. el numero debe ser mayor a 0'
            })
            priceInput.valueAsNumber = ''
        }else{

        }
    })
    validateInputs(imgInput,nameInput,priceInput,descInput,tagsInput,btn)
};