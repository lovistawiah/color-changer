import colorNames from "colornames"

const SubmitColor = ({colorName, setColor, setHexValue}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text"
                placeholder='add color name'
                role='searchbox'
                value={colorName}
                onChange={(e) => {
                    setColor(e.target.value.trim())
                    setHexValue(colorNames(e.target.value.trim()))
                }}
            />
        </form>
    )
}

export default SubmitColor