import jsonfile from "jsonfile"

const titles = ["Offspring", "Taken", "Django", "Diamonds", "Symmetry", "Tennen", "Death", "SpiderMan", "Love", "Songoku"]
const descriptions = ["Description 1", "Description 2", "Description 3", "Description 4", "Description 5", "Description 6", "Description 7", "Description 8", "Description 9", "Description 10"]
const prices = [5000, 4500, 3000 ,8200, 4000, 2500, 6000, 5500, 6500, 7000]
const genders = ["Homme", "Femme"]
const types = ["Haut", "Bas"]
const articlesTop = ["T-Shirt", "Pull", "Chemise", "Veste", "Monteau"]
const articlesBottomMal = ["Jeans", "Pantalon Toile", "Pantalon Classique", "Short"]
const articlesBottomFemale = ["Jeans", "Pantalon Toile", "Pantalon Classique", "Short", "Jupe"]
const sizes = ["S", "M", "L", "XL", "XXL"]
const colors = [{title: "Noir", code: "#000000"}, {title: "Blanc", code: "#FFFFFF"}, {title: "Rouge", code: "#FF0000"}, {title: "Bleu", code: "#0000FF"}, {title: "Gris", code: "#808080"}]


function generateSizesAndColors () {
    let sizesAndColors = []
    let sizeAndColors = {}
    for(let j=1; j <= sizes.length; j++){
        const size = sizes[Math.floor(Math.random()*sizes.length)]
        let pass = false
        sizesAndColors.forEach(s => {
            if(s.title === size) pass = true
        })
        if(pass === false){
            // console.log(size)
            sizeAndColors["title"] = size
            let colorsPrime = []
            for(let k=1;k<=colors.length;k++){
                const color = colors[Math.floor(Math.random()*colors.length)]
                let passColor = false
                colorsPrime.forEach(c => {
                    if(c.title === color.title) passColor = true
                })
                if(!passColor){
                    color["number"] = Math.floor(Math.random()*20)
                    colorsPrime.push({...color})
                }
            }
            sizeAndColors["colors"] = colorsPrime
            sizesAndColors.push({...sizeAndColors})
        }
    }
    return sizesAndColors
}

function generateDatas() {
    let datas = []
    const numberData = 10
    for(let i=1;i<=numberData;i++){
        const data = {
            title: titles[Math.floor(Math.random()*titles.length)],
            description: descriptions[Math.floor(Math.random()*descriptions.length)],
            price: prices[Math.floor(Math.random()*prices.length)],
            gender: genders[Math.floor(Math.random()*genders.length)],
            type: types[Math.floor(Math.random()*types.length)],
        }
        if(data.type === "Haut"){
            data["article"] = data["article"] = articlesTop[Math.floor(Math.random()*articlesTop.length)]
        }else{
            if(data.gender === "Homme"){
                data["article"] = articlesBottomMal[Math.floor(Math.random()*articlesBottomMal.length)]
            }else{
                data["article"] = articlesBottomFemale[Math.floor(Math.random()*articlesBottomFemale.length)]
            }
        }
        data["sizesAndColors"] = generateSizesAndColors()
        datas.push(data)
    }
    return datas
}

const file = './data.json'
jsonfile.writeFile(file, generateDatas(), { spaces: 2, EOL: '\r\n' }, function (err) {
    if (err) console.error(err)
})
