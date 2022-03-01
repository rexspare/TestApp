// FOR ADD ITEM CART
export const AddCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// FOR DELETE ITEM CART
export const DelCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const ResetCart = () => {
    return {
        type: "RESET"
    }
}