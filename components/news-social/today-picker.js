import React from 'react'
import moment from 'moment';

class TodayPicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dateObject: moment()
        }

        this.currentDay = this.currentDay.bind(this);
    }

    currentDay() {
        return this.state.dateObject.format('D')
    }

    currentMonth() {
        return this.state.dateObject.format('MMM');
    }

    render() {
        return (
        <div className={`${this.props.className} flex-shrink-0`}>
            <div className="w-full h-full border-2 border-blue-self flex flex-col justify-center text-center">
                <h1 className="text-blue-self text-2xl font-bold">{this.currentDay()}</h1>
                <h2 className="text-blue-self -mt-2">{this.currentMonth()}</h2>
            </div>
        </div>
        )
    }
}

export default TodayPicker;