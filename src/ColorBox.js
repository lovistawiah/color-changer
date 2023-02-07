
const ColorBox = ({colorName, hexValue}) => {
    return (
        <div className="color-box"
            style={{ backgroundColor: colorName }}
        >
            <p>{hexValue ? hexValue : null}</p>
            {colorName ? colorName : "Empty Value"}
        </div>
    )
}

export default ColorBox