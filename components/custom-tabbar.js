import React from 'react'

class CustomTabbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentTab: 0
        }
    }

    classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    activeTab(e) {
        this.setState({
            currentTab: parseInt(e.target.id)
        })
    }

    render() {
        const tabList = ['Tab One', 'Tab Two', 'Tab Three'];

        return (
            <div className="border border-gray-300 space-x-0 sm:space-x-1 xl:space-x-3 text-xs sm:text-md md:text-base xl:text-xl rounded-full" style={{width: "max-content", margin: "auto"}}>
            {this.props.tabList.map((title, i) => {
                return (
                    <a
                        className={this.classNames(
                            i === this.state.currentTab ? this.props.tabBtnStyles.active : this.props.tabBtnStyles.inactive,
                            'rounded-full w-auto px-3 sm:px-8 md:px-8 lg:px-4 xl:px-4 py-3 inline-block cursor-pointer'
                        )}
                        id = {i.toString()}
                        key = {i}
                        onClick={e => this.activeTab(e)}
                    >{title}</a>
                )
            })}
            </div>
        )
    }
}

export default CustomTabbar;