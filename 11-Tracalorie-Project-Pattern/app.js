// Storage Controlller
const StorageCtrl = (function(){

    // Public Methods
    return {
        storeItem: function(item){
            let items
            // Check if any items in ls
            if(localStorage.getItem('items') === null){
                items = []
                // Push new Items
                items.push(item)

                // Set ls
                localStorage.setItem('items', JSON.stringify(items))
            }else{
                // Get what is already in ls
                items = JSON.parse(localStorage.getItem('items'))

                // Push new item
                items.push(item)
            
                // Reset ls
                localStorage.setItem('items', JSON.stringify(items))
            }
        },
        getItemFromStorage: function(){
            let items
            if(localStorage.getItem('items') === null){
                items = []
            }else{
                items = JSON.parse(localStorage.getItem('items'))
            }
            return items
        },
        updateItemStorage: function(updateItem){
            let items = JSON.parse(localStorage.getItem('items'))
            items.forEach(function(item, index){
                if(updateItem.id === item.id){
                    items.splice(index, 1, updateItem)
                }
            })
            localStorage.setItem('items', JSON.stringify(items))
        },
        deleteItemFromStorage: function(id){
            let items = JSON.parse(localStorage.getItem('items'))
            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index, 1)
                }
            })
            localStorage.setItem('items', JSON.stringify(items))
        },
        clearitemsFromStorage: function(){
            localStorage.removeItem('items')
        }
    }
})()

// Item Controller
const ItemCtrl = (function () {
    // Item constructor
    const Item = function (id, name, calories) {
        this.id = id
        this.name = name
        this.calories = calories
    }

    // Data Structure / State 
    const data = {
        items: StorageCtrl.getItemFromStorage(),
        currentItem: null,
        totalCalories: 0
    }

    // Public methods
    return {
        getItems: function () {
            return data.items
        },
        addItem: function (name, calories) {
            let ID
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1
            } else {
                ID = 0
            }

            // Calories to number
            calories = parseInt(calories)

            // Create new item
            newItem = new Item(ID, name, calories)
            // Add item to array
            data.items.push(newItem)

            return newItem
        },
        getItemById: function(id){
            let found = null
            // Loop through items
            data.items.forEach(function(item){
                if(item.id === id){
                    found = item
                }
            })

            return found
        },
        updateItem: function(name, calories){
            // Calories to number
            calories = parseInt(calories)
            let found = null
            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name
                    item.calories = calories
                    found = item
                }
            })
            return found
        },
        deleteItem: function(id){
            // Get ids
            ids = data.items.map(function(item){
                return item.id
            })

            // Get index
            const index = ids.indexOf(id)

            // Remove Item
            data.items.splice(index, 1)
        },
        clearAllItems: function(){
            data.items = []
        },
        setCurrentItem: function(item){
            data.currentItem = item
        },
        getCurrentItem: function(){
            return data.currentItem
        },
        getTotalCalories: function () {
            let total = 0
            // Loop through item and add cal
            data.items.forEach(function (item) {
                total += item.calories
            })

            // Set total cal in data structure
            data.totalCalories = total

            // Return total
            return data.totalCalories
        },
        logData: function () {
            return data
        }
    }

})()

