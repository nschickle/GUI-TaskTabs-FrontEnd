import * as React from "react";
import styled from "styled-components";

const LabelText = styled.label`
    font-size: 32px;
    display: block;
    text-align: center;
    margin-left: 10px;
	margin-right: 10px;
    margin-bottom: 10px;
`;

const Select = styled.select`
    font-size: 32px;
    margin: 5px;
`;

interface IDays {
    id: number;
    day: number;
}

interface IMonths {
    id: number;
    month: number;
}

interface IYears {
    id: number;
    year: number;
}

// Needed in order to do anything with changing the state
interface IDayState {
    dayDue: any;
}

interface IDayDropdownProps {
    dayDue: number;
    dayList: IDays[];
}

interface IMonthState {
    monthDue: any;
}

interface IMonthDropdownProps {
    monthDue: number;
    monthList: IMonths[];
}

interface IYearState {
    yearDue: any;
}

interface IYearDropdownProps {
    yearDue: number;
    yearList: IYears[];
}

export class DayDropdown extends React.Component<IDayDropdownProps, IDayState> {
	options: IDays[];

    constructor(props: IDayDropdownProps) {
        super(props);
        this.state = {dayDue: props.dayDue}
        this.options = props.dayList;

        this.handleChange = this.handleChange.bind(this);
    }
	
	// Handles when the state is changed
    // Currently only changes the status
    // Will need to add warnings and change parent and children states as nessisary
    handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({dayDue: e.target.value});
    }
	
	render() {
        const dayDue = this.state.dayDue;

        // Maps through the array given and sets up the options
        // Needs to be done in the render() function or will not produce the proper output
        const arrayOp = this.options.map((item, i) => {
            return (
                <option key={item.id} value={item.id}>{item.day}</option>
                )
        });

        return(
            <LabelText>
                <Select value={dayDue} onChange={this.handleChange}>
                    {arrayOp}
                </Select>
            </LabelText>
        )
    }
}

export class MonthDropdown extends React.Component<IMonthDropdownProps, IMonthState> {
	options: IMonths[];

    constructor(props: IMonthDropdownProps) {
        super(props);
        this.state = {monthDue: props.monthDue}
        this.options = props.monthList;

        this.handleChange = this.handleChange.bind(this);
    }
	
	// Handles when the state is changed
    // Currently only changes the status
    // Will need to add warnings and change parent and children states as nessisary
    handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({monthDue: e.target.value});
    }
	
	render() {
        const monthDue = this.state.monthDue;

        // Maps through the array given and sets up the options
        // Needs to be done in the render() function or will not produce the proper output
        const arrayOp = this.options.map((item, i) => {
            return (
                <option key={item.id} value={item.id}>{item.month}</option>
                )
        });

        return(
            <LabelText>
                <Select value={monthDue} onChange={this.handleChange}>
                    {arrayOp}
                </Select>
            </LabelText>
        )
    }
}

export class YearDropdown extends React.Component<IYearDropdownProps, IYearState> {
	options: IYears[];

    constructor(props: IYearDropdownProps) {
        super(props);
        this.state = {yearDue: props.yearDue}
        this.options = props.yearList;

        this.handleChange = this.handleChange.bind(this);
    }
	
	// Handles when the state is changed
    // Currently only changes the status
    // Will need to add warnings and change parent and children states as nessisary
    handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({yearDue: e.target.value});
    }
	
	render() {
        const yearDue = this.state.yearDue;

        // Maps through the array given and sets up the options
        // Needs to be done in the render() function or will not produce the proper output
        const arrayOp = this.options.map((item, i) => {
            return (
                <option key={item.id} value={item.id}>{item.year}</option>
                )
        });

        return(
            <LabelText>
                <Select value={yearDue} onChange={this.handleChange}>
                    {arrayOp}
                </Select>
            </LabelText>
        )
    }
}