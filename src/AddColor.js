import SubmitColor from './SubmitColor'
import ColorBox from './ColorBox'

const AddColor = ({ colorName, hexValue, setColor, setHexValue }) => {
    return (
        <div className="App">
            <ColorBox
                colorName={colorName}
                hexValue={hexValue}
            />
            <SubmitColor
                colorName={colorName}
                setColor={setColor}
                setHexValue={setHexValue}
            />
        </div>
    )
}

export default AddColor