// UI Controller
const UiCtrl = (function () {

    const UiSelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCaloriesSpan: '.total-calories'
    }

    // Public methods
    return {
        populateItemList: function (items) {
            let html = ''
            items.forEach(function (item) {
                html += `
                    <li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    </li>
                `
            })

            // Insert List Items
            document.querySelector(UiSelectors.itemList).innerHTML = html
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UiSelectors.itemNameInput).value,
                calories: document.querySelector(UiSelectors.itemCaloriesInput).value
            }
        },
        addListItem: function (item) {
            // show the list
            document.querySelector(UiSelectors.itemList).style.display = 'block'
            // Create Li item
            const li = document.createElement('li')
            // Add Clas
            li.className = 'collection-item'
            li.id = `item-${item.id}`
            // Add HTML
            li.innerHTML = `
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
            `
            // Insert item
            document.querySelector(UiSelectors.itemList).insertAdjacentElement('beforeend', li)
        },
        clearInput: function () {
            document.querySelector(UiSelectors.itemNameInput).value = ''
            document.querySelector(UiSelectors.itemCaloriesInput).value = ''
        },
        addItemToForm: function(){
            document.querySelector(UiSelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name 
            document.querySelector(UiSelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories
            UiCtrl.showEditState()
        },
        updateListItem: function(item){
            let listItem = document.querySelectorAll(UiSelectors.listItems)

            // Turn Nodelist into arrat
            listItem = Array.from(listItem)
            listItem.forEach(function(listItem){
                const itemID = listItem.getAttribute('id')

                if(itemID === `item-${item.id}`){
                    document.querySelector(`#${itemID}`).innerHTML = `
                        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                    `
                }
            })
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`
            const item = document.querySelector(itemID)
            item.remove()
        },
        removeItems: function(){
            let listItems = document.querySelectorAll(UiSelectors.listItems)

            // Turn NodeList in array
            listItems = Array.from(listItems)
            
            listItems.forEach(function(item){
                item.remove()
            })
        },
        hideList: function () {
            document.querySelector(UiSelectors.itemList).style.display = 'none'
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UiSelectors.totalCaloriesSpan).textContent = totalCalories
        },
        showEditState: function(){
            document.querySelector(UiSelectors.updateBtn).style.display = 'inline'
            document.querySelector(UiSelectors.deleteBtn).style.display = 'inline'
            document.querySelector(UiSelectors.backBtn).style.display = 'inline'
            document.querySelector(UiSelectors.addBtn).style.display = 'none'
        },
        clearEditState: function () {
            UiCtrl.clearInput()
            document.querySelector(UiSelectors.updateBtn).style.display = 'none'
            document.querySelector(UiSelectors.deleteBtn).style.display = 'none'
            document.querySelector(UiSelectors.backBtn).style.display = 'none'
            document.querySelector(UiSelectors.addBtn).style.display = 'inline'
        },
        getSelectors: function () {
            return UiSelectors
        }
    }
})()

// App Controller
const App = (function (ItemCtrl, StorageCtrl, UiCtrl) {
    // Load Event Listeners
    const loadEventListeners = function () {
        const UiSelectors = UiCtrl.getSelectors()

        // Add item event
        document.querySelector(UiSelectors.addBtn).addEventListener('click', itemAddSubmit)
        document.querySelector(UiSelectors.itemList).addEventListener('click', itemEditClick)
        document.querySelector(UiSelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        document.querySelector(UiSelectors.backBtn).addEventListener('click', UiCtrl.clearEditState)
        document.querySelector(UiSelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        document.querySelector(UiSelectors.clearBtn).addEventListener('click', clearAllItemsClick)
        // Disable enter submit
        document.addEventListener('keypress', function(e){
            if(e.keyCode === 13 || e.which === 13){
                e.preventDefault()
                return false
            }
        })
    }

    const setCalories = function (){
        // Get total Calories
        const totalCalories = ItemCtrl.getTotalCalories()
        // Add total calories to UI
        const calories = UiCtrl.showTotalCalories(totalCalories)
        return calories
    }

    // Add Item Submit
    const itemAddSubmit = function (e) {
        // Get form input from UI Controller
        const input = UiCtrl.getItemInput()

        // Check for name and calorie input
        if (input.name !== '' && input.calories !== '') {
            // add item
            const newItem = ItemCtrl.addItem(input.name, input.calories)

            // Add Item to UI list
            UiCtrl.addListItem(newItem)

           setCalories()

           // Store in localStorage
           StorageCtrl.storeItem(newItem)

            // Clear Fields
            UiCtrl.clearInput()
        }

        e.preventDefault()
    }

    // Edit item click
    const itemEditClick = function(e){
        if(e.target.classList.contains('edit-item')){
            // Get list item id
            const listId = e.target.parentNode.parentNode.id
            // Break into an array
            const listIdArray = listId.split('-')
            // Get the actual id
            const id = parseInt(listIdArray[1])
            // Get item 
            const itemToEdit = ItemCtrl.getItemById(id)
            // Set item current item
            ItemCtrl.setCurrentItem(itemToEdit)

            // Add item to form
            UiCtrl.addItemToForm()
        }
        e.preventDefault()
    }

    // Update Item Submite
    const itemUpdateSubmit = function(e){
        // Get Item Input
        const input = UiCtrl.getItemInput()
        
        // Update item
        const updateItem = ItemCtrl.updateItem(input.name, input.calories)
        
        // Update UI
        UiCtrl.updateListItem(updateItem)

        setCalories()

        // Update localStorage
        StorageCtrl.updateItemStorage(updateItem)

        UiCtrl.clearEditState()

        e.preventDefault()
    }

    // Delete Item Submit
    const itemDeleteSubmit = function(e){
        // Get current Item
        const currentItem = ItemCtrl.getCurrentItem()

        // Delete from data structure
        ItemCtrl.deleteItem(currentItem.id)

        setCalories()

        // Delete from localStorage
        StorageCtrl.deleteItemFromStorage(currentItem.id)

        UiCtrl.clearEditState()

        // Delete from UI
        UiCtrl.deleteListItem(currentItem.id)

        e.preventDefault()
    }

    // Clear All Items Click
    const clearAllItemsClick = function(e){
        // Delete all items from data structure
        ItemCtrl.clearAllItems()

        setCalories()
        UiCtrl.clearEditState()

        // Clear from UI
        UiCtrl.removeItems()

        // Clear From localStorage
        StorageCtrl.clearitemsFromStorage()

        // Hide ul
        UiCtrl.hideList()

        e.preventDefault()
    }

    // Public Methods
    return {
        init: function () {
            console.log('Initializing App...')

            // Clear edit state / set initial set
            UiCtrl.clearEditState()

            // Fetch Items from data structure
            const items = ItemCtrl.getItems()

            // Check if any items
            if (items.length === 0) {
                UiCtrl.hideList()
            } else {
                // Populate list with items PopulateItemList
                UiCtrl.populateItemList(items)
            }

            setCalories()

            // Load event Listeners
            loadEventListeners()
        }
    }
})(ItemCtrl, StorageCtrl, UiCtrl)

// Initialize App
App.init()