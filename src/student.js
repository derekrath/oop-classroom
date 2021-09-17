class Student {
  
}

module.exports = Student

// new Student()
// - should accept the following arguments: name, skillLevel
// - should have properties by the same name
// - should have a property of `assignments` which defaults to an empty array
// .study()
// - should increase the student's `skillLevel` by 1
// - should cannot increase the student's `skillLevel` above 100
// - should be chainable (e.g. student.study().study().study())
// .doHomework()
// - accepts an object that includes a `skillLevel` key and marks it as complete (i.e. adds a key of `completed` with a value of `true` to the homework) if the student's skill level is above the inputted homework's `skillLevel`
// - marks homework as incomplete (i.e. `complete: false`) if the skillLevel is too high
// - adds the homework to the `assignments` array whether or not it is completed
// - does not add the homework to the `assignments` array if it does not have a `skillLevel`
// - does not add the homework to the `assignments` array if it's `skillLevel` is below 1
// - does not add the homework to the `assignments` array if it's `skillLevel` is above 100
// - if no argument is added, attempts to complete all incomplete homework and will complete it if the `skillLevel` is higher
// - if no argument is added, attempts to complete all incomplete homework but it will stay incomplete if `skillLevel` is still not enough