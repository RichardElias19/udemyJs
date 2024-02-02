{
    {
        {
            {
                var sera = 'sera???'
                console.log(sera) // scopo global
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)
// scopo local