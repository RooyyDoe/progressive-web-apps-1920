// https://stackoverflow.com/questions/8900732/sort-objects-in-an-array-alphabetically-on-one-property-of-the-array
// https://www.youtube.com/watch?v=UeXDAu7SdmY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

function sortingGameData(data, selectValue) {

    switch (selectValue) {
        case "a":
            // Sorts alphabetical A - Z
            data.sort((highest, lowest) => highest.name.localeCompare(lowest.name.toLowerCase()))
            break
        case "z":
            // Sorts alphabetical Z - A
            data.sort((highest, lowest) => lowest.name.localeCompare(highest.name.toLowerCase()))
            break
        case "hoog":
            // Sorts on highest rating
            data.sort((highest, lowest) => lowest.rating - highest.rating)
            break
        case "laag":
            // Sorts on lowest rating
            data.sort((highest, lowest) => highest.rating - lowest.rating)
            break
    }
    const dataObj = {
        results: data
    }
    return dataObj
}

module.exports = sortingGameData;