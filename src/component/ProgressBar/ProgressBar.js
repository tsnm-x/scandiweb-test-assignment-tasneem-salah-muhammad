import React, { PureComponent } from "react";
import './ProgressBar.style.scss'

class ProgressBar extends PureComponent{

    render(){
        return (
            <>
            <div className="Progress-bar-bg">
                <div className="Progress-bar-line-container" style={{width: `${100/this.props.steps?.length}%`}}>
                    <div className={`Progress-bar-line ${this.props?.currentStep === this.props?.steps[0]?.objectTag ? "animation" : ""}`}></div>
                </div>
                {this.props?.steps?.map((step, index) => {
                    return (
                        <>
                            <div className="progress-step">
                                <div className="progress-step-num">{this.props?.currentStep === step?.objectTag ? (<>&check;</>) : (index + 1)}</div>
                                <div>{step?.progressBarTag}</div>
                            </div>
                            {
                                index !== (this.props.steps?.length-1) && 
                                <div className="Progress-bar-line-container" style={{width: `${100/(this.props.steps?.length+1)}%`}}>
                                    <div className={`Progress-bar-line ${this.props?.currentStep === this.props?.steps[0]?.objectTag ? "animation" : ""}`}></div>
                                </div>
                            }
                        </>
                    )
                })}
                <div className="Progress-bar-line-container" style={{width: `${100/this.props.steps?.length}%`}}>
                    <div className={`Progress-bar-line ${this.props?.currentStep === this.props?.steps[0]?.objectTag ? "animation" : ""}`}></div>
                </div>
            </div>
            </>
        )
    }
}

export default ProgressBar;