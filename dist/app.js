// // 3 najbardziej podstawowe typy danych
// const x: number = 5;
// const y: string = "lalala";
// const z: boolean = true;
// import { Category, Task } from "./types/types";
// // typowanie funkcji
// const divide = (number1: number, number2: number): number => number1 / number2;
// const a = divide(10, 2);
// console.log(a);
// // forEach
// // Array.prototype.forEach((el: number) => {
// //     console.log(el)
// // })
// // typowanie list
// type numberOrString = number | string;
// const array1: numberOrString[] = [1, "a", 3, "b "];
// const array2: Array<string> = ["a", "b", "c", "d"];
// // typowanie obiektow
// interface Person {
//   name: string;
//   job: string;
// }
// const array3: Person[] = [
//   {
//     name: "Kacper",
//     job: "programmer",
//   },
//   {
//     name: "Ania",
//     job: "nurse",
//   },
//   {
//     name: "Maciek",
//     job: "bus driver",
//   },
// ];
// // typowanie elementów html
// const form: HTMLFormElement = document.querySelector(".main-form");
// const input: HTMLInputElement = document.querySelector(".text-input");
// const button: HTMLElement = document.getElementById("main-form-submit-button");
// form.addEventListener("submit", function (e: Event) {
//   e.preventDefault();
//   console.log(divide(+input.value, 10));
// });
// // union types
// let union: string | number | boolean;
// union = true;
// union = "lalala";
// union = 5;
// // union = {};
// type Category = 'work' |
const categories = ["work", "life", "education", "sport"];
const tasks = [
    {
        title: "Wyrzucić śmieci",
        done: false,
        category: "life",
    },
    {
        title: "Wyjść z psem",
        done: true,
        category: "life",
    },
    {
        title: "Pobiegać",
        done: false,
        category: "sport",
    },
];
// STWORZ FUNKCJE RENDER
// FOREACHEM RENDERUJECIE WSZYSTKIE TASKI
// STWORZ UL I W PETLI FE DODAWAJ LI
// DO KAZDEGO LI DODAJCIE INPUT TYPE CHECKBOX
const render = (tasks) => {
    tasks.forEach((el) => {
        // selecting the ul element
        const tasksList = document.querySelector(".tasks-list");
        // creating the lis
        const li = document.createElement("li");
        // if (el.category){
        //     li.classList.add(el.category)
        // }
        li.textContent = `${el.title} (${el.category})`;
        // creating the checkbox
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        checkBox.checked = el.done;
        li.appendChild(checkBox);
        tasksList.appendChild(li);
        // do każdego li podepnij event listener na click, jeżeli done === false to ustaw i na odwrót
        li.addEventListener("click", () => {
            if (el.done === false) {
                el.done = true;
                checkBox.checked = true;
            }
            else {
                el.done = false;
                checkBox.checked = false;
            }
        });
    });
};
render(tasks);
