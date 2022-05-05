# AngularInterviewExercises

[**Live Demo**](https://daniel-angular-exercise.netlify.app/)


1. Exercise: Dynamically assign background color for div block that contains palindromic string. palindromic string - green, or else - red. **Skills**: attribute directive, string manipulation, css. Component name: `palindrome`


2. Show filtered list of cities. Maybe debounce how often you can filter or search. **Skills**: pipe, filter, debounce. Component name: `city-filter`

3. Add item into a list. **Skills**: two-way binding, ngModel. Component name: `add-item`

4. Counter. **Skills**: two way binding. Component name: `counter`

5. Counter with auto-increment. **Skills**: two way binding, setInterval. Component name: `counter-auto`

6. Fibonacci sequence. **Skills**: recursion. Component name: `fibonacci`

7. Dependency Injection. Hiding logic and data structure in a service, meanwhile, use wrapper to implement higher logic. **Skills**: service, dependency injection. Component name: `di-playground`

8. Custom attribute directive to make an element change its color

9. Custom attribute directive with input to make an element change color based on the radio button value. Component name `input-attribute-directive`

10. Custom structural directive that implements as the opposite of "*NgIf". Component name `structural-directive` and directive name `structural-unless`

11. Brainstorm Voting System: The highest vote will get highlighted as yellow all time, and you can upvote and downvote. Component name `brainstorm-vote`

12. Pagination: Show 10 items per page, and you can go to next page or previous page. Component name `pagination`. You can filter by book title and set the default page size for the pagination. 

13. Login form with email validation and password validation. Email needs to be input twice. Password needs to be input twice. Component name `login-form`. At the end you can submit it.

14. Traffic light: Implement a traffic light with 3 colors. Component name `traffic-light`. There is a stop and resume toggle button. There are 3 lights, and they rotate by time.

15. Implement a simple calculator. There are 10 digital buttons and you can do addition, reduction and equal. Component name `calculator`.

16. Process bar with 3 buttons: start, pause and reset. Component name `process-bar`. The process bar will increase its length to indicate the process. It also loops infinitely.

17. rxjs: Implement a simple counter with rxjs. Component name `rxjs-counter`.

18. rxjs: use "of" to load data, use timer to pipe the data so it can debounce. Eventually, console log the last value in the example. The example could be ['WAIT', 'ONE', 'SECOND', 'Last will display']. Component name `rxjs-debounce` //TODO

19. rxjs: use "fromEvent, timer, debounce, and map" to log click event every 2 seconds max. Component name `rxjs-fromEvent` //TODO

20. fetch use HttpClient to show a list of users from 'https://jsonplaceholder.typicode.com/users'. Component name `fetch-user` //TODO

21. rxjs Observables. Undocumented, quick prep for interviews. Behavior of observables and subscribers. // TODO: undocumented

22. You have a nested object. You use it to design a nested nav bar. Only when user clicked on the tab, the child tab will show. Component name `nested-nav` 

23. Problem Description You're tasked with creating a simple Angular application that simulates the loading of a new page upon the click of a button. The new page will have different messages to indicate its loading state. Here are the stages: Initial State: A button that says "Load Page" is displayed. First 3 seconds: Once clicked, the button should take the user to a new "page" (or change the existing view) that initially displays the text "The page is loading..." Next 2 seconds: After the first 3 seconds but before 5 seconds have elapsed, add the text "The page is still loading..." After 10 seconds: Replace the loading text with the "fake page" content, simulating that the page has finished loading. Component name `loading-page`, peer mock YF

24. Problem Description You are tasked with creating a simple Angular application that consists of a form to collect user information and a display area to show the submitted information in a list format. The form should have the following fields: First Name (text input) Last Name (text input) Email (text input with email validation) Age (numeric input) Below the form, display a list of submitted user information cards. Requirements: The form should be created using Angular's Reactive Forms. All form fields are required. Email should be validated to ensure it's in the correct format. Implement a "Submit" button that is disabled until the form is valid. Once the form is submitted, clear the form and add the submitted information to the list of user cards below. Each user card should have an option to delete the card from the list. Component name `interview-form`, peer mock YF

25. Input, output, EventEmitter. Component `input-output-eventemitter`

26. Dynamically showing radio buttons based on your dropdown input. Component `dynamic-form`

27. Display a list of user information fetched from an API, while creating a form to input name, email, and website, utilizing the User interface, a UserService with the HttpClient module injected, and the main component consuming the service.Component `http-user-list`


28. List all books fetched from the API, then implement a filter function based on book title or author using the `filter-title-and-author` component. Duration 25 mins

29. Two APIs. Click on user in card to get detail of his/her posts from another API. Component name: `card-show-detail`.Duration 45 mins

30. One API. Get the category list, show all of them and add a header dynamically. Component name: `http-categories`. Duration 29 mins

31. Custom Validator. Component name: `form-validator`.

## Great APIs
1. https://openlibrary.org/subjects/world.json
2. https://jsonplaceholder.typicode.com/users
3. https://jsonplaceholder.typicode.com/posts
4. https://api.publicapis.org/categories

## Great question source
1. https://www.codecademy.com/resources/blog/angular-code-challenges-for-beginners/