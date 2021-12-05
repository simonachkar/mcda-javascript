function ceo() {
    setTimeout(() => console.log('I am the CEO'), 3000)
    cto()
}

function cto() {
    console.log('I am the CTO')
    teachlead()
}

function teachlead() {
    console.log('I am the Tech Lead')
    developer()
}

function developer() {
    console.log('I am the developer')
}

ceo()

/**
 * == Call Stack == *
 *
 * developer()
 * teachlead()
 * cto()
 *              ceo() // wait 3 seconds to log
 */
