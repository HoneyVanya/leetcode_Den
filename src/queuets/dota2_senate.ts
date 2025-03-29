// 649. Dota2 senate

function predictPartyVictory(senate: string): string {
    let queueR = []
    let queueD = []
    let countR = 0
    let countD = 0
    let map = new Map()

    for (let i = 0; i < senate.length; i++) {
        map.set(i, senate[i])
    }
    console.log(map)

    for (let i = 0; i < senate.length; i++) {
        console.log(senate[i] + ' senate[i]')
        if (senate[i] === "R" && countD <= 0) {
            countR++
            queueR.push(i)
        } else if (senate[i] === "R" && countD > 0){
            countD--
            map.delete(i)
        }
        console.log(countR, queueR + ' countR, queueR')
        if (senate[i] === "D" && countR <= 0) {
            countD++
            queueD.push(i)
        } else if (senate[i] === "D" && countR > 0) {
            console.log("HELLOOO")
            countR--
            map.delete(i)
        }
        console.log(countD, queueD + ' countD, queueD')
        console.log(queueR, queueD + ' queueR, queueD')
    }
    if (countR !== 0){
        console.log(queueD)
        for (let o = countR; o !== 0; o--){
            let d = queueD.shift()
            map.delete(d)
        }
        console.log(map + ' after countR')
        console.log(queueD)
    }
    if (countD !== 0) {
        for (let o = countD; o !== 0; o--){
            let r = queueR.shift()
            map.delete(r)
        }
        console.log(map + ' after countD')
    }

    if (queueR.length === 0) return "Dire"
    else if (queueD.length === 0) return "Radiant"
    else {
        console.log(map, " HELLOOAOIGGEGUEGOHGOH")
        let newQueue = [...map.values()]
        console.log(newQueue + " HELLLLLOOOOOOOOO NEWQUEUE")
        let newSenate = newQueue.join('')
        console.log(newSenate + " HI NEW SENATE")
        
        return predictPartyVictory(newSenate)
    }
};


// let senate = "DDRRR"

// console.log(predictPartyVictory(senate))
