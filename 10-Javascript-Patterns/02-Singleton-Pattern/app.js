const Singleton = (function(){
    let instance

    function createInstance(){
        const object = new Object({name: 'Leo Cardoso'})
        return object
    }

    return {
        getIstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }

})()

const instanceA = Singleton.getIstance()
const instanceB = Singleton.getIstance()
console.log(instanceA)
console.log(instanceB === instanceA)