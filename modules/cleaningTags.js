//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

function cleanTagsData(data) {
    // Variable with the data in it.
    let dataObj = data

    // Making a new map of the results array in the data.
    dataObj.results.map(item => {
        // Making a new map of the tags object in results
        // and putting this into a variabele.
        let newTagArray = item.tags.map(tag => {
            // returns the data how I want it to be.
            return tag = {
                name: tag.name,
                language: tag.language
            }
        })
        // This piece of code filters out all the russian tags that are
        // inside the data. And will only show the english tags.
        let filteredArray = newTagArray.filter(tag => tag.language === 'eng')
        // The value of the variable will override the tags object in results.
        item.tags = filteredArray
        return item
    });
    return dataObj
}

module.exports = cleanTagsData;