export default function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", left: "0px", backgroundColor: "#5A80FB", width: "40px", height: "40px", padding: "10px", zIndex: "100"}} onClick={onClick}></div>
    )
}