
export const CUSTOMER_PHONE_NUMBER = "[CUSTOMER_PHONE_NUMBER] Update";

export const updateCustomerNumber = (payload: string) => ({type: CUSTOMER_PHONE_NUMBER, payload: payload});
