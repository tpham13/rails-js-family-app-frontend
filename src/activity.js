console.log("we're in activity class") 

class Activity { 
    constructor(attributes) {
        let activity_attributes = ["id", "name", "notes"]
        activity_attributes.forEach(attr => this[attr] = attributes[attr])
    }

    static  
}