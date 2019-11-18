import React from 'react';

interface ITitle {
    title: string,
};

class Headerbottun extends React.Component<ITitle> {
    public state: ITitle = {
        title: "Title",
    };
    constructor(props: ITitle) {
        super(props);
        const title: string = this.props.title;
        this.state.title = title;
    };
    public render (){
        return (
            <button type="button" className="Header-bottun Text">{ this.state.title }</button>
        );
    };
};

export default Headerbottun;