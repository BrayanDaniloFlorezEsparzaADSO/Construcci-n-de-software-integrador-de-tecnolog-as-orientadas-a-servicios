addEventListener("DOMContentLoaded", (e)=>{
        let form=document.querySelector('#input')
    
        form.addEventListener("submit",(e)=>{
            e.preventDefault();       
    
            let datosEntrada = Object.fromEntries(new FormData(e.target))
                
                let nciudad= datosEntrada.ciudad
                let f= Number(datosEntrada.Fahrenheit)
                let res=(f-32) * 5/9
                let tabla=document.querySelector("tbody");
                tabla.insertAdjacentHTML("beforeend",`
                    <tr>
                        <td> ${nciudad}  </td>
                        <td> ${f} </td>
                        <td> ${res} </td>
                    </tr>
                    `)
        })            
    })