import React, { Component } from "react";
import { days, months } from "../validation/dates";

class SmartTaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: {},
            task: "",
        };
    }

    wasDateInputted = (taskArray, dateArray) => {
        let foundDate = null;

        taskArray.forEach(word => {
            const searchedWord = word.toLowerCase();
            if (dateArray.indexOf(searchedWord) > -1) {
                foundDate = searchedWord;
            }
        });

        return foundDate;
    };

    onChange = e => {
        e.preventDefault();
        const { value: task } = e.target;

        const taskArray = task.split(" ");

        const foundMonths = this.wasDateInputted(taskArray, months);
        this.setTaskDate(foundMonths);

        const foundDays = this.wasDateInputted(taskArray, days);
        this.setTaskDay(foundDays);

        this.setTaskToState(task);
    };

    setTaskToState = task => this.setState({ task });

    setTaskDate = month => this.setState(prevState => ({ date: { ...prevState.date, month } }));

    setTaskDay = day => this.setState(prevState => ({ date: { ...prevState.date, day } }));

    render() {
        const { month, day } = this.state.date;
        return (
            <div>
                <input type='text' value={this.state.task} onChange={this.onChange} />
                <p>
                    {day} {month}
                </p>
            </div>
        );
    }
}

export default SmartTaskInput;
