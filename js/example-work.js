import React from 'react';
import ExampleWorkBubble from './example-work-bubble';

class ExampleWork extends React.Component {
    render() {
        return (
            <section className="section section--alignCentered section--description">
                {this.props.work.map( (example ,idx) => {
                    return (
                        <ExampleWorkBubble example={example} key={idx}/>
                    )
                })}

            </section>

        )
    }
}

export default ExampleWork;