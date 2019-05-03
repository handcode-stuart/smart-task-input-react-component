import React, { Component } from "react";
import { months } from "../validation/dates";

class SmartTaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: {},
            task: "",
        };
    }

    onChange = e => {
        e.preventDefault();
        const { value: task } = e.target;

        const taskArray = task.split(" ");

        let foundMonths = null;

        taskArray.forEach(word => {
            const searchedWord = word.toLowerCase();
            if (months.indexOf(searchedWord) > -1) {
                foundMonths = searchedWord;
            }
        });

        this.setTaskDate(foundMonths);

        this.setTaskToState(task);
    };

    setTaskToState = task => this.setState({ task });

    setTaskDate = month => this.setState({ date: { month } });

    render() {
        return <input type='text' value={this.state.task} onChange={this.onChange} />;
    }
}

export default SmartTaskInput;
