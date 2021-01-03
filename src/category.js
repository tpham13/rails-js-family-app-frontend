class Category {
    /*
    new Category({id: 1, name: "travel"})
    */
    constructor(attributes) {
        let category_attributes = ["id", "name", "active"]
        //forEach expects a function as an argument
        category_attributes.forEach(attr => this[attr] = attributes[attr])
        // line 7 is equivalent to this: 
        this.id = attributes.id
        this.name = attributes.name
    }
    
    /*
    Category.list() returns a reference to this DOM node: 
    <ul id="lists" class="list-none">
    </ul>
    */
   // instead making a query to the DOM everytime we call list, 
   //so we just do it for the first time and capture that DOM note
   //to reference in the l property on the class 
   //When refering to this in a static method, this is refer to the class itself
    static list() {
        return this.l ||= document.querySelector('#list')
    } 
}