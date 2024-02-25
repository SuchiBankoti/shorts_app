import './App.css';

function Welcome(props) {
    return (
        <div onClick={() => props.setOpen(false)} className='welcome-page'>
            <div className='welcome-text'>Welcome</div>
        </div>
    )
}

export default Welcome;
