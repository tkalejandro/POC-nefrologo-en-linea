import { SaludToolsModality } from "../../enums/SaludTools";

interface Modality {
    /**
     * ID
     */
    id: number

    /**
     * Type of modality
     */
    modality: SaludToolsModality

    /**
     * Icon to render
     */
    icon: JSX.Element
}

export default Modality