import React, { Component } from "react";
import { days, months, years } from "../validation/dates";

class SmartTaskInput extends Component {
    state = {
        name: "Stuart",
        date: {},
        task: "",
    };

    checkInputForDate = (taskArray, datesToSearch) => {
        let foundDate = null;

        taskArray.forEach(word => {
            const searchedWord = word.toLowerCase();
            if (datesToSearch.indexOf(searchedWord) > -1) {
                foundDate = searchedWord;
            }
        });

        return foundDate;
    };

    onChange = e => {
        e.preventDefault();
        const { value: task } = e.target;
        const taskArray = task.split(" ");

        this.setState({
            task,
            date: {
                day: this.checkInputForDate(taskArray, days),
                month: this.checkInputForDate(taskArray, months),
                year: this.checkInputForDate(taskArray, years),
            },
        });
    };

    render() {
        return <input type='text' value={this.state.task} onChange={this.onChange} />;
    }
}

export default SmartTaskInput;
