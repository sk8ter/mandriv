import * as React from 'react';

interface Props {
    countBy?: number;
}

interface State {
    count: number;
}

class Description extends React.Component<Props, State> {

    public static defaultProps: Partial<Props> = {
        countBy: 1,
    };

    public state: State = {
        count: 0,
    };

    public increase = () => {
        const countBy: number = this.props.countBy!;
        const count = this.state.count + countBy;
        this.setState({ count });
    };

    public render() {
        return (
            <div>
                <p>My favorite number is {this.state.count}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}

export default Description;