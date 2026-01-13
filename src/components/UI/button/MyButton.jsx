import classes from './MyButton.module.css';

const MyButton = (props) => {
    const {
        children,
    } = props;
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton;