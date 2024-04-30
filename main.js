#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: 'todolist',
            type: 'input',
            message: "what you want to add in your todo list?",
        },
        {
            name: 'addmore',
            type: 'confirm',
            message: "do you want to add more ?",
            default: "false",
        }
    ]);
    todolist.push(addtask.todolist);
    condition = addtask.addmore;
    console.log(todolist);
}
