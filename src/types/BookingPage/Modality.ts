import { SaludToolsModality } from "../../enums/SaludTools";

type Modality = {
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