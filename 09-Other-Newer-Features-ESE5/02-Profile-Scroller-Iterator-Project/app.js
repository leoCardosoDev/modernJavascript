const btn = document.getElementById('next')
const img = document.getElementById('imageDisplay')
const profile = document.getElementById('profileDisplay')

const data = [{
        name: 'Mary Doe',
        age: 32,
        gender: 'female',
        lookingfor: 'male',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
    {
        name: 'Jen Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miame FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Luiza Johnson',
        age: 20,
        gender: 'female',
        lookingfor: 'male',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/women/20.jpg'
    },
    {
        name: 'Giu Lindsey',
        age: 22,
        gender: 'female',
        lookingfor: 'male',
        location: 'Tampa FL',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    }
]

const profiles = profileIterator(data)

// Call first profile
nextProfile()

btn.addEventListener('click', nextProfile)

function nextProfile(){

    const currentProfile = profiles.next().value
    if(currentProfile !== undefined){
        profile.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">
                Preference: ${currentProfile.gender}
                Looking for: ${currentProfile.lookingfor}
            </li>
        </ul>
        `
        img.innerHTML = `
            <img src="${currentProfile.image}">
    `
    }else{
        // no more profile
        window.location.reload()
    }
}

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0

    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    }
}