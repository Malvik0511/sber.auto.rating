import { buildForm as byNumber } from "./steps/main-params/by-number";
import { buildForm as byVin } from "./steps/main-params/by-vin";

const root = {
    forms: {
        mainParams:{
            byNumber: byNumber(),
            byVin: byVin()
        }
    }
}

export default root
