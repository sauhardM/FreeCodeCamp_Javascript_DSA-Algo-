// Apply Functional Programming to Convert Strings to URL Slugs

// Only change code below this line
function urlSlug(title) {

    return title.split(/[^a-zA-Z]/g).map(array => array).filter(array => (array)).join("-").toLowerCase();
}
// Only change code above this line
urlSlug(" Winter Is  Coming");