const course =
{
    Name : 'Python',
    Price : 999,
    Teacher : 'YouTube',
};

course.Name = 'JavaScript' // Change the value of "Name"

// Important -> Desctructuring an object
// Another way to print the value of an object, usefull when you have to print the value of an object in a loop
{
    const {Name} = course
    console.log(Name) // JavaScript

    // You can also use this method to print the value of an object
    const {Teacher : T} = course
    console.log(T) // YouTube
}

// JSON Syntax ->
// {
//     "Name" : "Saransh Bangar",
//     "RegNo" : "RA2211033010093",
//     "Branch" : "CSE - SWE"
// }
