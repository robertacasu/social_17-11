var user = (function () { 
    var getAll = function () {
        return fetch("https://randomuser.me/api/?results=20");
    }
    var getMale = function () {
        return fetch("https://randomuser.me/api/?results=10/?gender=male");
    }
    var getFemale = function (id) {
        return fetch("https://randomuser.me/api/?results=10/?gender=female");
    } 
    return {
        getAll : getAll,
        getMale : getMale,
        getFemale: getFemale,    
    }
})()

