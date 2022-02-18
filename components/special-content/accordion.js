import React from 'react'

export default class Accordion extends React.Component {
    
    render() {
        return (
            <div>
                <h1 className="text-4xl font-bold text-left py-2">FAQS</h1>
                <div className="w-full h-auto">
                    {this.props.hiddenTexts.map((item) => 
                        <AccordionItem key={item.label}
                                       hiddenBody={item} />)}
                </div>
            </div>
        );
    }
}

class AccordionItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }

    render() {
        const activeStatus = this.state.visibility ? 'h-auto opacity-100' : 'h-0 opacity-0'

        return (
            <div className="w-full pb-6">
                <button className="flex justify-between w-full p-4 text-gray-700 border-2 border-accordion-border" onClick={this.handleToggleVisibility}>
                    {this.props.hiddenBody.label}<span className={this.state.visibility? 'fa fa-angle-down fa-rotate-180': 'fa fa-angle-down'}></span>
                </button>
                <div className={`flex transition-all duration-500 bg-accordion-bg text-white ${activeStatus}`}>
                    <h1 className="w-1/2 text-left text-2xl m-4">{this.props.hiddenBody.headline}</h1>
                    <p className="w-1/2 text-left m-4">{this.props.hiddenBody.text}</p>
                </div>
                
            </div>
        );
    }
}