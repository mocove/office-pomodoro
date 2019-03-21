import React from 'react';

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        //set props as values
    }

    render() {
        const isOpen = !this.props.show;
        if (isOpen) {
            return null;
        } else {
            return(
                <div id="settings">
                    <form>
                        <p>
                        <label>Big text:&nbsp;
                            <input onChange={this.props.handlers.txtHeadlineHandler} type="text" defaultValue={this.props.texts.bigText}></input>
                        </label></p>
                        <p>
                        <label>Smaller text:&nbsp;
                            <input onChange={this.props.handlers.txtLeadupHandler} type="text" defaultValue={this.props.texts.smallText}></input>
                        </label></p>
                        <p>
                        <label>Thank you text:&nbsp;
                            <input onChange={this.props.handlers.txtEndingHandler} type="text" defaultValue={this.props.texts.thankYouText}></input>
                        </label></p>
                        
                        <p>
                        <label>Minutes:&nbsp;
                            <input type="number" defaultValue="25"></input>
                        </label></p>
                        <p>Language:</p> 
                            <input name="language" type="radio" id ="english" value="English" />
                            <label for="english">English</label>
                            <input name="language" type="radio" id ="danish" value="English" />
                            <label for="english">Dansk</label>
                        
                    </form>
                </div>
            )
        }
    }
}

export default Settings