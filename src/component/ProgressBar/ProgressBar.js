import React, { PureComponent } from "react";
import './ProgressBar.style.scss'

class ProgressBar extends PureComponent{

    constructor(props){
        super(props);

        this.state = {
            currentIndex: 0
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.currentStep !== this.props.currentStep){
            for(let i=0; i< this.props?.steps.length; i++){
                if(this.props?.currentStep === this.props?.steps[i]?.objectTag){
                    this.setState({
                        currentIndex: i
                    })
                }
            }
        }
    }

    render(){
        return (
            <>
            <div className="Progress-bar-bg">
                <div className="Progress-bar-line-container" style={{width: `${100/this.props.steps?.length}%`}}>
                    <div className={`Progress-bar-line animation`}></div>
                </div>
                {this.props?.steps?.map((step, index) => {
                    return (
                        <>
                            <div className="progress-step">
                                <div className={`progress-step-num ${this.state?.currentIndex > index || this.state?.currentIndex === index ? "bubble-animation": ""}`}>
                                    {index !== (this.props.steps?.length-1)? 
                                        this.state?.currentIndex > index? 
                                        (<div dangerouslySetInnerHTML={{__html: '&check;'}}></div>) : index+1
                                        : this.state?.currentIndex === index? 
                                        (<div dangerouslySetInnerHTML={{__html: '&check;'}}></div>) : index+1
                                        }
                                    </div>
                                <div>{step?.progressBarTag}</div>
                            </div>
                            {
                                index !== (this.props.steps?.length-1) ?
                                <div className="Progress-bar-line-container" style={{width: `${100/(this.props.steps?.length+1)}%`}}>
                                    <div className={`Progress-bar-line ${ this.state?.currentIndex < index+1? "" : "animation"}`}></div>
                                </div>
                                : 
                                <div className="Progress-bar-line-container" style={{width: `${100/this.props.steps?.length}%`}}>
                                    <div className={`Progress-bar-line ${ this.state?.currentIndex < index? "" : "animation"}`}></div>
                                </div>
                            }
                        </>
                    )
                })}
                
            </div>
            </>
        )
    }
}

export default ProgressBar;