
    let formJugadores = document.getElementById("form")
    let formSolic = document.getElementById("formSolic")
    let btnVerJugadores = document.getElementById("btnVer")
    let contenedorJugadores = document.getElementById("divVer")
    let contenedorSolics = document.getElementById("contenedorSolics")
    let btnVerSolicitudes = document.getElementById("btnVerSolicitudes")
    let contenedorVerMatches = document.getElementById("divMatches")

    
    formJugadores.addEventListener("submit", async function (evento)
    {
        evento.preventDefault();
        let dataJugadores = await fetch("https://sheet.best/api/sheets/2924667e-267b-48ff-a48b-66fc8cfd72f8");
        let dataJugadoresOk = await dataJugadores.json();

        await fetch("https://sheet.best/api/sheets/2924667e-267b-48ff-a48b-66fc8cfd72f8", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id" : (dataJugadoresOk.length +1), 
                "nombreJugador": formJugadores.nombreJugador.value,
                "edadJugador": formJugadores.edadJugador.value,
                "posicionPrincipalJugador": formJugadores.posicionPrincipalJugador.value,
                "pieHabilJugador": formJugadores.pieHabilJugador.value,
                "nacionalidadJugador": formJugadores.nacionalidadJugador.value,
                "pasaporteJugador": formJugadores.pasaporteJugador.value,
                "tipoDeTransferenciaJugador": formJugadores.tipoDeTransferenciaJugador.value,
                "valorDeTransferenciaJugador": formJugadores.valorDeTransferenciaJugador.value, 
                "sueldoJugador": formJugadores.sueldoJugador.value,
                "situacionContractualJugador": formJugadores.situacionContractualJugador.value,
                "claseJugador": formJugadores.claseJugador.value,
                "agentCommentsJugador": formJugadores.agentCommentsJugador.value,
                "prioridadJugador": formJugadores.prioridadJugador.value,
                "salaryTypeJugador": formJugadores.salaryTypeJugador.value, 
                "managerContract": formJugadores.managerContract.value
            })
        });
        {Toastify({
            text: "Player loaded!",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #72fa79, #bef1c0)",
            }
          }).showToast();}
        formJugadores.reset()
        
    }) 

    formSolic.addEventListener("submit", async function (evento)
    {
        evento.preventDefault()
        let dataSolic = await fetch ("https://sheet.best/api/sheets/22958b1a-bf26-4695-bab6-4da2872eff47");
        let dataSolicOk = await dataSolic.json();

        await fetch ("https://sheet.best/api/sheets/22958b1a-bf26-4695-bab6-4da2872eff47", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "idSolic" : (dataSolicOk.length + 1),
                "nombreSolic" : formSolic.nombreSolic.value,
                "edadSolic" : formSolic.edadSolic.value,
                "posicionPrincipalSolic" : formSolic.posicionPrincipalSolic.value,
                "pieHabilSolic" : formSolic.pieHabilSolic.value, 
                "nacionalidadSolic" : formSolic.nacionalidadSolic.value,
                "pasaporteSolic" : formSolic.pasaporteSolic.value, 
                "tipoDeTransferenciaSolic" : formSolic.tipoDeTransferenciaSolic.value, 
                "valorDeTransferenciaSolic" : formSolic.valorDeTransferenciaSolic.value, 
                "sueldoSolic" : formSolic.sueldoSolic.value,
                "situacionContractualSolic" : formSolic.situacionContractualSolic.value,
                "claseJugadorSolic" : formSolic.claseJugadorSolic.value,
                "agentComentsSolic" : formSolic.agentComentsSolic.value,
                "prioridadSolic": formSolic.prioridadSolic.value,
                "salaryTypeSolic": formSolic.salaryTypeSolic.value
            })
        })
        {Toastify({
            text: "Order loaded!",
            duration: 2000,
            newWindow: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #72fa79, #bef1c0)",
            }
          }).showToast();}
        formSolic.reset()
    })

    btnVerSolicitudes.addEventListener("click", async function (evento)
    {
        evento.preventDefault()
        let dataSolic = await fetch ("https://sheet.best/api/sheets/22958b1a-bf26-4695-bab6-4da2872eff47");
        let dataSolicOk = await dataSolic.json();

        contenedorSolics.innerHTML = ""
        dataSolicOk.forEach(solicitud => {
            let div = document.createElement("div")
            div.innerHTML = `<div id="divElementoVer">
                            <h2>Name: ${solicitud.nombreSolic}</h2>
                            <h4>Age: ${solicitud.edadSolic}</h4>
                            <h4>Nationality: ${solicitud.nacionalidadSolic}</h4>
                            <h4>Main Position ${solicitud.posicionPrincipalSolic}</h4>
                            <h4>Foot: ${solicitud.pieHabilSolic}</h4>
                            <h4>Passport: ${solicitud.pasaporteSolic}</h4>
                            <h4>Transfer type: ${solicitud.tipoDeTransferenciaSolic}</h4>
                            <h4>Transfer value:${solicitud.valorDeTransferenciaSolic}</h4>
                            <h4>Salary: ${solicitud.sueldoSolic}</h4>
                            <h4>Contract Situation: ${solicitud.situacionContractualSolic}</h4>
                            <h4>Player Class: ${solicitud.claseJugadorSolic}</h4>
                            <h4>Agent Comments: ${solicitud.agentComentsSolic}</h4>
                            <h4>Order Priority: ${solicitud.prioridadSolic}</h4>  
                            <h4>Salary Type: ${solicitud.salaryTypeSolic}</h4>                         
                            <button class = "btnWatchPlayer" type="button" id="btn${solicitud.id}">Watch Matches</button>
                            <button class = "btnWatchPlayer" type="button" id="closeList${solicitud.id}">Close Orders</button>
                            </div>`

                            contenedorSolics.appendChild(div)

                            let btnVerMatchesSolic = document.getElementById(`btn${solicitud.id}`)
                            let btnCloseListSolic = document.getElementById(`closeList${solicitud.id}`)

                            btnCloseListSolic.addEventListener("click", function ()
                            {
                                contenedorSolics.innerHTML = ""
                            })

                            async function verDataSolic (numeroIDSolic)
                            {
                            
                            let data = await fetch("https://sheet.best/api/sheets/2924667e-267b-48ff-a48b-66fc8cfd72f8");
                            let dataOk = await data.json();
                            let solicOk = dataSolicOk.find((solicitud) => solicitud.id === numeroIDSolic)

                            dataOk.forEach(jugador => {
                                let divMatches = document.createElement("div")
                                let puntajeMatch = 0;
                                
                                let divTitulo = document.createElement ("div")
                                divTitulo.innerHTML = `<h3 class= "matchAnalysisTitle">Match analysis between ${jugador.nombreJugador} & ${solicOk.nombreSolic}</h3>`
                                divMatches.appendChild(divTitulo)


                                if (jugador.edadJugador === solicOk.edadSolic){
                                puntajeMatch++;
                                let nuevoDiv = document.createElement("div")
                                nuevoDiv.innerHTML = `There is a match in age: ${solicOk.edadSolic}`
                                                    divMatches.appendChild(nuevoDiv)  
                                }                    
                                

                                if (jugador.posicionPrincipalJugador === solicOk.posicionPrincipalSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Main Position: ${solicOk.posicionPrincipalSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }

                                if (jugador.pieHabilJugador === solicOk.pieHabilSolic)
                                    {
                                        puntajeMatch++;
                                        let nuevoDiv = document.createElement("div")
                                        nuevoDiv.innerHTML = `There is a match in Foot: ${solicOk.pieHabilSolic}`
                                        divMatches.appendChild(nuevoDiv)  
                                    }

                                if (jugador.nacionalidadJugador === solicOk.nacionalidadSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Nationality: ${solicOk.nacionalidadSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }

                                if (jugador.pasaporteJugador === solicOk.pasaporteSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Passport: ${solicOk.pasaporteSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }
                                
                                if (jugador.tipoDeTransferenciaJugador === solicOk.tipoDeTransferenciaSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Transfer Type: ${solicOk.tipoDeTransferenciaSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }


                                if (jugador.valorDeTransferenciaJugador === solicOk.valorDeTransferenciaSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Transfer Value: ${solicOk.valorDeTransferenciaSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }
            
                                if (jugador.sueldoJugador === solicOk.sueldoSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Salary: ${solicOk.sueldoSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }
                                


                                if (jugador.situacionContractualJugador === solicOk.situacionContractualSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Contract Situation: ${solicOk.situacionContractualSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                }
            
                                if (jugador.claseJugador === solicOk.claseJugadorSolic)
                                {
                                    puntajeMatch++;
                                    let nuevoDiv = document.createElement("div")
                                    nuevoDiv.innerHTML = `There is a match in Contract Situation: ${solicOk.claseJugadorSolic}`
                                    divMatches.appendChild(nuevoDiv)  
                                } 

                                if (puntajeMatch >5)
                                {
                                let nuevoDiv = document.createElement("div")
                                nuevoDiv.innerHTML = `<h3 class= "matchAnalysisTitle">Match Score between ${jugador.nombreJugador} & ${solicOk.nombreSolic}: ${puntajeMatch}/10</h3>
                                
                                <button class = "btnSubmit" type="button" id="closeMatch${solicOk.id}">Close Matches</button>`
                                divMatches.appendChild(nuevoDiv)

                                contenedorVerMatches.appendChild(divMatches)

                                let btnCloseMatchesSolic = document.getElementById(`closeMatch${solicOk.id}`)
                                btnCloseMatchesSolic.addEventListener("click", function ()
                                {
                                    contenedorVerMatches.innerHTML = ""
                                })
                            }

                            });

                            }
                            btnVerMatchesSolic.addEventListener("click", function ()
                            {
                                verDataSolic(solicitud.id)
                            })
        });

    })

    btnVerJugadores.addEventListener("click", async function (evento)
    {
        evento.preventDefault()
        let data = await fetch("https://sheet.best/api/sheets/2924667e-267b-48ff-a48b-66fc8cfd72f8");
        let dataOk = await data.json();
        
        contenedorJugadores.innerHTML = ""
        dataOk.forEach(jugador => {
            let div = document.createElement("div")
            div.innerHTML = `<div id="divElementoVer">
                            <h2>Name: ${jugador.nombreJugador}</h2>
                            <h3>Age: ${jugador.edadJugador}</h3>
                            <h4>Nationality: ${jugador.nacionalidadJugador}</h4>
                            <h4>Main Position: ${jugador.posicionPrincipalJugador}</h4>
                            <h4>Foot: ${jugador.pieHabilJugador}</h4>
                            <h4>Passport: ${jugador.pasaporteJugador}</h4>
                            <h4>Transfer type: ${jugador.tipoDeTransferenciaJugador}</h4>
                            <h4>Transfer value: ${jugador.valorDeTransferenciaJugador}</h4>
                            <h4>Salary: ${jugador.sueldoJugador}</h4>
                            <h4>Contract Situation: ${jugador.situacionContractualJugador}</h4>
                            <h4>Player Class: ${jugador.claseJugador}</h4>
                            <h4>Agent Comments: ${jugador.agentCommentsJugador}</h4>
                            <h4>Priority: ${jugador.prioridadJugador}</h4> 
                            <h4>Salary Type: ${jugador.salaryTypeJugador}</h4>                            
                            <h4>Manager Contract: ${jugador.managerContract}</h4>   
                            <button class = "btnWatchPlayer" type="button" id="btn${jugador.id}">Watch Matches</button>
                            <button class = "btnWatchPlayer" type="button" id="closeList${jugador.id}">Close Players</button>
                            </div>
                            `
                            contenedorJugadores.appendChild(div)

            let btnVerMatchesJugadores = document.getElementById(`btn${jugador.id}`)
            let btnClosePlayers = document.getElementById(`closeList${jugador.id}`)
            btnClosePlayers.addEventListener("click", function ()
            {
                contenedorJugadores.innerHTML = ""
            })
            
            async function verData (numeroIDjugador) {

                let dataSolic = await fetch ("https://sheet.best/api/sheets/22958b1a-bf26-4695-bab6-4da2872eff47");
                let dataSolicOk = await dataSolic.json();
                let jugadorOk = dataOk.find ((jugador) => jugador.id === numeroIDjugador)

                dataSolicOk.forEach(solicitud => {
                    let divMatches = document.createElement("div")
                    let puntajeMatch = 0;
                    let divTitulo = document.createElement ("div")
                    divTitulo.innerHTML = `<h2 class= "matchAnalysisTitle2">Match analysis between ${solicitud.nombreSolic} & ${jugadorOk.nombreJugador}</h2>`
                    divMatches.appendChild(divTitulo)

                    if (solicitud.edadSolic === jugadorOk.edadJugador){
                    puntajeMatch++;
                    let nuevoDiv = document.createElement("div")
                    nuevoDiv.innerHTML = `There is a match in age: ${solicitud.edadSolic}`
                                        divMatches.appendChild(nuevoDiv)  
                    }                    

                    if (solicitud.posicionPrincipalSolic === jugadorOk.posicionPrincipalJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Main Position: ${solicitud.posicionPrincipalSolic}`
                        divMatches.appendChild(nuevoDiv)  

                    }

                    if (solicitud.pieHabilSolic === jugadorOk.pieHabilJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Foot: ${solicitud.pieHabilSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (solicitud.nacionalidadSolic === jugadorOk.nacionalidadJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Nationality: ${solicitud.nacionalidadSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }
                    
                    if (solicitud.pasaporteSolic === jugadorOk.pasaporteJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Passport: ${solicitud.pasaporteSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }
                    
                    if (solicitud.tipoDeTransferenciaSolic === jugadorOk.tipoDeTransferenciaJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Transfer Type: ${solicitud.tipoDeTransferenciaSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (solicitud.valorDeTransferenciaSolic === jugadorOk.valorDeTransferenciaJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Transfer Value: ${solicitud.valorDeTransferenciaSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (solicitud.sueldoSolic === jugadorOk.sueldoJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Salary: ${solicitud.sueldoSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (solicitud.situacionContractualSolic === jugadorOk.situacionContractualJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Contract Situation: ${solicitud.situacionContractualSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (solicitud.claseJugadorSolic === jugadorOk.claseJugador)
                    {
                        puntajeMatch++;
                        let nuevoDiv = document.createElement("div")
                        nuevoDiv.innerHTML = `There is a match in Contract Situation: ${solicitud.claseJugadorSolic}`
                        divMatches.appendChild(nuevoDiv)  
                    }

                    if (puntajeMatch > 5)
                    {
                    let nuevoDiv = document.createElement("div")
                    nuevoDiv.innerHTML = `<h3 class= "matchAnalysisTitle">Match Score between ${solicitud.nombreSolic} & ${jugadorOk.nombreJugador}: ${puntajeMatch}/10</h3>
                    <button class = "btnSubmit" id="closeMatch${jugadorOk.id}" type="button">Close matches</button>`
                    
                    divMatches.appendChild(nuevoDiv)

                 
                    
                    contenedorVerMatches.appendChild(divMatches)

                   

                    btnCloseMatch = document.getElementById(`closeMatch${jugadorOk.id}`)
                    btnCloseMatch.addEventListener("click", function()
                    {
                        contenedorVerMatches.innerHTML = ""
                    })
                    }
                    
                    });

            }

                    btnVerMatchesJugadores.addEventListener("click", function () { 
                       
                    verData(jugador.id)
            })
        });
    }
    )

    

