import react from 'react';

import style from './Botao.module.scss';

class Botao extends react.Component<{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    props: any;
    render() {
        const { type = "button", onClick } = this.props;
        return (
            <button onClick={onClick} type={type} className=
            {style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;