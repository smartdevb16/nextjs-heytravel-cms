export default function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} style={{ ...style, display: "block", right: "0px",  backgroundColor: "#5A80FB", width: "40px", height: "40px", padding: "10px", zIndex: "100"}} onClick={onClick}></div>
    )
}